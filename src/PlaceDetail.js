import React,{useEffect} from 'react'
import './PlaceDetail.css'
import RoomIcon from '@material-ui/icons/Room';
import { animated, useSpring } from "react-spring";
const PlaceDetail = ({id,title,img1,img2,img3,img4,text1,text2,location}) => {
    const style = useSpring({
        from: {
          transform: "rotateY(0deg)"
        },
        transform: "rotateY(25deg)"
      });
    return (
        <div className='placeDetail'
           style={{
            ...style
            
          }}
        > 
        <div className='placeDetailTop'>
                 <div className='placeDetail__location'>
               
                  <RoomIcon className='placeDetail__locationIcon' id={id==4 ? 'not-show':"d"}/>
                  <h4>{location}</h4>
                </div>
       
                <h1>{title}</h1>
        </div>
         
            <div className='placeDetail__Row'>
            <div className='placeDetail__Element'>
                   <img src={img2}/>
             
             </div>
               <div className='placeDetail__Elements'>
                    <img src={img1}/>
                    <div className='placeDetail__ElementsRow'>
                       <div className='imagesRow'>
                         <img src={img3}/>
                         <img src={img4}/>
                       </div>
                        <div className='placeDetail__ElementsRowText'>
                          <p>{text1}</p>
                          <p>{text2}</p>
                        </div>
                      
                     
                   </div>
                 
               </div>
       
             
            </div>
            
        </div>
    )
}

export default PlaceDetail
