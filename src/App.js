import PersonalInfo from './components/generalnfo';
import Education from './components/education';
import PracticalExperience from './components/practicalExperience';
import React, { Component } from 'react';

class App extends Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div className="App">
        <div id="personalAndEducation">
          <PersonalInfo/>
          <Education/>
        </div>
        <PracticalExperience/>
      </div>
    );
  }  
}

export default App;
