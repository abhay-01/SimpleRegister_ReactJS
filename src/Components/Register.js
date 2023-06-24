import React from 'react'

function Register(props) {

  const btnStyle ={
    backgroundColor: "green",
    color: "white",
  }

  if(props.showPass === true){
    btnStyle.backgroundColor = "red" 
    btnStyle.color = "white"
  }

  return (
    
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
                onClick = {props.showPass}
                >Show Password</button>
            </form>
        </div>
  )
}



export default Register;
