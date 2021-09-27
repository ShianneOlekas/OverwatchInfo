import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from './pages/Main/Main';

function App() {
  return (
    <ParallaxProvider>
      <Main />
    </ParallaxProvider>
  );
}

export default App;
