import React from 'react'
import { useHistory } from 'react-router-dom'
import { useProtect } from '../../Components/ProtectedRoute/useProtect'
import useForm from '../../Components/Hooks/useForm'
import { ButtonCreate, InputContainer, Main, FormContainer, TextCenter } from './styles'
import Header from '../Fixeds/Header/Header'
import { goToBack, goToList } from '../../Router/Coordinator'
import { postData } from '../../Components/ConfigAxios/postData'
import { planets } from '../../Components/PlanetsArray/planets'

export default function CreateTripPage() {
    const { form, onChange, resetState } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })

    const history = useHistory()

    // Função onde é pegado o ano selecionado pelo usuário e comparado com o ano atual, se o ano atual for maior que o ano selecionado, retorna um erro para o usuário.
    const dateFuture = () => {
        let [yyyy, mm, dd] = form.date.split("-")

        const dateYear = new Date().getFullYear()

        if (yyyy > dateYear) {
            createTrip()
        } else {
            alert("Escolha uma data que ainda não tenha passado!")
        }
    }

    const createTrip = () => {
        postData('trips', form, 'Viagem criada', 'Falha ao criar viagem', history)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        resetState()
        dateFuture()
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }

    useProtect()

    return (
        <>
            <Header
                name={`Criar Viagem`}
                onClick1={() => goToList(history)}
                title1={`Viagens`}
                onClick2={() => goToBack(history)}
                title2={`Voltar`}
            />
            <Main>
                <div>
                    <FormContainer>
                        <form onSubmit={handleSubmit}>
                            <TextCenter></TextCenter>
                            <InputContainer>
                                <input
                                    type="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleInputChange}
                                    required
                                />
                                <label htmlFor="name">Nome da viajem</label>
                            </InputContainer>
                            <InputContainer>
                                <select
                                    type="planet"
                                    name="planet"
                                    value={form.planet}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value={undefined} key={undefined}>Selecione um planeta</option>
                                    {planets.map((p) => {
                                        return (
                                            <option key={p.name}>{p.name}</option>
                                        )
                                    })}
                                </select>
                            </InputContainer>
                            <InputContainer>
                                <input
                                    type="date"
                                    name="date"
                                    value={form.date}
                                    onChange={handleInputChange}
                                    pattern="dd/mm/yyyy"
                                    min="01/12/2021"
                                    required
                                />
                                <label htmlFor="date">Data</label>

                            </InputContainer>
                            <InputContainer>
                                <input
                                    type="description"
                                    name="description"
                                    value={form.description}
                                    onChange={handleInputChange}
                                    title="lala"
                                    required
                                />
                                <label htmlFor="description">Description</label>

                            </InputContainer>
                            <InputContainer>
                                <input
                                    type="number"
                                    name="durationInDays"
                                    value={form.durationInDays}
                                    onChange={handleInputChange}
                                    min={0}
                                    required
                                />
                                <label htmlFor="number">Duration</label>

                            </InputContainer>

                            <ButtonCreate>Criar</ButtonCreate>
                        </form>
                    </FormContainer>
                </div>
            </Main>
        </>
    )
}