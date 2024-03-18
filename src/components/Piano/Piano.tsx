import React, { useState } from 'react';
import { Key } from '../'; // Asegúrate de proporcionar la ruta correcta al componente Key
import {  NOTES, noteToAudioMap } from '../../utils/setting.js';
import { Box, SxProps } from '@mui/material';

interface PianoStyle {
  mainContainer: SxProps;
  main: SxProps;
}

const pianoStyle: PianoStyle = {
  main: {
    zIndex: 0,
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    border: '1px solid blue'
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    border: '1px solid red'
  }
};

interface Props {
  action: () => void;
}

const Piano: React.FC<Props> = ({ action }) => {
  const [pressedKeys, _setPressedKeys] = useState<string[]>([]);

  const playNote = (note: string) => {
    if (note) {
      const noteAudio = new Audio(getNoteAudio(note));
      action();
      noteAudio.play();
    }
  };


  const getNoteAudio = (note: string): string => {
    return noteToAudioMap[note];
  };

 

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