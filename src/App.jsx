import React, { Component } from 'react';
import './App.css';


import PersonalData from './Person/Person.jsx'
import { throws } from 'assert';
import { empty } from '../node_modules/rxjs';

class App extends Component {
  state = {
    Name:[{Data : "Harish"},{Data:"Test"},{Data:"THREE"}],
    flag:true,
    showall :true
  }
  switchHandler = (propertyName,flagvalue) =>{
    if(flagvalue)
    this.setState({Name:[{Data:propertyName},{Data:"Test"}],flag:flagvalue})
    else
    this.setState({Name:[{Data:ModuleA},{Data:"THREE"}],flag:flagvalue})

  }
  nameHandler  = (event) =>{
    this.setState({Name:[{Data:event.target.value}]})
  }

  showAllHandler = (flag) =>{    
    this.setState({showall:flag})
  }

  render() {      

    
  let dataflag = null;

  if(this.state.flag)
  {
    dataflag = (
    <h1>Flag is True</h1>
    )
  }
  let users = null;
  if(this.state.showall)
  {
      users = (
        <div>
          {this.state.Name.map(name => {
            return <h1>{name.Data}</h1>
          })}
        </div>
      )
  }

    return (
      <div className="App">        
        <h1>I am a React Developer</h1>
         <PersonalData Name={this.state.Name[0].Data} 
         chnagedName = {this.nameHandler}
         click = {() => this.switchHandler("Child",!this.state.flag)}/>
         {this.state.flag && "FlagON : " }{ this.state.flag ?"":"Nothing"  }
         

        {dataflag}

        
        <button onClick = {() => this.switchHandler("NameTest",!this.state.flag)} >switch</button>

        LISTING        
        {users}


      </div>
    );
  }
}

export default App;


let ModuleA = "Hello"