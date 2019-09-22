import React, { Component } from "react";
import Input from "../Input";
import Select from "../Select"
import BackService from "../../components/BackService/back-service"
import { Link, Redirect } from "react-router-dom";
import "./cadastrar.css";

class CadastrarForm extends Component {
  constructor(props) {
    super(props);
    this.state = { password: "", email: "", name: "", experience: "", interest: "", area: "", programmingLanguages: "", github: ""};
    this.service = new BackService();
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit(event){
    event.preventDefault();
    const {
      email ,name, experience, interest, area, programmingLanguage, github
    } = this.state;

    this.service.cadastrar(email ,name, experience, interest, area, programmingLanguage, github)
    .then(response => {
      console.log(response.data)})
    .catch(err=> console.log(err))

  }

  render() {
    return (
      <div className="div-login">
        <form onSubmit={e => this.handleFormSubmit(e)} className="form form-cadastrar">
        <img className="logo"src="./images/logo.svg" alt="Shawee Logo"/>
        <Input
          type="text"
          name="name"
          placeholder="Nome Completo"
          change={e => this.handleChange(e)}
          value={this.state.name}
          />
          <Input
            type="text"
            name="email"
            placeholder="Endereço de E-mail"
            change={e => this.handleChange(e)}
            value={this.state.email}
          />
          <Select
          name="experience"
          placeholder='De 0 a 5, qual a sua experiência em Hackathons?'
          options={[0,1,2,3,4,5]}
          change={e => this.handleChange(e)}
          value={this.state.gender}
          required='true'
          />
          <Select
          name="interest"
          placeholder='Qual o seu interesse nessa edição?'
          options={["Vencer", "Aprender", "Vencer e Aprender"]}
          change={e => this.handleChange(e)}
          value={this.state.interest}
          required='true'
          />
          <Select
          name="area"
          placeholder='Em qual área deseja atuar?'
          options={["Front-end", "Back-end", "Design", "Negócios"]}
          change={e => this.handleChange(e)}
          value={this.state.area}
          required='true'
          />
          <Select
          name="programmingLanguages"
          placeholder='Quais linguagens você tem maior facilidade?'
          options={["JavaScript", "Java", "Python", "C++", "Outras"]}
          change={e => this.handleChange(e)}
          value={this.state.programmingLanguages}
          required='true'
          />
          <Input
            type="text"
            name="github"
            placeholder="Link do Github"
            change={e => this.handleChange(e)}
            value={this.state.github}
          />
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            change={e => this.handleChange(e)}
            value={this.state.password}
          />
          <Link to="/dashboard">
          <button className="button width-100" to="/dashboard">
            Cadastre-se
          </button>
          </Link>
          <hr className="line"></hr>
        <Link to="/login" className="text-gray">Já tem uma conta? Faça login</Link>
        </form>
      </div>
    );
  }
}

export default CadastrarForm;
