import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useProtect } from '../../Components/ProtectedRoute/useProtect'
import 'react-multi-carousel/lib/styles.css';
import { Main, Div } from './styles'
import Candidates from './Candidates/Candidates'
import HeaderDetailsOrForm from '../Fixeds/Header/HeaderDetailsOrForm'
import { goToBack } from '../../Router/Coordinator'
import useAxios from '../../Components/Hooks/useAxios'
import { putData } from '../../Components/ConfigAxios/putData'
import { Base_Url, headerCors} from '../../Components/ConfigAxios/ConfigAxios';

export default function TripDetailsPage() {
    const pathParams = useParams()
    const [detail, updateDetail] = useAxios({}, Base_Url, `trip/${pathParams.id}`, headerCors)

    const trip = detail.trip
    const history = useHistory()

    const decideCandidate = (approve, candidateId) => {
        putData(`trips/${pathParams.id}/candidates/${candidateId}/decide`, approve, 'Concluído', 'Não foi possível concluir a ação')
    }

    useProtect()
    return (
        <>
            <HeaderDetailsOrForm
                name={`Detalhes da viagem`}
                buttonTrips={"Voltar"}
                onClick={() => goToBack(history)}
            />
            <Main>
                <div>
                    <Div>
                        <h4>{trip && trip.name}</h4>
                        <p><b>Planeta:</b> {trip && trip.planet}</p>
                        <p><b>Duração:</b> {trip && trip.durationInDays} dias</p>
                        <p><b>Descrição:</b> {trip && trip.description}</p>
                    </Div>

                    <Div>
                        {trip ?
                            <Candidates candidates={trip && trip.candidates}
                                decideCandidate={decideCandidate}
                                updateDetail={updateDetail}
                            />
                            : <div>Carregando..</div>}
                    </Div>
                </div>
            </Main>
        </>
    )
}