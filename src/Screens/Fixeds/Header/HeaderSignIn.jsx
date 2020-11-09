import React from 'react'
import { useHistory } from 'react-router-dom';
import { Buttons, Logo, Main, Title } from './styles'
import icon from '../../../Assets/imgs/icon-space.jpg'
import { goToBack, goToHome } from '../../../Router/Coordinator';

export default function HeaderSignIn(props) {
    const history = useHistory()

    return (
        <Main>
            <Logo>
                <img src={icon} alt="" /> <h2>LabeX</h2>
            </Logo>
            <Title><h2>{props.name}</h2></Title>
            <Buttons>
                <button onClick={() => goToBack(history)}>Voltar</button>
                <button onClick={() => goToHome(history)}>Home</button>
            </Buttons>
        </Main>
    )
}