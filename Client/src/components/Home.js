import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    cliente: [],
  };

  componentDidMount() {
    axios
      .get("https://dsw-cl3-server-renzo.herokuapp.com/api/cliente/consulta")
      .then((res) => {
        this.setState({
          cliente: res.data,
        });
      });
  }

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
      <div className="center">
        Cargando API, puede tardar por reinicio del servidor del API
      </div>
    );

    return (
      <div className="container home">
        <h4 className="center">Lista de Clientes</h4>
        {postsList}
      </div>
    );
  }
}

export default Home;
