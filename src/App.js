import './App.css';
import React, { Component } from 'react'
import Register from './Components/Register';
import Greet from './Components/Greet';



class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      name:null,
      email: null,
      password:null,
      isRegister: false,
      showPass: false,
       }
  }

  registerHandle =(event) =>{
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    this.setState({name,email,password,isRegister:true});
    event.preventDefault();
  };
  render() {
    return (
      <div>

        {this.state.isRegister?(<Greet name = {this.state.name} email = {this.state.email} password = {this.state.password}></Greet> ): (<Register submit = {this.registerHandle} showPass = {this.click}></Register>)}

      </div>
    )
  }
}



export default App;
