import React from 'react';

import { NOTE_TO_KEY } from '../../utils/setting';
import {  Button, SxProps } from '@mui/material';


//

export interface Props {
  note: string
  pressedKeys: string[]
  playNote: (note: string, isAction?:boolean) => void
}

export interface KeyStyle {
  mainButton :  SxProps,
  secondaryButton :  SxProps,
}

const keyStyle: KeyStyle = {
  mainButton:{
    //border: '1px solid black',
    width: '80px',
    
    height: '300px',
    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: 'gray',
      border: 'orangered'
    },
    '@media screen and (max-width: 880px)': {
      height: '220px',
      maxWidth:'50px'
    },

  },
  secondaryButton:{
    position: 'relative',
    
    marginLeft: '-50px',
    marginRight: '-17px',
    height: '200px',
    zIndex: '2',
    border:'1px solid white',
    
    backgroundColor:'black',
    color:'white',
    '&:hover':{
      backgroundColor:'gray',
      border:'orangered'
    },
    '@media screen and (max-width: 880px)': {
      height: '150px',
      
      minWidth:'40px'
      
    },
  }

}
const Key:React.FC<Props> = ({ note, pressedKeys, playNote }) => {
  const noteIsFlat = note.length > 1;
  const keyIsPressed = pressedKeys.includes(NOTE_TO_KEY[note]);

  let keyClassName = "key";
  if (noteIsFlat) {
    keyClassName += " flat";
  }
  if (keyIsPressed) {
    keyClassName += " pressed";
  }

  return (
    <>  
      {noteIsFlat ? 
      <Button  sx={keyStyle.secondaryButton} className="key-text" variant='contained' onClick={()=> playNote(note)}>{NOTE_TO_KEY[note].toUpperCase()}</Button>
       : 
      <Button  sx={keyStyle.mainButton} className="key-text" variant='contained' onClick={()=> playNote(note)}> {NOTE_TO_KEY[note].toUpperCase()}</Button>
      }
    </>
    
  );
};

/*
<Button onClick={() => console.log('Botón presionado')}>
        Botón
      </Button>
*/

export default Key;