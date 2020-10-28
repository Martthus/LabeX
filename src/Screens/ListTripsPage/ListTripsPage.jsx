import React from 'react'
import { useHistory } from 'react-router-dom'
import './styles.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Main, DivMenu, DivMap, Buttons, ButtonsMenu, DivCarousel } from './styles'
import Header from '../../Components/Fixeds/Header/Header';
import Footer from '../../Components/Fixeds/Footer/Footer';
import useAxios from '../../Components/Hooks/useAxios';
import { goToHome, goToDetailsTrip, goToApplicationForm, goToCreateTrip } from '../../Router/Coordinator';
import { responsive, settings } from '../../Components/CarouselConfigs/CarouselConfigs';

export default function ListTripsPage() {
    const [allTrips, updateAllTrips] = useAxios({}, 'trips')
    const trip = allTrips.trips

    const history = useHistory()
    const token = window.localStorage.getItem("token")

    
    return (
        <>
            <Header
                name={"Viagens"}
                onClick1={() => goToCreateTrip(history)}
                title1={"Criar Viagem"}
                onClick2={() => goToHome(history)}
                title2={"Home"}
            />
            <Main>
                <DivCarousel>
                    {trip &&
                        <Carousel
                            responsive={responsive}
                            {...settings}
                        >
                            {trip.map(t => {
                                return (
                                    <DivMap key={t.id}>
                                        <h1>{t.name}</h1>
                                        <h2>Planeta: {t.planet}</h2>
                                        {
                                            token ?
                                                <Buttons onClick={() => goToDetailsTrip(history, t.id)}>Detalhes</Buttons> :
                                                <Buttons onClick={() => goToApplicationForm(history, t.id)}>Me inscrever</Buttons>
                                        }
                                    </DivMap>
                                )
                            })}
                        </Carousel>
                    }
                </DivCarousel>
            </Main >
            <Footer />
        </>
    )
}