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

export default function ListTripsPage() {
    const [allTrips, updateAllTrips] = useAxios({}, 'trips')
    const trip = allTrips.trips

    const history = useHistory()
    const token = window.localStorage.getItem("token")

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            paritialVisibilityGutter: 60
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            paritialVisibilityGutter: 50
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            paritialVisibilityGutter: 30
        }
    };
    const settings = {
        infinite: true,
        autoPlay: true
    }
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