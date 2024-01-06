import { Box, styled } from "@mui/material";

export const MainBox = styled(Box)({
    backgroundColor:'#f5f5f7',
    height:44
})

export const NavBar = styled(Box)({
    display:'flex',
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    margin:'0 auto',
    '& > *': {
        color:'rgba(0,0,0.8)',
        fontWeight:600,
        padding:'0 21px',
        fontSize:'12px',
        opacity:'0.8'
    }
})

export const Logo = styled('img')({
    width:20
})