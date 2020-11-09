import styled from 'styled-components'
import background from './imgs/2474215.jpg'

export const AnimationFoguinho = styled.div`
    img{
        position: fixed;
        animation: fireShip 3s infinite linear;
        @keyframes fireShip{
            0%{opacity:0; left: -9% ; top: 53.5%;}
            10%{opacity:1; }
            20%{opacity:0; }
            30%{opacity:1; }
            40%{opacity:0; }
            50%{opacity:1; }
            60%{opacity:0; }
            70%{opacity:1; }
            80%{opacity:0; }
            90%{opacity:1}
            100%{opacity:0; left:106%; top: 3.5%;}
        }
    }
@media screen and (min-width: 1900px){
    img{
        animation: fireShip 3s infinite linear;
        @keyframes fireShip{
            0%{opacity:0; left: -10% ; top: 47.5%;}
            10%{opacity:1; }
            20%{opacity:0; }
            30%{opacity:1; }
            40%{opacity:0; }
            50%{opacity:1; }
            60%{opacity:0; }
            70%{opacity:1; }
            80%{opacity:0; }
            90%{opacity:1}
            100%{opacity:0; left:105%; top: -2.5%;}
        }
    }
}
@media screen and (max-width: 1024px){
    img{
        animation: fireShip 3s infinite linear;
        @keyframes fireShip{
            0%{opacity:0; left: -6% ; top: 49%;}
            10%{opacity:1; }
            20%{opacity:0; }
            30%{opacity:1; }
            40%{opacity:0; }
            50%{opacity:1; }
            60%{opacity:0; }
            70%{opacity:1; }
            80%{opacity:0; }
            90%{opacity:1}
            100%{opacity:0; left:109%; top: -1.5%;}
        }
    }
}
@media screen and (max-width: 400px){
    img{
        width: 6vmin;
        animation: fireShip 3s infinite linear;
        @keyframes fireShip{
            0%{opacity:0; left: -10% ; top: 79.5%;}
            10%{opacity:1; }
            20%{opacity:0; }
            30%{opacity:1; }
            40%{opacity:0; }
            50%{opacity:1; }
            60%{opacity:0; }
            70%{opacity:1; }
            80%{opacity:0; }
            90%{opacity:1}
            100%{opacity:0; left:105%; top: 29.5%;}
        }
    }
}
`;

export const AnimationAstronaut = styled.div`
    img{
        position: fixed;
        animation: astronaut 3s infinite linear;
        @keyframes astronaut{
            0%{left: -15%; top:20%;}
            100%{left:100%; top: -30%;}
        }
    }
    @media screen and (min-width: 1920px){
        img{
            animation: astronaut 3s infinite linear;
                @keyframes astronaut{
                0%{left: -15%; top:20%;}
                100%{left:100%; top: -30%;}
            }
        }
    }
    @media screen and (max-width: 400px){
        img{
            width: 30vmin;
            animation: astronaut 3s infinite linear;
            @keyframes astronaut{
                0%{left: -15%; top:70%;}
                100%{left:100%; top: 20%;}
            }
        }
    }
`;

export const Main = styled.div`
    background: url(${background});
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
`;