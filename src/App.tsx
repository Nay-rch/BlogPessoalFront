import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import { Grid } from '@material-ui/core';
import Login from './paginas/login/Login';
import Home from './paginas/home/Home';
import './App.css';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

function App() {
  
    
    return (
      <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
      <Routes> // Antigo Switch
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cadastrousuario" element={<CadastroUsuario />} />
      {/* <Route path="/cadastro" element={<CadastroUsuario />} /> */}
      </Routes>
      </div>
      <Footer />
      </Router>
      )
    
   
      
   
    
  
    

  }
  export default App;
  
