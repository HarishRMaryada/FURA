import React, { Component } from 'react';
import './App.css';


import PersonalData from './Person/Person.jsx'
import { throws } from 'assert';
import { empty } from '../node_modules/rxjs';

class App extends Component {
  state = {
    Name:[{Data : "Harish"},{Data:"Test"}],
    flag:true
  }
  switchHandler = (propertyName,flagvalue) =>{
    //this.state.Name[0] = propertyName;
    //this.setState({Name:["EMPTY","EMPTY"]})
    console.log(flagvalue)
    if(flagvalue)
    this.setState({Name:[{Data:propertyName},{Data:"Test"}],flag:flagvalue})
    else
    this.setState({Name:[{Data:"FlaggTEST"},{Data:""}],flag:flagvalue})

  }
  render() {      
    return (
      <div className="App">        
        <h1>I am a React Developer</h1>
         <PersonalData Name={this.state.Name[0].Data} />
        {/* <PersonalData Name={this.state.Name[0]} />
        <PersonalData Name={this.state.Name[1]}> 
        TestCHILDREN
        </PersonalData> */}
        <button onClick = {() => this.switchHandler("NameTest",!this.state.flag)} >switch</button>
      </div>
    );
  }
}

export default App;
