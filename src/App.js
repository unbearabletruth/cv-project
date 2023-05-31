import PersonalInfo from './components/personalInfo';
import Education from './components/education';
import PracticalExperience from './components/practicalExperience';
import React, { useState } from "react";
import './app.css'; 

function App(){
  const [editable, setEditable] = useState(true);
  
  const makeEditable = (e) => {
    setEditable(true);
  }

  const onSubmitTask = (e) => {
    e.preventDefault();
    setEditable(false);
  };

  return ( 
    <div className="App">
      <div id="infoWrapper">
        <div id="sidebar">
          <PersonalInfo editable={editable}/>
          <Education editable={editable}/>
        </div>
        <PracticalExperience editable={editable}/>
      </div>
        {editable ?
          <button type="submit" onClick={onSubmitTask}>Save</button>
        :
          <button type="button" onClick={makeEditable}>Change</button>
        }  
    </div>
  );
}  


export default App;
