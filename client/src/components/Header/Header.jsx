import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Box, Typography } from '@mui/material';
import { appleLogo, navData } from '../../constants/constant';
import { Logo, MainBox, NavBar } from './HeaderCSS';

const Header = () => {
  return (
    <MainBox>
      <NavBar>
        <Logo src={appleLogo}/>
        {
          navData.map(item => (
            <Typography style={{ fontSize:12, fontWeight: 600}}>{item}</Typography>
          ))
        }
        <SearchIcon fontSize='small'/>
        <WorkOutlineIcon fontSize='small'/>
      </NavBar>
    </MainBox>
  )
}

export default Header