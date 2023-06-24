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


  showPasswordHandler = () =>{
    console.log(this.state);

    this.setState({showPass: !this.state.showPass},() =>{
      console.log(this.state);

    })
      
    }
  

  render() {
    return (
      <div>

        {this.state.isRegister?(<Greet name = {this.state.name} email = {this.state.email} password = {this.state.password}></Greet> ): (<Register 
        submit = {this.registerHandle} 
        showPass = {this.state.showPass}
        click ={this.showPasswordHandler}></Register>)}

      </div>
    )
  }
}



export default App;
