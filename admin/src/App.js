import logo from './logo.svg';
import './App.css';
import Admin from './Admin';
import Member from './Member';
import Food from './Food';
import Fertlizer from './Fertilizer'
import Workers from './Workers';
import { BrowserRouter, Routes, Route,NavLink} from "react-router-dom";
// import { Table } from 'react-bootstrap-icons';
// import Member from './member';
 
 import Table from './Table';
import Login from './Login';
import TableFood from './TableFood';
import TableFertilizer from './TableFertilizer';
import TableWorker from './TableWorker';
import Memberviewpage from './Memberviewpage';
import Fertilizerviewpage from './Fertilizerviewpage';
import Workerviewpage from './Workerviewpage';
import Foodviewpage from './Foodviewpage';
import MemberCount from './MemberCount';
import Home from './Home';
import TableOrder from './TableOrder';
import TabaleDispat from './TabaleDispat';
import TableDelivery from './TableDelivery';
import TableCancel from './TableCancel';
// import { Table } from 'react-bootstrap-icons';

function App() {
  return (
    <div> 
      
          
      {/* <Member/> */}
      {/* <Food/> */}
      {/* <Fertilizer/> */}
        {/* <Workers/> */}
         <BrowserRouter>
         {/* <Login/> */}
        <Admin/>  
        {/* <Table/> */}
        {/* <TableFood/> */}
        {/* <TableFertilizer/> */}
        {/* <TableWorker/> */}
          <Routes>
      
                    <Route exact path="/member" element={<Member />} />
                    <Route exact path="/worker" element={<Workers />} />
                    <Route exact path="/food" element={<Food/>} />
                    <Route exact path="/fertilizer" element={<Fertlizer/>} />
                     {/* <Route exact path="/worker" element={<Workers/>} />  */}
                     <Route exact path="/tablemember" element={<Table/>} /> 
                     <Route exact path="/tablefood" element={<TableFood/>} /> 
                     <Route exact path="/tablefertilizer" element={<TableFertilizer/>} /> 
                     <Route exact path="/tableworker" element={<TableWorker/>} /> 
                     <Route exact path="/memberviewpage" element={<Memberviewpage/>} />
                     <Route exact path="/fertilizerviewpage" element={<Fertilizerviewpage/>} />
                     <Route exact path="/workerviewpage" element={< Workerviewpage/>} />
                     <Route exact path="/foodviewpage" element={< Foodviewpage/>} />
                     <Route exact path="/membercount" element={< MemberCount/>} />
                     <Route exact path='/' element={<Home/>}></Route>
                     <Route exact path='/tableorder' element={<TableOrder/>}></Route>
                     <Route exact path='/tabledispat' element={< TabaleDispat/>}></Route>
                     <Route exact path='/tabledelivery' element={< TableDelivery/>}></Route>
                     <Route exact path='/tablecancel' element={< TableCancel/>}></Route>
                  </Routes>  
              </BrowserRouter>   
            
            
            

{/* <BrowserRouter>
    <Admin/>
     
      <Routes>
    <Route path="/" exact component={Admin} />
    </Routes>
    </BrowserRouter> */}

    </div>
 //   // <div> className="App">
  //   //   <header className="App-header">
  //   //     <img src={logo} className="App-logo" alt="logo" />
  //   //     <p>
  //   //       Edit <code>src/App.js</code> and save to reload.
  //   //     </p>
  //   //     <a */}
   //   //       className="App-link"
  //   //       href="https://reactjs.org"
  //   //       target="_blank"
  //   //       rel="noopener noreferrer"
  //   //     >
  //   //       Learn React
  //   //     </a> */}
  //   //   </header>
  //   </div>
   );
}

export default App;
