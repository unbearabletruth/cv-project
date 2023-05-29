import React, { Component } from 'react';
import '../styles/education.css'; 

export default class Education extends Component{
    constructor(props){
        super(props)

        this.state = {
            school: "",
            title: "",
            date: "",
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
            <div id="educationWrapper">
                {editable ?
                    <>
                        <div id="educationForm">
                        <h1>Fill in education info</h1> 
                            <label>School name:</label>
                            <input name = "school" value={this.state.school} onChange={this.handleChange}></input>
                            <label>Title of study:</label>
                            <input name = "title" value={this.state.title} onChange={this.handleChange}></input>
                            <label>Date of study:</label>
                            <input name = "date" value={this.state.date} onChange={this.handleChange}></input>
                        </div> 
                    </>
                    :
                    <div id="education">
                        <h1>Education</h1>
                        <p>Full name: {this.state.school}</p>
                        <p>Email: {this.state.title}</p>
                        <p>Phone number: {this.state.date}</p>
                    </div>      
                }    
            </div>
        )
    }
}