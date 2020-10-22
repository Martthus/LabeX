import React from 'react'
import Carousel from 'react-multi-carousel';
import { useHistory } from 'react-router-dom'
import { Main, ButtonMenu, DivMap, DivCarousel } from './styles';
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

export default function Home() {
    // const [planetList, updatePlanetList] = useAxios({}, '/api/v3/news')
    const history = useHistory()
    let token = window.localStorage.getItem("token")


    const images = [
        { image: image1 },
        { image: image2 },
        { image: image3 },
        { image: image4 },
        { image: image5 },
        { image: image6 },
        { image: image7 },
    ]

    const verifica = () => {
        if (token) {
            history.push("/adm/trips/create")
        } else {
            history.push("/adm/signin")
        }
    }

    const logout = () => {
        token = window.localStorage.removeItem("token")
        history.push("/adm/signin")
    }
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
                name={"Home"}
                onClick1={() => goToCreateTrip(history)}
                title1={"Criar Viagem"}
                onClick2={() => goToList(history)}
                title2={"Viagens"}
            />
            <Main>
                {/* {token && <ButtonMenu onClick={verifica}>usuario</ButtonMenu>}
                {token ? <ButtonMenu onClick={logout}>logout</ButtonMenu> : <ButtonMenu onClick={verifica}>Login</ButtonMenu>}
                <ButtonMenu onClick={goToList}>Viagens</ButtonMenu> */}
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