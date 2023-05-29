import PersonalInfo from './components/personalInfo';
import Education from './components/education';
import PracticalExperience from './components/practicalExperience';
import React, { Component } from 'react';
import './app.css'; 

class App extends Component{
  constructor(){
    super()

    this.state = {
      editable: true
    }
  }

  makeEditable = (e) => {
    this.setState({
        editable: true
    })
  }

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      editable: false
    });
  };

  render(){
    return ( 
      <div className="App">
        <div id="infoWrapper">
          <div id="sidebar">
            <PersonalInfo editable={this.state.editable}/>
            <Education/>
          </div>
          <PracticalExperience/>
        </div>
          {this.state.editable ?
            <button type="submit" onClick={this.onSubmitTask}>Save</button>
          :
            <button type="button" onClick={this.makeEditable}>Change</button>
          }  
      </div>
    );
  }  
}

export default App;
