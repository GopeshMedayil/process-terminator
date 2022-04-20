import { useRef } from 'react';
import { useState } from 'react';
import terminate from './../../services/terminator';
import styled from 'styled-components';
import { useContext } from 'react';
import { TerminateContext } from './../../context/TerminateContext';
const InputBox = styled.input`

    margin: 2%;
    height: 30px;
    width: 250px;
}

`;

const Button = styled.button`
  appearance: button;
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s,box-shadow .08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:focus{
    //box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;

  }
`;

const TerminateForm = () => {
    const { setResult } = useContext(TerminateContext);
    let portRef = useRef();
    async function terminateProcess() {
        //console.log(portRef.current.value);
        await terminate(portRef.current.value, function (res) {
            //console.log(res);
            setResult(res);
        });
    }

    return (
        <>
            <form>
                <InputBox type="number" name="port" id="port" ref={portRef} placeholder="Enter the port" />
                <Button type="button" onClick={terminateProcess}>Terminate</Button>
            </form >
        </>
    )
};

export default TerminateForm;