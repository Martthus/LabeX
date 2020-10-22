import styled from "styled-components";

export const Main = styled.header`
    width: 100%;
    height: 10%;
    display: flex;
    background-color: rgba(12, 12, 12, 0.7);
    border-bottom: 3px rgb(0, 255, 170) solid;
    border-radius: 0 0 5px 5px;
    position: fixed;
    top: 0;
    @media screen and (max-width: 400px){
        h2{
            font-size: 15px;
            left: 15%;
        }
    }
`;

export const Logo = styled.div`
    width:30%;
    height: 100%;
    display: flex;
    h2{
        margin: 0;
        padding-left: 10px;
        color: #fff;
        font-size: 45px;
        font-weight: 900;
        text-shadow: 9px 9px 2px rgb(12, 12, 12);
    }
    img{
        width: 154px;
        height: 140px;
        border-bottom: 3px rgb(0, 255, 170) solid;
        border-radius: 0 0 5px 5px;
    }
    @media screen and (max-width: 400px){
        width: 70%;
        align-items: start;
        h2{
            font-size: 20px;
            padding-top: 10px;
        }
        img{
            width: 80px;
            height: 80px;
        }
    }
`;

export const Title = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    h2{
        margin: 0;
        color: #fff;
        font-size: 30px;
        font-weight: 900;
        text-shadow: 9px 9px 2px rgb(12, 12, 12);
    }
    @media screen and (max-width: 400px){
        width: 0%;
        h2{
            display: none;
            font-size: 30px;
        }
    }
`

export const Buttons = styled.div`
    width: 30%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    button{
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
        @media screen and (max-width: 400px){
            font-size: 10px;
            padding: 7px 7px;
        }
    }
`
export const ButtonsFormsPage = styled.div`
    width: 30%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    button{
        padding: 10px 20px;
        border: none;
        outline: none;
        text-transform: uppercase;
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
    }   
`