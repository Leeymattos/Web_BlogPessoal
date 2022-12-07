import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaTema from './components/temas/listatema/ListaTema';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import store from './store/store';
import 'react-toastify/dist/ReactToastify.css';
import "./styles/global.css"
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <Provider store={store}>
        <ToastContainer />
        <Router>
          <Navbar />
          <div style={{ minHeight: '100vh' }}>
            <Routes>

              <Route path="/" element={<Login />} />

              <Route path="/login" element={<Login />} />

              <Route path="/home" element={<Home />} />

              <Route path="/cadastrousuario" element={<CadastroUsuario />} />

              <Route path="/temas" element={<ListaTema />} />

              <Route path="/posts" element={<ListaPostagem />} />

              <Route path="/formularioPostagem" element={<CadastroPost />} />

              <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

              <Route path="/formularioTema" element={<CadastroTema />} />

              <Route path="/formularioTema/:id" element={<CadastroTema />} />

              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

              <Route path="/deletarTema/:id" element={<DeletarTema />} />

            </Routes>
          </div>
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;
