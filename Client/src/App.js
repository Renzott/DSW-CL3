import React from "react";
import { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./components/Home";
import Registro from "./components/Registro";
import Busqueda from "./components/Busqueda";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/registro" component={Registro} />
            <Route path="/busqueda" component={Busqueda} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
