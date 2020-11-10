import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../Components/Hooks/useForm'
import { ButtonLogin, InputContainer, Main, TextCenter, Card, SpanSignUp } from './styles'
import HeaderSignIn from '../Fixeds/Header/HeaderSignIn'
import { goToLogin } from '../../Router/Coordinator'
import { postSignupData } from '../../Components/ConfigAxios/postLoginData'
import { useUnProtect } from '../../Components/ProtectedRoute/useUnProtect'

export default function SignUp() {
    const { form, onChange, resetState } = useForm({ email: "", password: "" })

    const history = useHistory()

    const handleClick = (event) => {
        event.preventDefault()
        postSignupData('signup', form, 'Cadastro realizado com sucesso! Efetuando o login...', 'Não foi possível realzar o cadastro, tente novamente!', history)
        resetState()
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }

    useUnProtect()

    return (
        <>
            <HeaderSignIn />
            <Main>
                <Card>
                    <form onSubmit={handleClick}>
                        <TextCenter>SignUp</TextCenter>
                        <InputContainer>
                            <input
                                type="text"
                                name="email"
                                value={form.email}
                                onChange={handleInputChange}
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                title="Ex: 123@123.com"
                                required
                            />
                            <label htmlFor="email">Email</label>
                        </InputContainer>
                        <InputContainer>
                            <input
                                type="password"
                                name="password"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                value={form.password}
                                onChange={handleInputChange}
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]){8,}"
                                title="A senha precisa conter 1 dígito, 1 letra maiúscula, 1 letra minúscula, 1 caractere especial e conter no mínimo 8 dos caracteres mensionados!"
                                required
                            />
                            <label htmlFor="password">Senha</label>
                        </InputContainer>
                        <ButtonLogin >Cadastrar</ButtonLogin>
                    </form>
                    <SpanSignUp onClick={() => goToLogin(history)}>Já é cadastrado?</SpanSignUp>
                </Card>
            </Main>
        </>
    )
}