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
import { useEffect, useState } from 'react';
import Viewprofile from './Viewprofile';
import OrderView from './OrderView';
import AddressForm from './AddressForm';
import SimpleMap from './Contact';
import OrderPage from './OrderPage';
import Worker from './Worker';

import PaymentForm from './payment';



function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  useEffect(() => {
  const user=localStorage.getItem("user");
  if(user){
    setIsLoggedIn(true);
  }},[])
  
  return (
    <div> 
      
      <BrowserRouter>
      <Header isLoggedIn={isLoggedIn}/><br/><br/><br/>
      {/* <Login setIsLoggedIn={setIsLoggedIn} /> */}
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
   {/* <Route exact path='/opening' element={< Opening />}></Route> */}
   <Route exact path='/register' element={< Register />}></Route>
   <Route exact path='/cart' element={< Cart/>}></Route>
   <Route exact path='/login' element={< Login  setIsLoggedIn={setIsLoggedIn}/>}></Route>
   <Route exact path='/viewprofile' element={< Viewprofile setIsLoggedIn={setIsLoggedIn}/>}></Route>
   <Route exact path='/orderpage' element={< OrderPage/>}></Route>
   <Route exact path='/addressform' element={< AddressForm/>}></Route>
   <Route exact path='/contact' element={< SimpleMap/>}></Route>
   <Route exact path='/worker' element={<Worker/>}></Route>
   <Route exact path='/payment' element={<PaymentForm/>}></Route>

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
