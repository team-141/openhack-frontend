import React, { Component } from "react";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import "./login.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { password: "", email: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit(event){

  }

  render() {
    return (
      <div className="div-login">
        <form onSubmit={e => this.handleFormSubmit(e)} className="form">
        <img className="logo"src="./images/logo.svg" alt="Shawee Logo"/>
        <span className="text-gray">Vamos nessa?</span>
          <Input
            type="text"
            name="email"
            placeholder="Endereço de E-mail"
            change={e => this.handleChange(e)}
            value={this.state.email}
          />
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            change={e => this.handleChange(e)}
            value={this.state.password}
          />
          <Link className="button" to="/dashboard">
            Login
          </Link>
          <hr className="line"></hr>
        <Link to="/cadastrar" className="text-gray">Ainda não tem uma conta? Cadastre-se</Link>
        </form>
      </div>
    );
  }
}

export default LoginForm;
