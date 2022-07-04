import React from 'react'
import { useState,useEffect } from 'react'
import '../App.css'
import axios from 'axios'
import {Grid,Typography} from '@mui/material'

function Content() {
    const apiToken= 'MjExODBfMTY1Njk0NTEyN19hYzFkZTcwNTlhZGNmMmNiNzJlYWM5N2ZiYzE1NzlhZjM4YjdkNmZl'
    const [data,setData]=useState([])
    
    
 useEffect(()=>{
    axios.get(`https://www.scorebat.com/video-api/v3/feed/?token=${apiToken}`).then(res=>{
      console.log(res.data)
      setData(res.data.response)
    
    }).catch(err=>{console.log(err)})
   },[])
    
  return (
    
    <Grid className='content' container justifyContent ='center'>
        
        {data.length!==0?
        data.map((item)=>{
            return(
                <Grid className='items'  direction="row"
                  justifyContent="center"
                  alignItems="center"  xs={12} md={4}
                  container key={item.title}
                  padding='3rem 0px'
                  onClick={()=>window.open(item.matchviewUrl)} >
                      <Grid item spacing={{xs:1,md:3}}>
                        <img src={item.thumbnail}/>
    
                      <Typography 
                         maxWidth={'300px'} 
                        textAlign={'center'} 
                        style={{color:'blue'}}
                        variant={'h6'} >
                        {item.title}
                    </Typography>
    
                    </Grid>
                </Grid>
            )
        }):<Typography style={{marginTop:'2rem', fontSize:'2rem'}}>fetching data...</Typography>
        }


    </Grid>
   
  )
}

export default Content