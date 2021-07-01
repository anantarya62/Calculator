import React from "react";
import Button from "./Button";

class KeyPad extends React.Component{
    render(){
    return (<div className='keypad'>
    {['1', '2', '3', 'C', '4', '5', '6', '+', '7', '8', '9', '-', '0', '%', '*', '='].map(el=>(
        <Button value={el} key={el} onclick={this.props.onclick}>
            e1
            </Button>))}
       
        </div>
    );
    }
}
export default KeyPad;