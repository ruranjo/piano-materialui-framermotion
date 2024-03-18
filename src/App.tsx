import { Box, Button, SxProps } from '@mui/material';
import React, { useState } from 'react'
import Bubble, { BubbleType } from './components/Bubble/Bubble';
import { Piano } from './components';
import { emojis } from './utils/emojis';



export interface styledApp {
    containerStyle: SxProps;
}
  
  const appStyle: styledApp = {
    containerStyle:{
      border:'1px solid red', 
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
        flexDirection:'column',
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
   const [bubbles, setBubbles] = useState<BubbleType[]>([]);


   const getRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  }

   const generateBubbles = () => {
    const newBubbles = [...bubbles];
    console.log(bubbles)
    newBubbles.push({
      id: bubbles.length + 1,
      x: Math.random() * window.innerWidth, // Posición aleatoria en el ancho de la ventana
      y: window.innerHeight, // Posición aleatoria en la altura de la ventana
      size: Math.random() * 50 + 20, // Tamaño aleatorio entre 20 y 70
      speed: Math.random() * 5 + 10, // Velocidad aleatoria entre 5 y 10
      emojiImg: getRandomEmoji(),
    });

    setBubbles(newBubbles);
    //setBubbles(prevBubbles => [...prevBubbles, newBubbles] );
  };

  return (
    <Box sx={appStyle.containerStyle}>
       
       <Bubble bubbles={bubbles} setBubbles={setBubbles}/> 
       <Piano action={generateBubbles}/>
            
    </Box>
  )
}

export default Content