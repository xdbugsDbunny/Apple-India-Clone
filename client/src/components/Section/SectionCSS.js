import { Box, Typography, styled } from "@mui/material";

export const MainWrapper = styled(Box)({
    height:'580px',
    width:'100%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    paddingTop: '2vw',
    objectFit:'cover',
    backgroundRepeat: 'no-repeat'
})

export const Heading = styled(Typography)({
    fontWeight: 600,
    fontSize: '2.5vw',
})

export const SubHeading = styled(Typography)({
    fontWeight: 500,
    fontSize: '1.5vw',
})

export const LearnMoreAndBuy = styled(Typography)({
    display:'flex',
    gap:'1vw',
    '& > span': {
        color: '#2997ff',
        transition: 'color 0.3s', // Add transition for a smooth effect
        '&:hover': {
            textDecoration:'underline'
        },
    },
})