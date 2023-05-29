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
                        <h2>Fill in education info</h2>
                        <hr></hr>
                            <div className='propertyEd'>
                                <label>School name:</label>
                                <input name = "school" value={this.state.school} onChange={this.handleChange}></input>
                            </div> 
                            <div className='propertyEd'>
                                <label>Title of study:</label>
                                <input name = "title" value={this.state.title} onChange={this.handleChange}></input>
                            </div>
                            <div className='propertyEd'>
                                <label>Date of study:</label>
                                <input name = "date" value={this.state.date} onChange={this.handleChange}></input>
                            </div> 
                        </div> 
                    </>
                    :
                    <div id="education">
                        <h2>Education</h2>
                        <hr></hr>
                        <div className='propertyEd'>
                            <p className='titleTextEd'>School</p>
                            <p className='infoTextEd'>{this.state.school}</p>
                        </div>
                        <div className='propertyEd'>
                            <p className='titleTextEd'>Study</p>
                            <p className='infoTextEd'>{this.state.title}</p>
                        </div>
                        <div className='propertyEd'>
                            <p className='titleTextEd'>Date of study</p>
                            <p className='infoTextEd'>{this.state.date}</p>
                        </div>
                    </div>      
                }    
            </div>
        )
    }
}