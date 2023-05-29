import React, { Component } from 'react';
import '../styles/personalInfo.css'; 

export default class PersonalInfo extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: "",
            email: "",
            phoneNumber: "",
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
            <div id="personalInfoWrapper">
                    {editable ?
                        <>
                            <div id="personalInfoForm">
                            <h1>Enter Personal Info</h1> 
                                <label>Name</label>
                                <input name = "name" value={this.state.name} onChange={this.handleChange}></input>
                                <label>Email</label>
                                <input name = "email" value={this.state.email} onChange={this.handleChange}></input>
                                <label>Phone number</label>
                                <input name = "phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange}></input>
                            </div> 
                        </>
                        :
                        <div id="personalInfo">
                            <h1>Personal Info</h1>
                            <p>Full name: {this.state.name}</p>
                            <p>Email: {this.state.email}</p>
                            <p>Phone number: {this.state.phoneNumber}</p>
                        </div>      
                    }    
            </div>
        )
    }
}