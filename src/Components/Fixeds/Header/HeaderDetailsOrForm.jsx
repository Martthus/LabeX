import React from 'react'
import { useHistory } from 'react-router-dom';
import { ButtonsFormsPage, Logo, Main, Title } from './styles'
import icon from '../../../Assets/imgs/icon-space.jpg'
import { goToBack, goToHome, goToLogin, logout } from '../../../Router/Coordinator';

export default function HeaderDetailsOrForm(props) {
    const history = useHistory()
    let token = window.localStorage.getItem("token")

    return (
        <Main>
            <Logo>
                <img src={icon} alt="" /> <h2>Future &#x2716;space</h2>
                {history.location.pathname === "/" ? <div></div> : <div></div>}
            </Logo>
            <Title><h2>{props.name}</h2></Title>
            <ButtonsFormsPage>
                <button onClick={() => goToBack(history)}>Voltar</button>
                {token ? <button onClick={() => logout(history)}>Logout</button> : <button onClick={() => goToLogin(history)}>Login</button>}
                <button onClick={() => goToHome(history)}>Home</button>
            </ButtonsFormsPage>
        </Main>
    )
}