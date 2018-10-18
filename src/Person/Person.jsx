 import React ,{Component} from 'react'

 class Person extends Component{
  render(){

    return(
        <div>
        <h1>{this.props.Name}</h1>
        <p>{this.props.children}</p>
        
        </div>
    )
  }
  }
 export default Person;

