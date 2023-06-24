import React from 'react'

function Register(props) {

  const btnStyle ={
    backgroundColor: "green",
    color: "white",
  }
  return (
    <div className = "prim-div">

        <div className = "container card p-3 mt-2 register-container">
            <form onSubmit={props.submit}>
                <h1 className='text-center'> Registration Form</h1>
                <div className= "form-group">
                <label htmlFor = "name">Name:</label>
                <input type = "text" name = "name" required className='form-control'/>
                </div>

                <div className= "form-group">
                <label htmlFor = "Email">Email:</label>
                <input type = "text" name = "email"  required className='form-control'/>
                </div>

                <div className= "form-group">
                <label htmlFor = "Pass">Password:</label>
                <input type = "password" name = "password" required className='form-control'/>
                </div>

                <button type="submit" className='btn btn-primary'>Register</button>
                <button type = "button" 
                className='btn m-1' 
                style = {btnStyle} 
                onClick = {props.showPss}
                click ={this.showPasswordHandeler}>Show Password</button>
            </form>
        </div>
    </div>
  )
}



export default Register;
