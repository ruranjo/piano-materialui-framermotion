import { Box, SxProps } from '@mui/material';
import React from 'react'
import { Piano } from './components';


export interface styledApp {
    containerStyle: SxProps;
}
  
  const appStyle: styledApp = {
    containerStyle:{
      border:'1px solid red', 
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100vh',
        margin:'0px',
        padding:'0px',
        '@media screen and (max-width: 440px)': {
            height:'auto',
        },
    }
  }

  export interface Props {
  
  }


const Content:React.FC<Props> = () => {
   
    
  return (
    <Box sx={appStyle.containerStyle}>
       <Piano/>
    </Box>
  )
}

export default Content