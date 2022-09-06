import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <div style={{ minHeight: "100vh" }}>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/cadastrousuario">
              <CadastroUsuario/>
            </Route>
          </div>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;