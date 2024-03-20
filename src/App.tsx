import { Box,  SxProps } from '@mui/material';
import React, { useState } from 'react'
import Bubble, { BubbleType } from './components/Bubble/Bubble';
import { Piano, Songs } from './components';
import { emojis } from './utils/emojis';



export interface styledApp {
    containerStyle: SxProps;
    book: SxProps;
}
 ///Rubens 
  const appStyle: styledApp = {
    containerStyle:{
      //border:'1px solid red', 
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        gap:3,
        flexDirection:'column',
        width:'100%',
        height:'100vh',
        margin:'0px',
        padding:'0px',
        '@media screen and (max-width: 440px)': {
           
        },
    },
    book:{
        //border:'1px solid green',
        width:'100%',
        height:'49%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:3,
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
    setBubbles(prevBubbles => {
        const newBubble = {
            id: prevBubbles.length + 1,
            x: Math.random() * window.innerWidth,
            y: window.innerHeight,
            size: Math.random() * 49 + 20,
            speed: Math.random() * 5 + 10,
            emojiImg: getRandomEmoji(),
        };
        return [...prevBubbles, newBubble];
    });
};

  return (
    <Box sx={appStyle.containerStyle}>
       
       <Bubble bubbles={bubbles} setBubbles={setBubbles}/> 
        <Box  sx={appStyle.book}>
          <Songs/>
        </Box>
       <Piano action={generateBubbles}/>
            
    </Box>
  )
}

export default Content