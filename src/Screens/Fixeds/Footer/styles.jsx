import styled from 'styled-components'

export const Main = styled.footer`
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 67px;
    background-color: rgba(12, 12, 12, 0.7);
    border-top: 3px rgb(0, 255, 170) solid;
    border-radius: 5px 5px 0 0;
    img{
        width: 4%;
        height: 7%;
        position: fixed;
        bottom: 0;
        animation: spaceShip 11s linear infinite;
        @keyframes spaceShip{
            0%{left: -15%; bottom: -1%}
            15%{ bottom: 1%}
            30%{ bottom: -1%}
            45%{ bottom: 1%}
            49%{transform: rotate(0deg)}
            50%{left: 104%; transform: rotate(-45deg)}
            60%{ bottom: 1%}
            75%{ bottom: -1%}
            90%{ bottom:1%}
            99%{transform: rotate(-45deg)}
            100%{left: -15%; bottom: -1%}
        }
        @media screen and (max-width: 400px){
            width: 13%;
            height: 8%;
        }
    }
    @media screen and (max-width: 400px){
            height: 47px;
        }
`