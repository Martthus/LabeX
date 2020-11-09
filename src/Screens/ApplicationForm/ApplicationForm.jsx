import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { postData } from '../../Components/ConfigAxios/postData'
import HeaderDetailsOrForm from '../Fixeds/Header/HeaderDetailsOrForm'
import useForm from '../../Components/Hooks/useForm'
import { goToBack } from '../../Router/Coordinator'
import { Main, FormContainer, InputContainer, ButtonSubscribe } from './styles'
import useAxios from '../../Components/Hooks/useAxios'
import { Countries_Url } from '../../Components/ConfigAxios/ConfigAxios'


export default function ApplicationForm() {
    const [countries] = useAxios({}, Countries_Url, 'all')
    const { form, onChange, resetState } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })
    const pathParams = useParams()
    const history = useHistory()

    const applyTrip = () => {
        postData(`trips/${pathParams.id}/apply`, form, 'Registro efetuado com sucesso!', 'Registro não efetuado!', history)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        applyTrip()
        resetState()
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }

    return (
        <>
            <HeaderDetailsOrForm
                name={"Formulário de inscrição"}
                onClick2={() => goToBack(history)}
                title2={`Voltar`}
            />
            <Main>
                <FormContainer>
                    <form onSubmit={handleSubmit}>
                        <InputContainer>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="name">Nome</label>
                        </InputContainer>
                        <InputContainer>
                            <input
                                type="number"
                                name="age"
                                value={form.age}
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="age">Idade</label>
                        </InputContainer>
                        <InputContainer>
                            <input
                                type="text"
                                name="applicationText"
                                value={form.applicationText}
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="applicationText">Descrição</label>
                        </InputContainer>
                        <InputContainer>
                            <input
                                type="text"
                                name="profession"
                                value={form.profession}
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="profession">Profissão</label>
                        </InputContainer>
                        <InputContainer>
                            <select
                                type="text"
                                name="country"
                                value={form.country}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="undefined">Selecione um país</option>
                                {countries.length > 0 &&
                                    countries.map((c) => {
                                        return (
                                            <option key={c.name}>{c.name}</option>
                                        )
                                    })}
                            </select>
                            <label htmlFor="country">País</label>
                        </InputContainer>
                        <ButtonSubscribe>Se inscrever</ButtonSubscribe>
                    </form>
                </FormContainer>
            </Main>
        </>
    )
}