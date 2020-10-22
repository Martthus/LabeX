import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useProtect } from '../../Components/ProtectedRoute/useProtect'
import useForm from '../../Components/Hooks/useForm'
import { useEffect } from 'react'
import { useState } from 'react'
import { ButtonCreate, InputContainer, Main, FormContainer, TextCenter } from './styles'
import Header from '../../Components/Fixeds/Header/Header'
import { goToBack, goToList } from '../../Router/Coordinator'
import { postData } from '../../Components/ConfigAxios/postData'

export default function CreateTripPage() {
    const { form, onChange, resetState } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })
    const [selectPlanets, setSelectPlanets] = useState([])
    const date = new Date("2021")

    const history = useHistory()

    const createTrip = () => {
        postData('trips', form, 'Viagem criada', 'Falha ao criar viagem', history)
    }

    const getPlanets = () => {
        // axios.get("https://api.nasa.gov/planetary/apod?api_key=P2aW4dKXtMPt7C1tQA75MwVRlm7F3NaLGO7O4HN7")
        axios.get("https://api.le-systeme-solaire.net/rest/bodies")
            .then((r) => {
                setSelectPlanets(r.data.bodies)
            }).catch((e) => {
                console.log(e)
            })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        createTrip()
        resetState()
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target
        onChange(name, value)

    }
    useEffect(() => {
        getPlanets()
    }, [])

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
                                    // pattern="(\D{5,}\s*)"
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
                                    {selectPlanets.map((p) => {
                                        if (p.isPlanet === true) {
                                            return (
                                                <option key={p.name}>{p.name}</option>
                                            )
                                        }
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