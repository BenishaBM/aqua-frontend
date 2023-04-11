import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Login from './layout/Login';
import Home from './layout/Home';
import Rawmaterial from './NavbarComponents/Rawmaterial';
import Stocks from './NavbarComponents/Stocks';
import Customers from './NavbarComponents/Customers';
import AddStocks from './add/AddStocks';
import { useState } from 'react';




function App() {
  const[token,setToken]=useState(localStorage.getItem('userToken') ?? null);

  return (
    <div className="App">
      <Router>

      <Navbar setToken={setToken}/>

        {token ? <Home/> :<Login token={token} setToken={setToken}/>}

      <Routes>
        
      
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/navbar' element={<Navbar/>}/>
        <Route exact path='/rawmaterials' element={<Rawmaterial/>}/>
        <Route exact path='/stocks' element={<Stocks/>}/>
        <Route exact path='/customers' element={<Customers/>}/>
        <Route exact path='/addstocks' element={<AddStocks/>}/>
      </Routes>

      </Router>

    </div>
  );
}

export default App;
