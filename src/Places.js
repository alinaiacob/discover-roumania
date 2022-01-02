import React from 'react'
import Place from './Place'
import './Places.css'
const Places = () => {
    return (
        <div className='places'>
            <div className='places__ColumnRow'>
               
                 <Place 
                  img='https://media.istockphoto.com/photos/transfagarasan-highway-in-romania-at-night-time-picture-id1264142214?k=6&m=1264142214&s=612x612&w=0&h=sMF4kz_t5Lv-5LZi08nWg1dzM3Evl4C8NicAwwsvJqM='
                  text='Trasfagarasan'
                  id={1}/>
                 <Place
                   img='https://media.istockphoto.com/photos/sibiu-transylvania-romania-picture-id1224043576?k=6&m=1224043576&s=612x612&w=0&h=YqgNankG2BBnNGLcpJe_4WE1iaqtih5b1nBXHI7ERzc='
                   text='Sibiu'
                   id={3}
                   />
                        </div>
            <div className='places__ColumnRowSecond'>
                  
                  <Place 
                     img='https://media.istockphoto.com/photos/agricultural-green-landscape-at-twilight-in-borsa-maramures-romania-picture-id843961960?k=6&m=843961960&s=612x612&w=0&h=t1_BBLE3VqL84ChAJU6hrEtIrvPrGNo0de55zC9kJGw='
                     text='Maramures'
                     id={2}/>
                  <Place
                     img='https://media.istockphoto.com/photos/brasov-romania-picture-id1270237034?k=6&m=1270237034&s=612x612&w=0&h=gs1upDEG6FYncpNeRPqMcVdyboPZZ94CBIszbicpks0='
                     text='Brasov'
                     id={2}/>
                 <Place 
                     img='https://media.istockphoto.com/photos/gravestones-at-the-merry-cemetery-in-sapanta-romania-picture-id843286432?k=6&m=843286432&s=612x612&w=0&h=Uodt-2PYmY0otekWFSHCmTIai0ZFWk3iURaC4BH_pGY='
                     text='Merry Cemetery'
                     id={2}/>
                  </div>
                  
                   
                   
       
         
          
        </div>
    )
}

export default Places
