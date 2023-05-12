import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Team from './Team';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div> 
      
      <BrowserRouter>
      <Header/>
      <About/>
      <Team/>
      <Footer/>
             
      <Routes>
    <Route path="/" exact component={Header} />
    <Route path="/" exact component={Footer} />
    <Route path="/" exact component={About} />
    <Route path="/" exact component={Team} />
    </Routes>
    </BrowserRouter>

{/* 
      <Route path="/fertilizer" component={Fertilizer} />
      <Route path="/workers" component={Workers} />  */}
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
