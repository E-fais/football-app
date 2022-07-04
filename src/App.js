import { Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'

import Content from './components/Content'
import Footer from './components/Footer'
import ResponsiveAppBar from './components/Navbar'
import Navbar from './components/Navbar'

function App() {
  
 
  return (
    <div>
        <ResponsiveAppBar/>
        <Content/>  
        <Footer/>
   </div>
  )
}

export default App