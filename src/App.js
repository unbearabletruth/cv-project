import PersonalInfo from './components/personalInfo';
import Education from './components/education';
import PracticalExperience from './components/practicalExperience';
import React, { Component } from 'react';
import './app.css'; 

class App extends Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div className="App">
        <div id="sidebar">
          <PersonalInfo/>
          <Education/>
        </div>
        <PracticalExperience/>
      </div>
    );
  }  
}

export default App;
