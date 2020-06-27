import React, { Component } from "react";
import axios from "axios";

class Registro extends Component {
  state = {
    nombre: "",
    apellido: "",
    dni: "",
    edad: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://dsw-cl3-server-renzo.herokuapp.com/api/cliente/registro",
        this.state
      )
      .then((data) => {
        if (data.status === 200) {
          this.props.history.push("/");
        }
      });
  };

  render() {
    return (
      <div className="row">
        <form className="col s6 offset-s3" onSubmit={this.handleSubmit}>
          <h3>Ingreso de Cliente</h3>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="nombre"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={this.state.nombre}
              />
              <label htmlFor="nombre">Nombre</label>
              <span className="helper-text">Nombre</span>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="apellido"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={this.state.apellido}
              />
              <label htmlFor="apellido">Apellido</label>
              <span className="helper-text">Apellido</span>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="dni"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={this.state.dni}
              />
              <label htmlFor="dni">Dni</label>
              <span className="helper-text">Dni</span>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="edad"
                type="number"
                className="validate"
                onChange={this.handleChange}
                value={this.state.edad}
              />
              <label htmlFor="edad">Edad</label>
              <span className="helper-text">Edad</span>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light red lighten-3"
            type="submit"
          >
            Registrar
          </button>
        </form>
      </div>
    );
  }
}

export default Registro;
