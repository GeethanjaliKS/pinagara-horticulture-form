import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Team from './Team';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Product from './Product';
import Foodcard from './Foodcard';
import Fertilizercart from './Fertilizercart';
import Home from './Home';
import CarouselExample from './Carousel';
import Opening from './Opening';
import Cart from './Cart';
import Register from './Register';
import Login from './Login';
function App() {
  return (
    <div> 
      
      <BrowserRouter>
      <Header/><br/><br/><br/>
      
      {/* <About/>
      <Team/>
      <Product/>
      <Footer/> */}
             
      <Routes>
    {/* <Route path="" exact component={Header} />
    <Route path="" exact component={Footer} /> */}
   <Route exact path='/about' element={< About />}></Route>
   <Route exact path='/team' element={< Team />}></Route>
   <Route exact path='/product' element={< Product />}></Route>
   <Route exact path='/foodcard' element={< Foodcard />}></Route>
   <Route exact path='/fertilizer' element={< Fertilizercart />}></Route>
   <Route exact path='/' element={< Home />}></Route>
   <Route exact path='/carousel' element={< CarouselExample />}></Route>
   <Route exact path='/opening' element={< Opening />}></Route>
   <Route exact path='/register' element={< Register />}></Route>
   <Route exact path='/cart' element={< Cart/>}></Route>
   <Route exact path='/login' element={< Login/>}></Route>
    </Routes>
    <Footer/>
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
