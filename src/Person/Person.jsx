 import React ,{Component} from 'react'

 class Person extends Component{
  render(){

    return(
        <div>
        <h1 onClick = {this.props.click}>{this.props.Name}</h1>
        <p>{this.props.children}</p>
        <input type="text" onChange = {this.props.chnagedName}  value = {this.props.Name}/>
        </div>
    )
  }
  }
 export default Person;

