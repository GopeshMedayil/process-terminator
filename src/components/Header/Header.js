import styled from 'styled-components';
import { useContext } from 'react';
import { TerminateContext } from './../../context/TerminateContext';

const Heading = styled.div`
font-size: 1.5em;
text-align: center;
color: white;
background: purple;
font-style: italic;
margin: 0 auto;
align-items: center;
height: 48px;
display: flex;
width: 100%;
align-content: center;
flex-wrap: nowrap;
flex-direction: column;
justify-content: space-around;
  `;
const Header = () => {
    const terminateContext = useContext(TerminateContext);
    console.log("terminateContext", terminateContext);
    return (
        <>
            <Heading>
                <div>Process Terminator</div>
            </Heading>
        </>
    );
};

export default Header;

