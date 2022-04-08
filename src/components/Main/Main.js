import styled from 'styled-components';


const Title = styled.div`
    font-size: 1em;
    text-align: center;
    color: black;
    margin:0 auto;
    `;

const MainContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: center;
    padding:2%;
    border:1px solid black;
    `;

const Main = () => {

    return (
        <MainContainer>
            <Title>Enter the port</Title>
        </MainContainer>
    )
};

export default Main;