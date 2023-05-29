import React, { Component } from 'react';
import '../styles/experience.css'; 

export default class PracticalExperience extends Component{
    constructor(props){
        super(props)

        this.state = {
            company: "",
            position: "",
            tasks: "",
            date: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        }) 
    }

    render(){
        let {editable} = this.props;
        return (
            <div id="experienceWrapper">
                {editable ?
                    <>
                        <div id="experienceForm">
                        <h2>Fill in experience info</h2>
                        <hr className='expHr'></hr>
                            <div className='propertyExp'>
                                <label>Company name</label>
                                <input className="expInput" name = "company" value={this.state.company} onChange={this.handleChange}></input>
                            </div>
                            <div className='propertyExp'>
                                <label>Positon title</label>
                                <input className="expInput" name = "position" value={this.state.position} onChange={this.handleChange}></input>     
                            </div>
                            <div className='propertyExp'>
                                <label>Main tasks</label>
                                <textarea className="expInput" name = "tasks" value={this.state.tasks} onChange={this.handleChange}></textarea>
                            </div>
                            <div className='propertyExp'>
                                <label>Date from and until you worked for the company</label>
                                <input className="expInput" name = "date" value={this.state.date} onChange={this.handleChange}></input>
                            </div>
                        </div> 
                    </>
                    :
                    <div id="experience">
                        <h2>Experience</h2>
                        <hr className='expHr'></hr>
                        <div className='propertyExp'>
                            <p className='titleTextExp'>Company</p>
                            <p className='infoTextExp'>{this.state.company}</p>
                        </div>
                        <div className='propertyExp'>
                            <p className='titleTextExp'>Position</p>
                            <p className='infoTextExp'>{this.state.position}</p>
                        </div>
                        <div className='propertyExp'>
                            <p className='titleTextExp'>Main tasks</p>
                            <p className='infoTextExp'>{this.state.tasks}</p>
                        </div>
                        <div className='propertyExp'>
                            <p className='titleTextExp'>From and Until</p>
                            <p className='infoTextExp'>{this.state.date}</p>
                        </div>
                    </div>      
                }    
            </div>
        )
    }
}
