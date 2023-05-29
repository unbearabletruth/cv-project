import React, { Component } from 'react';
import '../styles/experience.css'; 

export default class PracticalExperience extends Component{
    constructor(props){
        super(props)

        this.state = {
            company: "",
            positon: "",
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
                            <label>Company name:</label>
                            <input name = "company" value={this.state.company} onChange={this.handleChange}></input>
                            <label>Positon title:</label>
                            <input name = "position" value={this.state.position} onChange={this.handleChange}></input>
                            <label>Main tasks:</label>
                            <input name = "tasks" value={this.state.tasks} onChange={this.handleChange}></input>
                            <label>Date from and until you worked for the company:</label>
                            <input name = "date" value={this.state.date} onChange={this.handleChange}></input>
                        </div> 
                    </>
                    :
                    <div id="experience">
                        <h2>Experience</h2>
                        <p>Full name: {this.state.school}</p>
                        <p>Email: {this.state.title}</p>
                        <p>Phone number: {this.state.date}</p>
                    </div>      
                }    
            </div>
        )
    }
}
