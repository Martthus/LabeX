import styled from 'styled-components'
import background from '../../Assets/imgs/797.jpg'

export const Main = styled.main`
    height: 100vh;
    background: url(${background});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    span{
        margin: 0;
        font-size: 40px;
        font-weight: 900;
        color: #fff;
        position: absolute;
        top: 4%;
        left: 45%;
        font-weight: bold;
    }
`;

export const Div = styled.div`
    background-color: rgba(12, 12, 12, 0.7);
    border-radius: 7px;
    font-weight: 600;
    text-align: center;
    padding: 40px 30px;
    width: 350px;
    color: white;
    border-bottom: 3px rgb(0, 255, 170) solid;
    border-radius: 0 0 5px 5px;
    b{
        font-size: 20px;
        padding-right: 10px;
    }
    div{
        padding: 5px 0;
    }
    h2{
        margin: 0;
        padding: 10px;
    }
    h4{
        margin: 0;
        display: inline;
        font-size: 27px;
    }
    @media screen and (max-width: 400px){
        width: 280px;
        padding: 0 40px 30px;
    }
`;

export const Buttons = styled.button`
    position: relative;
    top: -40px;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    background-color: rgb(0, 255, 170);
    color:rgb(12, 12, 12);
    font-weight: 700;
    transition: all 500ms;
    cursor: pointer;          
    :hover {
        background-color: rgb(0, 0, 0);
        color: floralwhite;
    }
    :active {
        top: -30px;
    }
`;

export const DivMap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    height: 10px;
    strong {
        padding-bottom: 5px;
        pointer-events: none;
    }
    img{
        margin-left: 10px;
        width: 25px;
        border: solid transparent 1px;
    :hover{
        transform: scale(1.2);
        cursor: pointer;
    }
}
`;
