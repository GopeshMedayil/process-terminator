import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { TerminateContext } from './context/TerminateContext';

function App() {
  return (
    <div className="App">
      <TerminateContext.Provider value={true}>
        <Header></Header>
        <Main></Main>
      </TerminateContext.Provider>
    </div>
  );
}

export default App;
