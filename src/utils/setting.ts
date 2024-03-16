import { a_note, af_note, b_note, bf_note, c_note, d_note, df_note, e_note, ef_note, f_note, g_note, gf_note } from "./music";

export interface NoteKeyMap {
    [note: string]: string;
}
  
  export interface KeyNoteMap {
    [key: string]: string;
  }
  
  const VALID_BLACK_KEYS: string[] = ['s', 'd', 'g', 'h', 'j'];
  const VALID_WHITE_KEYS: string[] = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
  const VALID_KEYS: string[] = [...VALID_BLACK_KEYS, ...VALID_WHITE_KEYS];
  const NOTES: string[] = [
    'c', 'df', 'd', 'ef',
    'e', 'f', 'gf', 'g',
    'af', 'a', 'bf', 'b'
  ];
  
  const NOTE_TO_KEY: NoteKeyMap = {
    c   : 'z',
    df  : 's',
    d   : 'x',
    ef  : 'd',
    e   : 'c',
    f   : 'v',
    gf  : 'g',
    g   : 'b',
    af  : 'h',
    a   : 'n',
    bf  : 'j',
    b   : 'm',
  };
  
  const KEY_TO_NOTE: KeyNoteMap = {
    z: 'c',
    s: 'df',
    x: 'd',
    d: 'ef',
    c: 'e',
    v: 'f',
    g: 'gf',
    b: 'g',
    h: 'af',
    n: 'a',
    j: 'bf',
    m: 'b',
  };
  
  export {
    NOTES,
    VALID_KEYS,
    NOTE_TO_KEY,
    KEY_TO_NOTE,
  };

 
export const noteToAudioMap: Record<string, string> = {
    a: a_note,
    af: af_note,
    b: b_note,
    bf: bf_note,
    c: c_note,
    d: d_note,
    df: df_note,
    e: e_note,
    ef: ef_note,
    f: f_note,
    g: g_note,
    gf: gf_note,
};

