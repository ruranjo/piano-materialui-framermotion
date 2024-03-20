import { SxProps, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { fontFamily } from "../../styles/varibales"

export interface SongStyle {
    mainContainer :  SxProps,
    text:  SxProps,
    songTextContainer:SxProps,
  }
  
  const songsStyle: SongStyle = {
    mainContainer:{
        zIndex:-200,
        width:'50%',
        height: '300px',
        backgroundColor: 'white',
        color: 'black',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        gap:3,
        padding:'1rem',
        borderRadius:'1rem',
        '@media screen and (max-width: 880px)': {
            width:'80%',
        },
  
    },
    text:{
        fontFamily: fontFamily,
        fontWeight:700,
        letterSpacing: '3px',
        '@media screen and (max-width: 880px)': {
            fontSize:'0.8rem !important',
        },
    },
    songTextContainer:{
        display: 'flex',
        gap:3,
        '@media screen and (max-width: 880px)': {
            flexDirection:'column'
        },
    }

  
  }


const datasongs = [

    {
        song: 'z x c v b b n n n n b b v v v v c c x z x c x z z',
        name:'little chicken'
    },
    {
        song: 'x n b v m b g b x n b v m b g b x n b v m b g b x',
        name:'child of mine'
    },
    {
        song: 'z z b b n n b v v c c x x z z z b b n n b v v c c x x z',
        name:'star sky'
    },
    
    
    
                ]

const Songs = () => {
  return (
    <Box sx={songsStyle.mainContainer}>
        <Typography variant="h4" sx={songsStyle.text}   >BY RURANJO PIANO</Typography>
        <Box>
        {
            datasongs.map((s,index)=> (
                <Box sx={songsStyle.songTextContainer} key={index}>
                    <Typography  variant="h5" sx={songsStyle.text}   >{s.name.toLocaleUpperCase()}</Typography>
                    <Typography sx={songsStyle.text}  >{s.song.toLocaleUpperCase()}</Typography>
                </Box>
            ))
        }
        </Box>
        
    </Box>
  )
}

export default Songs