import React, { useState, useEffect } from 'react';
import { Key } from '../'; // Asegúrate de proporcionar la ruta correcta al componente Key
import { KEY_TO_NOTE, NOTES, VALID_KEYS, noteToAudioMap } from '../../utils/setting.js';
import { Box, SxProps } from '@mui/material';

export interface PianoStyle {
  mainContainer :  SxProps,
  main:  SxProps,
}

const pianoStyle: PianoStyle = {
  main:{
    display:'flex',
    justifyContent:'center',
    width:'100%',
    
    border:'1px solid blue'
  },
  mainContainer:{
    display:'flex',
    justifyContent:'center',
    width:'100%',
    border:'1px solid red'
  }

}

const Piano: React.FC<{}> = () => {
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);

  const playNote = (note: string) => {
    if (note) {
      console.log("hola nota")
      const noteAudio = new Audio(getNoteAudio(note));
      console.log(noteAudio)
      
      noteAudio.play();
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.repeat) {
      return;
    }

    const key = event.key;
    console.log(key);
    if (!pressedKeys.includes(key) && VALID_KEYS.includes(key)) {
      setPressedKeys(prevKeys => [...prevKeys, key]);
    }
    playNote(KEY_TO_NOTE[key]);
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    setPressedKeys(prevKeys => prevKeys.filter(k => k !== event.key));
  };

  const getNoteAudio = (note: string): string => {
    return noteToAudioMap[note];
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [pressedKeys]);

  

  return (
      <Box sx={pianoStyle.main}>
        <Box sx={pianoStyle.mainContainer} className="piano">
          {
            NOTES.map((note: string, index: number) => {
              console.log(index)
              return (
                
                  <Key
                    key={index}
                    note={note}
                    pressedKeys={pressedKeys}
                    playNote={playNote}
                  />
                
              )
            } 
            )
          }
        </Box>
      </Box>
  );
};

export default Piano;