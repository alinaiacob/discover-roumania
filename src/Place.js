import React from 'react'
import './Place.css'
const Place = ({img,text,id}) => {
    return (
        <div className="place">
            <img src={img} className={id==1?'img__big':"img"} id={id==3?"medium":"another"}/>
            
        </div>
    )
}

export default Place
