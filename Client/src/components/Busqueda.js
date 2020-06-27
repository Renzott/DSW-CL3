import React, { Component } from "react";
import axios from "axios";

class Busqueda extends Component {
  state = {
    cliente: [],
    edad1: 0,
    edad2: 0,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://dsw-cl3-server-renzo.herokuapp.com/api/cliente/consulta/${this.state.edad1}/${this.state.edad2}`
      )
      .then((res) => {
        this.setState({
          cliente: res.data,
        });
      });
  };

  render() {
    const { cliente } = this.state;
    const postsList = cliente.length ? (
      cliente.map((item) => {
        return (
          <div className="post card" key={item.id}>
            <div className="card-content">
              <span className="card-title red-text">
                {item.nombre} {item.apellido}
              </span>
              <p>
                <b>Dni:</b> {item.dni}
              </p>
              <p>
                <b>Edad:</b> {item.edad}
              </p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">Ingresa los 2 parametros de Busqueda</div>
    );

    return (
      <div className="container home">
        <br />
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s5">
                <input
                  id="edad1"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                  value={this.state.edad1 || ""}
                />
                <label htmlFor="edad1">Edad 1</label>
              </div>
              <div className="input-field col s5">
                <input
                  id="edad2"
                  type="tel"
                  className="validate"
                  onChange={this.handleChange}
                  value={this.state.edad2 || ""}
                />
                <label htmlFor="edad2">Edad 2</label>
              </div>
              <div className="input-field col s2">
                <button
                  className="btn waves-effect waves-light red lighten-3"
                  type="submit"
                >
                  Busqueda
                </button>
              </div>
            </div>
          </form>
        </div>
        <h4 className="center">Lista por Busqueda</h4>
        {postsList}
      </div>
    );
  }
}

export default Busqueda;
