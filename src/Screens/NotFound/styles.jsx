import styled from 'styled-components'
import background from './img/p404.png'

export const Main = styled.main`
height: 100vh;
flex-direction: column;
`;

export const Container = styled.div`
position: absolute;
display: flex;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
background: url(${background}),#151729;
box-shadow: 0 15px 30px rgba(0, 0, 0, 5);
background-position-x: ${props => props.move && props.move.x + 'px'};
background-position-y: ${props => props.move && props.move.y + 'px'};
`
export const Content = styled.div`
max-width: 600px;
text-align: center;
h2{
    margin: 0;
font-size: 18vw;
color: #fff;
line-height: 1em;
}
h4{
    position: relative;
    font-size: 1.5em;
    margin-bottom: 20px;
    color: #111;
    background: #fff;
    font-weight: 300;
    padding: 10px 20px;
    display: inline-block;
}
p{
    color: #fff;
    font-size: 1.2em;
}
a{
    position: relative;
    display: inline-block;
    padding: 10px 25px;
    background: #ff0562;
    color: #fff;
    text-decoration: none;
    margin-top: 25px;
    border-radius: 25px;
    border-bottom: 4px solid #d00d56;
    cursor: pointer;
}
`