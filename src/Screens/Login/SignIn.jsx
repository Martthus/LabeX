import React from 'react'
import { useHistory } from 'react-router-dom'
import { postLoginData } from '../../Components/ConfigAxios/postLoginData'
import HeaderSignIn from '../Fixeds/Header/HeaderSignIn'
import useForm from '../../Components/Hooks/useForm'
import { useUnProtect } from '../../Components/ProtectedRoute/useUnProtect'
import { goToSignUp } from '../../Router/Coordinator'
import { Main, TextCenter, InputContainer, ButtonLogin, SpanSignUp, Card } from './styles'

export default function SignIn() {
    const { form, onChange, resetState } = useForm({ email: "", password: "" })
    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()
        postLoginData('login', form, 'Login feito', 'Falha ao logar', history)
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
                    <form onSubmit={handleSubmit}>
                        <TextCenter>SignIn</TextCenter>
                        <InputContainer>
                            <input
                                type="text"
                                name="email"
                                value={form.email}
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="email">Email</label>
                        </InputContainer>

                        <InputContainer>
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="password">Senha</label>
                        </InputContainer>
                        <ButtonLogin >Logar</ButtonLogin>
                    </form>
                    <SpanSignUp onClick={() => goToSignUp(history)}>Não é cadastrado?</SpanSignUp>
                </Card>
            </Main>
        </>
    )
}