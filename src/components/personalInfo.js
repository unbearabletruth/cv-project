import React, { useState } from "react";
import '../styles/personalInfo.css'; 
import Avatar from '../images/avatar.png'

export default function PersonalInfo({editable}){

    const [data, setData] = useState({
        picture: Avatar,
        name: "",
        email: "",
        phoneNumber: "",
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const handleImage = (e) => {
        setData({
            ...data,
            picture: URL.createObjectURL(e.target.files[0])
        })  
    }

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
                                onChange={handleImage}>
                            </input>
                        </div>
                        <div className='property'>
                            <label>Name</label>
                            <input 
                                name = "name" 
                                value={data.name} 
                                onChange={handleChange}>
                            </input>
                        </div>
                        <div className='property'>
                            <label>Email</label>
                            <input 
                                name = "email" 
                                value={data.email} 
                                onChange={handleChange}>
                            </input>
                        </div>
                        <div className='property'>
                            <label>Phone number</label>
                            <input 
                                name = "phoneNumber" 
                                value={data.phoneNumber} 
                                onChange={handleChange}>
                            </input>
                        </div>  
                    </div> 
                </>
                :
                <div id="personalInfo">
                    <img src={data.picture} alt="avatar" id="avatarImg"></img>
                    <h2>Personal Info
                        <hr></hr>
                    </h2>
                    <div className='property'>
                        <p className='titleText'>Full name</p>
                        <p className='infoText'>{data.name}</p>
                    </div>
                    <div className='property'>
                        <p className='titleText'>Email</p>
                        <p className='infoText'>{data.email}</p>
                    </div>
                    <div className='property'>
                        <p className='titleText'>Phone number</p>
                        <p className='infoText'>{data.phoneNumber}</p>
                    </div>
                </div>      
            }    
        </div>
    )
}
