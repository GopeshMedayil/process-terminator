import { useContext } from 'react';
import { TerminateContext } from './../../context/TerminateContext';
import styled from 'styled-components';

const Success = styled.div`
    color:green;
`;
const Error = styled.div`
    color:red;
`;

const Results = () => {
    const { result } = useContext(TerminateContext);
    console.log("terminateContext", result);
    return (
        <>
            <h3>Results</h3>
            {/* {JSON.stringify(result)} */}
            {result ? result.code !== 500 ? <Success>{result.message}</Success> : <Error>{result.message}</Error> : ''}
        </>

    )
};

export default Results;