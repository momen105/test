import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Singup from './Pages/singup';
import Login from './Pages/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Singup />}>
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    // <div >
    //   <Singup />
    // </div>
  );
}

export default App;
