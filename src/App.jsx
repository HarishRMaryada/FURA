import React, { Component } from 'react';

//material ui css
import Button from '@material-ui/core/Button';


//css
import './App.css';
import TopNavBar from './Presentation/TopNavBar';
import LeftDrawer from './Presentation/LeftDrawer';


import PersonalData from './Person/Person.jsx'

class App extends Component {
  state = {
    Name:[{id: 1 ,Data : "Harish"},{id :2,Data:"Test"},{id:3,Data:"THREE"}],
    flag:true,
    showall :true
  }
  switchHandler = (propertyName,flagvalue) =>{
    if(flagvalue)
    this.setState({Name:[{id: 1 ,Data:propertyName},{id: 2 ,Data:"Test"}],flag:flagvalue})
    else
    this.setState({Name:[{id: 1 ,Data:ModuleA},{id: 3 ,Data:"THREE"}],flag:flagvalue})

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
          {this.state.Name.map((name) => {
            return <h1 key={name.id}>{name.Data}</h1>
          })}
        </div>
      )
  }


  
    return (

      
      <div className="App">   
        
        <TopNavBar/>
        <LeftDrawer />    
        <h1>I am a React Developer</h1>
         <PersonalData Name={this.state.Name[0].Data} 
         chnagedName = {this.nameHandler}
         click = {() => this.switchHandler("Child",!this.state.flag)}/>
         {this.state.flag && "FlagON : " }{ this.state.flag ?"":"Nothing"  }
         

        {dataflag}

        
        <Button variant="outlined" color="primary" onClick = {() => this.switchHandler("NameTest",!this.state.flag)} >switch</Button>

        LISTING        
        {users}


      </div>
    );
  }
}

export default App;


let ModuleA = "Hello"