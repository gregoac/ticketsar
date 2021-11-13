// import logo from './logo.svg';
import './App.css';
import Router from './router/Router';
import {DarkProvider} from './context/DarkContext';
import {ScrollTopProvider} from './context/ScrollTopContext';

function App() {

  return (
    <>
    <DarkProvider>
      <ScrollTopProvider>
        <Router />
      </ScrollTopProvider>
    </DarkProvider>
    </>
  );
}

export default App;
