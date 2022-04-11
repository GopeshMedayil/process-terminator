import { useContext } from 'react';
import { TerminateContext } from './../../context/TerminateContext';
import styled from 'styled-components';


const Alert = styled.div`
    padding: 20px;
    color: white;
    opacity: 1;
    transition: opacity 0.6s;
    margin-bottom: 15px;
`;
const Success = styled(Alert)`
    background-color: green;
`;
const Error = styled(Alert)`
    background-color: #f44336;
`;

const Results = () => {
    const { result } = useContext(TerminateContext);
    console.log("terminateContext", result);
    return (
        <>
            <h3>Results</h3>
            {result ? result.code !== 500 ? <Success>{result.message}</Success> : <Error>{result.message}</Error> : ''}
        </>

    )
};

export default Results;