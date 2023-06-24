import React, { Component } from 'react'

function Greet (props) {
    return (
      <div className = "container card p-3 mt-2 register-container">
        <h2>{props.name}</h2>
        <h3>Thanks for Joining Us!</h3>
        <h2>{props.email}</h2>
      </div>
    )
  
}


export default Greet;
