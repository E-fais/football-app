import { SportsFootball } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { fontWeight } from '@mui/system'
import React from 'react'

function Navbar() {
  return (
    <div className='navbar'> 
       <Typography  variant='h4'  textAlign ='center' 
       style={{color:'white', fontWeight:'600'}}
       >
        Tez Football ⚽
        </Typography>
    </div>
  )
}

export default Navbar