import React from 'react'
import { useHistory } from 'react-router-dom'
import notFound from './img/404.gif'
import { Container, Content, Main } from './styles'

export default function NotFound(props) {
    const [mouseMove, setMouseMove] = React.useState({ x: 0, y: 0 })
    const history = useHistory()

    const goToHome = () => {
        history.push("/")
    }
    const container = (e) => {
        setMouseMove({
            x: - e.clientX/5,
            y: - e.clientY/5
        })
    }
    return (
        <Main>
            <Container onMouseMove={container} move={mouseMove}>
                <Content>
                    <h2>404</h2>
                    <h4>Opps! Página não encontrada</h4>
                    <p>A página que você está procurando não existe. Talvez o endereço ou a página tenha sido movida.</p>
                    <a onClick={goToHome}>Ir Para a página inicial</a>
                </Content>
            </Container>
        </Main>
    )
}