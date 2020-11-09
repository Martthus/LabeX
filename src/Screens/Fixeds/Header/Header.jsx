import React from 'react'
import { useHistory } from 'react-router-dom';
import { Buttons, Logo, Main, Title } from './styles'
import icon from '../../../Assets/imgs/icon-space.jpg'
import { goToLogin, logout } from '../../../Router/Coordinator';

export default function Header(props) {
    const history = useHistory()
    let token = window.localStorage.getItem("token")

    return (
        <Main>
            <Logo>
                <img src={icon} alt="" /> <h2>LabeX</h2>
            </Logo>
            <Title><h2>{props.name}</h2></Title>
            <Buttons>
                {token ? <button onClick={() => logout(history)}>Logout</button> : <button onClick={() => goToLogin(history)}>Login</button>}
                {token ? <button onClick={props.onClick1}>{props.title1}</button> : <></>}
                <button onClick={props.onClick2}>{props.title2}</button>
            </Buttons>
        </Main>
    )
}