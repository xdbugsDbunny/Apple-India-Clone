import { Box, Typography, styled } from '@mui/material'
import React from 'react'


const Wrapper = styled(Box)({
  background:'white',
  display:'flex',
  justifyContent:'center',
  '&>p':{
    fontSize: 14,
    padding:'12px 0',
    color:'#1d1d1f',
    '&>span':{
      color:'#2997ff',
      transition: 'color 0.3s',
      '&:hover': {
        textDecoration:'underline'
      },
    }
  },

})

const Info = () => {
  return (
    <Wrapper>
      <Typography>
        Save up to ₹8000.00 instantly on eligible products with HDFC Bank Credit Cards.* Plus No Cost EMI from most leading banks.* <span>Shop now &gt;</span>
      </Typography>
    </Wrapper>
  )
}

export default Info