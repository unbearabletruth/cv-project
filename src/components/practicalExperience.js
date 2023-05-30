import React, { Component } from 'react';
import '../styles/experience.css';
import uniqid from "uniqid";

export default class PracticalExperience extends Component{
    constructor(props){
        super(props)

        this.state = {
            exp: {
                company: "",
                position: "",
                tasks: "",
                date: "",
                id: uniqid()
            },
            allExps: [{
                company: "",
                position: "",
                tasks: "",
                date: "",
                id: uniqid()
            }],
            tooManyExp: false
        }
    }

    handleChange = (e, id) => {
        this.setState({
            allExps: this.state.allExps.map((exp) => {
                if(exp.id === id){
                    exp[e.target.name] = e.target.value
                    return exp;
                }
                return exp;
            })
        }) 
    }

    addExp = (e) => {
        e.preventDefault();
        if(this.state.allExps.length === 2){
            this.setState({
                tooManyExp: true
            })
            return
        }
        this.setState({
          allExps: this.state.allExps.concat(this.state.exp),
          exp: {
            company: "",
            position: "",
            tasks: "",
            date: "",
            id: uniqid()
        },
        });
      }

    render(){
        let {editable} = this.props;
        return (
            <div id="experienceWrapper">
                {this.state.allExps.map((exp) => {
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
                                        onChange={(e) => this.handleChange(e, exp.id)}>
                                    </input>
                                </div>
                                <div className='propertyExp'>
                                    <label>Positon title</label>
                                    <input 
                                        className="expInput" 
                                        name = "position" 
                                        value={exp.position} 
                                        onChange={(e) => this.handleChange(e, exp.id)}>
                                    </input>     
                                </div>
                                <div className='propertyExp'>
                                    <label>Main tasks</label>
                                    <textarea 
                                        className="expInput" 
                                        name = "tasks" 
                                        value={exp.tasks} 
                                        onChange={(e) => this.handleChange(e, exp.id)}>
                                    </textarea>
                                </div>
                                <div className='propertyExp'>
                                    <label>Date from and until you worked for the company</label>
                                    <input 
                                        className="expInput" 
                                        name = "date" 
                                        value={exp.date} 
                                        onChange={(e) => this.handleChange(e, exp.id)}>
                                    </input>
                                </div>  
                            </div> 
                        )  
                    }
                    else {
                        console.log(exp)
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
                {editable ? <button id="addExp" onClick={this.addExp}>Add another job</button> : null}
                {editable && this.state.tooManyExp ? <p id="tooManyExp">You can only add 2 jobs</p> : null}    
            </div>
        )
    }
}
