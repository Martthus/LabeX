import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    height: 100vmin;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 400px){
        height: 100vh;
    }
`;

export const Nav = styled.header`
    width: 100%;
    height: 10%;
    background-color: rgba(12, 12, 12, 0.7);
    border-bottom: 3px rgb(0, 255, 170) solid;
    border-radius: 0 0 5px 5px;
`;

export const Body = styled.div`
    /* width: 100%;
    height: 95%; */
    /* background: lightblue; */
`;

export const NavFooter = styled.footer`
    width: 100%;
        height: 8%;
    /* background: orangered; */
    background-color: rgba(12, 12, 12, 0.7);
    border-top: 3px rgb(0, 255, 170) solid;
    border-radius: 5px 5px 0 0;
`;
