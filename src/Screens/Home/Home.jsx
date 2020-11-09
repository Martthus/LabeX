import React from 'react'
import Carousel from 'react-multi-carousel';
import { useHistory } from 'react-router-dom'
import { Main, DivMap, DivCarousel } from './styles';
// import image1 from './imgs/10504.jpg' testando se o link da imagem do gitHub não cai.
import image2 from './imgs/1285.jpg'
import image3 from './imgs/1700.jpg'
import image4 from './imgs/1856.jpg'
import image5 from './imgs/1873.jpg'
import image6 from './imgs/33879.jpg'
import image7 from './imgs/1134.jpg'
import Footer from '../Fixeds/Footer/Footer';
import Header from '../Fixeds/Header/Header';
import { goToCreateTrip, goToList } from '../../Router/Coordinator';
import { responsive, settings } from '../../Components/CarouselConfigs/CarouselConfigs';

export default function Home() {
    const history = useHistory()

    const images = [
        { image: 'https://user-images.githubusercontent.com/66175793/97098446-d8cbc500-165b-11eb-8766-a88d3dc123c7.jpg', title: "Marte" },
        { image: image2 , title: "Júpter"},
        { image: image3 , title: "Plutão"},
        { image: image4 , title: "Urano"},
        { image: image5 , title: "Sédina"},
        { image: image6 , title: "Vênus"},
        { image: image7 , title: "Saturno"},
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
                <h1>Alguns dos lugares mais visitados</h1>
                <DivCarousel>
                    <Carousel
                        responsive={responsive}
                        {...settings}
                    >
                        {images.map(i => {
                            return (
                                <DivMap key={i.image} imagem={i.image}>
                                    <h2>{i.title}</h2>
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