import './App.css';
import Register from './Components/Register';
import { BrowserRouter,Routes,Route ,Link} from 'react-router-dom';
import LogIn from './Components/LogIn';
// import Dashboard from './Components/Dashboard';
import Product from './Products/Product';
import AddToCart from './Products/AddToCart';
import Forgot from './Components/Forgot';
import ForgotAuth from './Components/ForgotAuth';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-light mb-5 sticky-top">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link btn-outline-light rounded-pill text-dark fw-bold" aria-current="page" href="#"><Link to="/prod" className='text-decoration-none text-dark fw-bold '>Home</Link></a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <button className="btn btn-outline me-1 rounded-pill" type="submit"><Link to="/login" className='text-decoration-none text-dark fw-bold '>SignIn</Link></button>
                <button className="btn btn-outline rounded-pill" type="submit"><Link to="/register" className='text-decoration-none text-dark fw-bold '>SignUp</Link></button>
                {/* <button className="btn btn-outline-success" type="submit"><Link to="/prod" className='text-decoration-none'>Products</Link></button> */}
              </form>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/prod" element={<Product />}></Route>
          <Route path="/addcart/:id" element={<AddToCart />}></Route>
          <Route path="/forgot" element={<Forgot />}></Route>
          <Route path="/forgotauth/:id" element={<ForgotAuth />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
