import { useEffect } from 'react';
import styled from 'styled-components';
import terminate from '../../services/terminator';
import TerminateForm from '../TerminateForm';
const MainContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: center;
    padding:2%;
    border:1px solid black;
    `;

const Title = styled.div`
    font-size: 1em;
    text-align: center;
    color: black;
    margin:0 auto;
    `;

const Main = () => {
    useEffect(() => {
        async function terminateProcess() {
            const res = await terminate();
            console.log(res);
        }
        terminateProcess();
    });
    //console.log(terminate())
    return (
        <MainContainer>
            <Title>Enter the port</Title>
            <TerminateForm></TerminateForm>
        </MainContainer>
    )
};

export default Main;