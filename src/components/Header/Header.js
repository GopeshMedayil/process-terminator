import styled from 'styled-components';
import { useContext } from 'react';
import { TerminateContext } from './../../context/TerminateContext';

const Heading = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: black;
    background: violet;
    margin:0 auto;
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

