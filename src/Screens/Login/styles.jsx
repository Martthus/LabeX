import styled from 'styled-components'
import background from '../../Assets/imgs/797.jpg'


export const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url(${background});
    background-size: cover;
`;

export const Card = styled.div`
    background-color: rgba(12, 12, 12, 0.7);
	border-radius:3px;
    padding: 35px 30px;
    border-bottom: 3px blueviolet solid;
    border-radius: 0 0 5px 5px;
    width: 250px;
`

export const TextCenter = styled.span`
    color: #fff;
    text-transform: uppercase;
    font-size: 23px;
    padding-bottom: 40px;
    display: block;
`;

export const ButtonsMenu = styled.button`
    position: relative;
    top: -247px;
    right: -871px;
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
        top: -180px;
        right: -720px;
    }
`;

export const ButtonsMenuSignUp = styled.button`
    position: relative;
    top: -258px;
    right: -871px;
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
        top: -190px;
        right: -720px;
    }
`;

export const InputContainer = styled.div`
    position:relative;
	margin-bottom:43px;
    label{
        position:absolute;
	    top:-13px;
	    left:0px;
	    font-size:16px;
	    color:#fff;	
        pointer-events:none;
	    transition: all 0.2s ease-in-out;
        }
    input {
        border:0;
        border-bottom:1px solid blueviolet;  
        background:transparent;
        width:100%;
        padding:8px 0 5px 0;
        font-size:16px;
        color:#fff;
        :focus {
            border:none;	
            outline:none;
            border-bottom:1px solid rgb(0, 255, 170);	
            }
        }  
    :focus~label,
    input:valid~label{
        top:33px;
	    font-size:12px;
        } 
`;

export const ButtonLogin = styled.button`
    color: #fff;
    background-color: blueviolet;
    outline: none;
    border: 1px transparent solid;;
    padding: 10px 20px;
    text-transform: uppercase;
    margin: 10px 0;
    border-radius: 2px;
    cursor: pointer;
    :hover{
        border: 1px black solid;
    }
`;

export const SpanSignUp = styled.span`
    cursor: pointer;
    font-weight: 700;
    color: white;
    :hover{
        color: blueviolet;
    }
`;