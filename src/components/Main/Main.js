import styled from 'styled-components';
import Results from '../Results';
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
            <TerminateForm></TerminateForm>
            <Results></Results>
        </MainContainer>
    )
};

export default Main;