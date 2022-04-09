import { useRef } from 'react';
import { useState } from 'react';
import terminate from './../../services/terminator';

const TerminateForm = () => {

    const [port, setPort] = useState('');
    let portRef = useRef();
    async function terminateProcess() {
        console.log(portRef.current.value);
        const res = await terminate(portRef.current.value);
        console.log(res);
    }

    return (
        <>
            <form>
                <input type="text" name="port" id="port"
                    ref={portRef} />
                <button type="button" onClick={terminateProcess}>Terminate</button>
            </form >
        </>
    )
};

export default TerminateForm;