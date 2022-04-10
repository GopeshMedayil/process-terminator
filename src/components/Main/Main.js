import styled from 'styled-components';
import TerminateForm from '../TerminateForm';

const MainContainer = styled.div`
    display: flex; 
    flex-direction: column;
    padding:2%;
    margin:2%;
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