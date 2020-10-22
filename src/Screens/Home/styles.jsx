import styled from 'styled-components'
import background from '../../Assets/imgs/1876.jpg'

export const Main = styled.div`
    height: 100vh;
    background: url(${background});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    span{
        margin: 0;
        font-size: 40px;
        font-weight: 900;
        color: #fff;
        position: absolute;
        top: 4%;
        left: 47%;
        font-weight: bold;
    }
    @media screen and (max-width: 400px){
        h1{
            margin: 0;
            font-size: 20px;
        }
        span{
            font-size: 20px;
        }
        
    }
`

export const ButtonMenu = styled.button`
    position: relative;
    top: -40px;
    left: 42.5%;
    color: #fff;
    background-color: blueviolet;
    outline: none;
    border: 1px transparent solid;;
    padding: 10px 20px;
    text-transform: uppercase;
    border-radius: 2px;
    cursor: pointer;
    :hover{
        border: 1px black solid;
    }
    @media screen and (max-width: 1700px){
        left: 40.6%;
    }
    @media screen and (max-width: 400px){
        font-size: 5px;
        padding: 3px 6px;
        top: -30px;
        left: 35%;
    }
`

export const DivCarousel = styled.div`
    padding: 0 50px;
    @media screen and (max-width: 1700px){
        padding: 0 10px;
    }
    @media screen and (max-width: 400px){
        padding: 0 10px;
    }
`

export const DivMap = styled.div`
    background:  url(${props => props.imagem});
    background-size: cover;
/* background-color: rgba(12, 12, 12, 0.7); */
    border-radius: 7px;
    margin: 20px 20px;
    font-weight: 400;
    text-align: center;
    padding: 20px 10px;
    border-bottom: 3px rgb(0, 255, 170) solid;
    border-radius: 0 0 5px 5px;
    h1,h2 {
        margin: 0;
        padding: 150px 0;
        width: 100%;
        text-align: center;
        font-weight: 700;
        margin-bottom: 1.25rem;
        text-shadow: 4px 4px 3px rgb(12, 12, 12);
        pointer-events: stroke;
        cursor: help;
    }
    display: relative; 
    left: 50%;
    top: 50%;
    @media screen and (max-width: 400px){
        h2{
            padding: 30px 0;
        }
    }
`;