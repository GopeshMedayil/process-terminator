import { useEffect } from 'react';
import styled from 'styled-components';
import terminate from '../../services/terminator';
import TerminateForm from '../TerminateForm';
const MainContainer = styled.div`
    display: flex; 
    flex-direction: column;
    padding:2%;
    height:550px;
    margin:2%;
    // border:1px solid black;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    `;

const Title = styled.div`
    font-size: 1em;
    text-align: center;
    color: black;
    margin:0 auto;
    `;

const Main = () => {
    return (
        <MainContainer>
            <Title>Enter the port</Title>
            <TerminateForm></TerminateForm>
        </MainContainer>
    )
};

export default Main;