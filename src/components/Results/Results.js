import { useContext } from 'react';
import { TerminateContext } from './../../context/TerminateContext';

const Results = () => {
    const { result } = useContext(TerminateContext);
    console.log("terminateContext", result);
    return (
        <>
            <h3>Results</h3>
            {JSON.stringify(result)}
        </>

    )
};

export default Results;