import React from 'react'
import approve from './imgs/select_yes.png'
import reject from './imgs/not_applicable.png'

export default function ButtonsDecide(props) {
    const approveCandidate = () => {
        props.decideCandidate(true, props.candidate.id)
        props.updateDetail()
    }
    const rejectCandidate = () => {
        props.decideCandidate(false, props.candidate.id)
        props.updateDetail()
    }

    return (
        <div>
            <img src={approve} onClick={approveCandidate} />
            <img src={reject} onClick={rejectCandidate} />
        </div>
    )
}