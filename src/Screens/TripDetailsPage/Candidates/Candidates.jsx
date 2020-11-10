import React from 'react'
import { DivMap } from '../styles'
import ButtonsDecide from './ButtonsDecide'

export default function Candidates(props) {
    return (
        <div>
            {props.candidates ?
                <div >
                    <h2>Candidatos</h2>
                    {props.candidates.map((candidate) => {
                        return (
                            <div key={candidate.id}>
                                <DivMap>
                                    <strong>{candidate.name}</strong>
                                    <ButtonsDecide
                                        candidate={candidate}
                                        decideCandidate={props.decideCandidate}
                                        updateDetail={props.updateDetail}
                                    />
                                </DivMap>
                            </div>
                        )
                    })}
                </div>
                : <div>Sem candidatos</div>}
        </div>
    )
}