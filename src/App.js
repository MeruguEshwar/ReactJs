import './App.css';
import NavComponents from './components/NavComponents';
import { BrowserRouter as Route, Routes, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <Homecomponents />
      <Contactus />
      <Aboutcomponent />
      <Serviecomponent /> */}

      <NavComponents />
     
    </div>
  );
}

export default App;
