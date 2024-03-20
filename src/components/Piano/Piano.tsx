import React, { useEffect, useState } from 'react';
import { Key } from '../'; // Asegúrate de proporcionar la ruta correcta al componente Key
import {  KEY_TO_NOTE, NOTES, VALID_KEYS, noteToAudioMap } from '../../utils/setting.js';
import { Box, SxProps } from '@mui/material';

interface PianoStyle {
  mainContainer: SxProps;
  main: SxProps;
}

const pianoStyle: PianoStyle = {
  main: {
    zIndex: 0,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    //border: '1px solid blue'
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    
    //border: '1px solid red',
    '@media screen and (max-width: 440px)': {
      
    },
  }
};

interface Props {
  action: () => void;
}

const Piano: React.FC<Props> = ({ action }) => {
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);

  const playNote = (note: string, isAction = true) => {
    if (note) {
      const noteAudio = new Audio(getNoteAudio(note));
      if(isAction){
        action();
      }
      noteAudio.play();
    }
  };


  const getNoteAudio = (note: string): string => {
    return noteToAudioMap[note];
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (VALID_KEYS.includes(key)) {
        setPressedKeys(prevKeys => [...prevKeys, key]);
        playNote(KEY_TO_NOTE[key], false);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      
      if (VALID_KEYS.includes(key)) {
        setPressedKeys(prevKeys => prevKeys.filter(k => k !== key));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [playNote]);
 

  return (
    <Box sx={pianoStyle.main}>
      <Box sx={pianoStyle.mainContainer} className="piano">
        {NOTES.map((note: string, index: number) => (
          <Key key={index} note={note} pressedKeys={pressedKeys} playNote={playNote} />
        ))}
      </Box>
    </Box>
  );
};

export default Piano;