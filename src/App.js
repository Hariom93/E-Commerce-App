import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import SigninFrom from './pages/SigninFrom';
import LoginFrom from './pages/LoginFrom';
import { Route, Routes } from 'react-router';
function App() {
  return (
    <div>
      <div className='bg-gray-900	w-[100vw] px-4'>
        <Navbar />
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='signin' element={<SigninFrom />} />
        <Route path='login' element={<LoginFrom />} />
      </Routes>
    </div>
  );
}

export default App;
