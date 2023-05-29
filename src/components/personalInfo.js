import React, { Component } from 'react';
import '../styles/personalInfo.css'; 

export default class PersonalInfo extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: "",
            email: "",
            phoneNumber: "",
            editable: true
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        }) 
    }

    onSubmitTask = (e) => {
        e.preventDefault();
        this.setState({
          name: this.state.name,
          email: this.state.email,
          phoneNumber: this.state.phoneNumber,
          editable: false
        });
      };

    makeEditable = (e) => {
    this.setState({
        editable: true
        })
    }

    render(){
        return (
            <div id="personalInfoWrapper">
                    {this.state.editable ?
                        <>
                        <h1>Personal Info</h1>
                        <form id="personalInfoForm" onSubmit={this.onSubmitTask}>
                            <label>Name</label>
                            <input name = "name" value={this.state.name} onChange={this.handleChange}></input>
                            <label>Email</label>
                            <input name = "email" value={this.state.email} onChange={this.handleChange}></input>
                            <label>Phone number</label>
                            <input name = "phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange}></input>
                            <button type="submit">Save</button>
                        </form>
                        </>
                        :
                        <div id="personalInfo">
                            <h1>Personal Info</h1>
                            <p>Full name: {this.state.name}</p>
                            <p>Email: {this.state.email}</p>
                            <p>Phone number: {this.state.phoneNumber}</p>
                            <button type="submit" onClick={this.makeEditable}>Change</button>
                        </div>      
                    }    
            </div>
        )
    }
}