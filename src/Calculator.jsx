import React from 'react';
import './App.css';
import Screen from './Screen';
import KeyPad from './KeyPad';
import { evaluate } from 'mathjs';

class Calculator extends React.Component{
  constructor(){
    super();
    this.state={
      expression:"",
    };
}

handleClick = (event) => {
  if(event.target.innerText==='='){
    this.setState({expression:evaluate(this.state.expression)});
    return;
  }
  if(event.target.innerText==='C'){
    this.setState({expression:''});
    return;
  }
  
  this.setState({expression: this.state.expression + event.target.innerText});
}

  render(){
    return (
      <>
    <div className="calculator">
        <Screen expression={this.state.expression}/>
        <KeyPad onClick={this.handleClick}/>
    </div>
    </>
  );
    }
}

export default Calculator;