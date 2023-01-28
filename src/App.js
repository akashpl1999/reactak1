import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css';


import Currency from './components/Currency';
import Login from './components/Login';
import Register from './components/Register';

import Navbar from './components/Navbar';
import Bredcram from './components/Bredcram';
import Drawer from './components/Drawer1';
import Profile from './components/Profile';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Graph from './components/Graph';

import Table from './components/Table';
import { Formikexm } from './components/Formikexm';
import Drawerex from './components/Drawerex';

function App() {



  return (



    <div className="App">

 <BrowserRouter>
      
      
      <Navbar/>
      <Routes>

        <Route path="/" element={<Home/>}> </Route>
     
          <Route path="/login" element={< Login/>} > </Route>
          <Route path="/register" element={< Register/>} > </Route>
          <Route path="/profile" element={< Profile/>} > </Route>
     
          <Route path="/about" element={< About/>} > </Route>
          <Route path="/formik" element={<Formikexm/>}> </Route>
     
          <Route path="/Currency" element={< Currency/>} > </Route>
          <Route path="/home" element={<Home/>} > </Route>
          <Route path="/table" element={<Table/>} > </Route>





          <Route path="/draw" element={<Drawerex/>} > </Route>
     




          <Route path="/service" element={<Service/>} > </Route>
     
          <Route path="/contact" element={<Contact/>} > </Route>
     
          <Route path="/graph"  element={<Graph />} > </Route>
     

       </Routes>
      
       <Footer/>
      
  </BrowserRouter>

 
  
   
  
  
  
  
  
  
  
  
  
  
    </div>



  );
}

export default App;


