import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Home from '../src/Components/Home/Home'
import About from './Components/About/About';
import Order from './Components/Order/Order';
import SignUp from './Components/SignUp/SignUp';
import Card from './Components/card/Card'
import Product from './Components/Product/Product';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Order' element={<Order/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/card' element={<Card/>}/>
        <Route path='/Product' element={<Product/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
