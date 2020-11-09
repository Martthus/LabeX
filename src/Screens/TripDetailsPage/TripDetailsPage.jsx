import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useProtect } from '../../Components/ProtectedRoute/useProtect'
import 'react-multi-carousel/lib/styles.css';
import { Main, Div, Buttons } from './styles'
import Candidates from './Candidates/Candidates'
import HeaderDetailsOrForm from '../../Components/Fixeds/Header/HeaderDetailsOrForm'
import { goToBack, goToHome, goToList } from '../../Router/Coordinator'
import useAxios from '../../Components/Hooks/useAxios'
import { putData } from '../../Components/ConfigAxios/putData'

export default function TripDetailsPage() {
    const pathParams = useParams()
    const [detail, updateDetail] = useAxios({}, `trip/${pathParams.id}`)

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
                        <p><b>Nome da viajem:</b><h4>{trip && trip.name}</h4></p>
                        <p><b>Planeta:</b> {trip && trip.planet}</p>
                        <p><b>Duração:</b> {trip && trip.durationInDays} dias</p>
                        <p><b>Descrição:</b> {trip && trip.description}</p>
                    </Div>

                    <Div>
                        {trip ?
                            <Candidates candidates={trip && trip.candidates}
                                decideCandidate={decideCandidate}
                            />
                            : <div>Carregando..</div>}
                    </Div>
                </div>
            </Main>
        </>
    )
}