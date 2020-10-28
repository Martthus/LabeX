import React from 'react'
import Carousel from 'react-multi-carousel';
import { useHistory } from 'react-router-dom'
import { Main, DivMap, DivCarousel } from './styles';
import image1 from './imgs/10504.jpg'
import image2 from './imgs/1285.jpg'
import image3 from './imgs/1700.jpg'
import image4 from './imgs/1856.jpg'
import image5 from './imgs/1873.jpg'
import image6 from './imgs/33879.jpg'
import image7 from './imgs/1134.jpg'
import Footer from '../../Components/Fixeds/Footer/Footer';
import Header from '../../Components/Fixeds/Header/Header';
import { goToCreateTrip, goToList } from '../../Router/Coordinator';
import { responsive, settings } from '../../Components/CarouselConfigs/CarouselConfigs';

export default function Home() {
    // const [planetList, updatePlanetList] = useAxios({}, '/api/v3/news')
    const history = useHistory()
    let token = window.localStorage.getItem("token")


    const images = [
        { image: 'https://user-images.githubusercontent.com/66175793/97098446-d8cbc500-165b-11eb-8766-a88d3dc123c7.jpg' },
        { image: image2 },
        { image: image3 },
        { image: image4 },
        { image: image5 },
        { image: image6 },
        { image: image7 },
    ]

    return (
        <>
            <Header
                name={"Home"}
                onClick1={() => goToCreateTrip(history)}
                title1={"Criar Viagem"}
                onClick2={() => goToList(history)}
                title2={"Viagens"}
            />
            <Main>
                <h1>Alguns dos lugares vizitados</h1>
                <DivCarousel>
                    <Carousel
                        responsive={responsive}
                        {...settings}
                    >
                        {images.map(i => {
                            return (
                                <DivMap key={i.image} imagem={i.image}>
                                    <h2>Fotos reais!!!</h2>
                                </DivMap>
                            )
                        })}
                    </Carousel>
                </DivCarousel>
            </Main>
            <Footer />
        </>
    )
}