import React, { useState } from "react";
import '../styles/education.css'; 

export default function Education({editable}){
    const [data, setData] = useState({
        school: "",
        title: "",
        date: "",
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        }) 
    }

    return (
        <div id="educationWrapper">
            {editable ?
                <>
                    <div id="educationForm">
                    <h2>Fill in education info
                        <hr></hr>
                    </h2>
                        <div className='propertyEd'>
                            <label>School name:</label>
                            <input 
                                name = "school" 
                                value={data.school} 
                                onChange={handleChange}>      
                            </input>
                        </div> 
                        <div className='propertyEd'>
                            <label>Title of study:</label>
                            <input 
                                name = "title" 
                                value={data.title} 
                                onChange={handleChange}>
                            </input>
                        </div>
                        <div className='propertyEd'>
                            <label>Date of study:</label>
                            <input 
                                name = "date" 
                                value={data.date} 
                                onChange={handleChange}>
                            </input>
                        </div> 
                    </div> 
                </>
                :
                <div id="education">
                    <h2>Education
                        <hr></hr>
                    </h2>
                    <div className='propertyEd'>
                        <p className='titleTextEd'>School</p>
                        <p className='infoTextEd'>{data.school}</p>
                    </div>
                    <div className='propertyEd'>
                        <p className='titleTextEd'>Study</p>
                        <p className='infoTextEd'>{data.title}</p>
                    </div>
                    <div className='propertyEd'>
                        <p className='titleTextEd'>Date of study</p>
                        <p className='infoTextEd'>{data.date}</p>
                    </div>
                </div>      
            }    
        </div>
    )
}
