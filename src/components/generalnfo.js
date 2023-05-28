import React, { Component } from 'react';

export default class PersonalInfo extends Component{
    constructor(){
        super()

        this.state = {
            name: "",
            email: "",
            phoneNumber: "",
            editable: true
        }
    }

    handleChange = (e) => {
        if (e.target.name === "name"){
            this.setState({
                name: e.target.value
            })
        } else if (e.target.name === "email"){
            this.setState({
                email: e.target.value
            })
        } else if (e.target.name === "phoneNumber"){
            this.setState({
                phoneNumber: e.target.value
            })
        }     
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

    render(){
        return (
            <div id="personalInfo">
                    {this.state.editable ?
                        <form onSubmit={this.onSubmitTask}>
                            <label>Name</label>
                            <input name = "name" onChange={this.handleChange}></input>
                            <label>Email</label>
                            <input name = "email" onChange={this.handleChange}></input>
                            <label>Phone number</label>
                            <input name = "phoneNumber" onChange={this.handleChange}></input>
                            <button type="submit">Submit</button>
                        </form>
                        :
                        <>
                            <p>{this.state.name}</p>
                            <p>{this.state.email}</p>
                            <p>{this.state.phoneNumber}</p>
                        </>
                    }    
            </div>
        )
    }
}