import React from "react";
class Screen extends React.Component{
    render(){
    return (<div className="screen">{this.props.expression}</div>);
    }
}
export default Screen;