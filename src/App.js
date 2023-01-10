import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter , Route , Routes , Link} from 'react-router-dom'
import Home from '../src/Components/Home/Home'
import About from './Components/About/About';
import Order from './Components/Order/Order';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Order' element={<Order/>}/>
        <Route path='/SingUp' element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
