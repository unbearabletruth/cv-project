import React, { useState } from "react";
import '../styles/experience.css';
import uniqid from "uniqid";

export default function PracticalExperience({editable}){
    const [data, setData] = useState({
        allExps: [{
            company: "",
            position: "",
            tasks: "",
            date: "",
            id: uniqid()
        }],
        tooManyExp: false
    }) 

    const handleChange = (e, id) => {
        setData({
            ...data,
            allExps: data.allExps.map((exp) => {
                if(exp.id === id){
                    exp[e.target.name] = e.target.value
                    return exp;
                }
                return exp;
            })
        }) 
    }

    const addExp = (e) => {
        e.preventDefault();
        if(data.allExps.length === 2){
            setData({
                ...data,
                tooManyExp: true
            })
            return
        }
        setData({
            ...data,
            allExps: data.allExps.concat({
                company: "",
                position: "",
                tasks: "",
                date: "",
                id: uniqid()
            })
        });
      }

    return (
        <div id="experienceWrapper">
            {data.allExps.map((exp) => {
                if(editable){
                    return(
                        <div key={exp.id} id="experienceForm">
                            <h2>Fill in experience info
                                <hr className='expHr'></hr>
                            </h2>
                            <div className='propertyExp'>
                                <label>Company name</label>
                                <input 
                                    className="expInput" 
                                    name = "company" 
                                    value={exp.company} 
                                    onChange={(e) => handleChange(e, exp.id)}>
                                </input>
                            </div>
                            <div className='propertyExp'>
                                <label>Positon title</label>
                                <input 
                                    className="expInput" 
                                    name = "position" 
                                    value={exp.position} 
                                    onChange={(e) => handleChange(e, exp.id)}>
                                </input>     
                            </div>
                            <div className='propertyExp'>
                                <label>Main tasks</label>
                                <textarea 
                                    className="expInput" 
                                    name = "tasks" 
                                    value={exp.tasks} 
                                    onChange={(e) => handleChange(e, exp.id)}>
                                </textarea>
                            </div>
                            <div className='propertyExp'>
                                <label>Date from and until you worked for the company</label>
                                <input 
                                    className="expInput" 
                                    name = "date" 
                                    value={exp.date} 
                                    onChange={(e) => handleChange(e, exp.id)}>
                                </input>
                            </div>  
                        </div> 
                    )  
                }
                else {
                    return(
                    <div key={exp.id} id="experience">
                        <h2>{`Job position at ${exp.company}`}
                            <hr className='expHr'></hr>
                        </h2>
                        <div className='propertyExp'>
                            <p className='titleTextExp'>Company</p>
                            <p className='infoTextExp'>{exp.company}</p>
                        </div>
                        <div className='propertyExp'>
                            <p className='titleTextExp'>Position</p>
                            <p className='infoTextExp'>{exp.position}</p>
                        </div>
                        <div className='propertyExp'>
                            <p className='titleTextExp'>Main tasks</p>
                            <p className='infoTextExp'>{exp.tasks}</p>
                        </div>
                        <div className='propertyExp'>
                            <p className='titleTextExp'>From and Until</p>
                            <p className='infoTextExp'>{exp.date}</p>
                        </div>
                    </div>   
                    )
                }    
            })}
            {editable ? <button id="addExp" onClick={addExp}>Add another job</button> : null}
            {editable && data.tooManyExp ? <p id="tooManyExp">You can only add 2 jobs</p> : null}    
        </div>
    )
}

