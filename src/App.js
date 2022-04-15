import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { TerminateContext } from './context/TerminateContext';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState("");
  return (
    <div className="App">
      {/* <span>learn react</span> */}
      <TerminateContext.Provider value={{ result, setResult }}>
        <Header></Header>
        <Main></Main>
      </TerminateContext.Provider>
    </div>
  );
}

export default App;
