import React, { Component } from 'react';
import '../styles/personalInfo.css'; 
import Avatar from '../images/avatar.png'

export default class PersonalInfo extends Component{
    constructor(props){
        super(props)

        this.state = {
            picture: Avatar,
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

    handleImage = (e) => {
        this.setState({
            picture: URL.createObjectURL(e.target.files[0])
        })    
    }

    render(){
        let {editable} = this.props;
        console.log(this.state.picture)
        return (
            <div id="personalInfoWrapper">
                {editable ?
                    <>
                        <div id="personalInfoForm">
                        <h2>Fill in personal Info
                            <hr></hr>
                        </h2> 
                            <div className='property'>
                                <label>Profile picture</label>
                                <input 
                                    type="file"
                                    id="avatar"
                                    name="avatar"
                                    accept="image/png, image/jpeg"
                                    onChange={this.handleImage}>
                                </input>
                            </div>
                            <div className='property'>
                                <label>Name</label>
                                <input 
                                    name = "name" 
                                    value={this.state.name} 
                                    onChange={this.handleChange}>
                                </input>
                            </div>
                            <div className='property'>
                                <label>Email</label>
                                <input 
                                    name = "email" 
                                    value={this.state.email} 
                                    onChange={this.handleChange}>
                                </input>
                            </div>
                            <div className='property'>
                                <label>Phone number</label>
                                <input 
                                    name = "phoneNumber" 
                                    value={this.state.phoneNumber} 
                                    onChange={this.handleChange}>
                                </input>
                            </div>  
                        </div> 
                    </>
                    :
                    <div id="personalInfo">
                        <img src={this.state.picture} alt="avatar" id="avatarImg"></img>
                        <h2>Personal Info
                            <hr></hr>
                        </h2>
                        <div className='property'>
                            <p className='titleText'>Full name</p>
                            <p className='infoText'>{this.state.name}</p>
                        </div>
                        <div className='property'>
                            <p className='titleText'>Email</p>
                            <p className='infoText'>{this.state.email}</p>
                        </div>
                        <div className='property'>
                            <p className='titleText'>Phone number</p>
                            <p className='infoText'>{this.state.phoneNumber}</p>
                        </div>
                    </div>      
                }    
            </div>
        )
    }
}