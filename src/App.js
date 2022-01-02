import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Places from './Places';

import PlaceDetail from './PlaceDetail';
import places from './data';
import Footer from './Footer';
import {animated,useSpring} from 'react-spring';
import { useScroll } from "react-use-gesture";
function App() {
 
 
  return (
    <div className="app">
         <Header/>  
         <div className='horizontal__scroll'>
            <Home/>
       
            
          
                <div  className='places__container'>
                   {places.map((place)=>{
                         const{id,img1,img2,title,text1,text2,location,img3,img4}=place;
                         return(
                          
                                  <PlaceDetail 
                                       key={id}
                                       id={id}
                                       img1={img1}
                                       img2={img2}
                                       img3={img3}
                                       img4={img4}
                                       title={title}
                                       text1={text1}
                                       text2={text2}
                                       location={location}
                      
                      />
                          
                    
             
           )
            })}
                </div>
      
            
            
           
           
         </div>
     
       
    </div>
  );
}

export default App;
