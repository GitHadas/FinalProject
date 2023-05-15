import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/NavBar/Layout';
import Home from './Components/Home';
import PrivateArea from './Components/Private Area/PrivateArea';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <PrivateArea /> */}
    </div>
  );
}

export default App;
