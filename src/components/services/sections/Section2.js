import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import styled from '@mui/material/styles/styled';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import IronIcon from '@mui/icons-material/Iron';
import CompressIcon from '@mui/icons-material/Compress';
import DoNotStepIcon from '@mui/icons-material/DoNotStep';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import BungalowIcon from '@mui/icons-material/Bungalow';
import ChairIcon from '@mui/icons-material/Chair';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';

const StyledGrid = styled(Grid)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'    
}))
const StyledBox = styled(Box)(() => ({
    height: '8rem',
    width: '8rem',
    '&:hover': { backgroundColor: '#7bbb43' },
    border: '5px solid #7bbb43',
    borderRadius:'5rem'
}))
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };

const Section2 = () => {
    
  return (
      <>
          <Container maxWidth='md' sx={{mt:'3rem'}}>
              <StyledGrid container spacing={3}>
                  <Grid item xs={12}>
                      <Typography variant='h5'><strong>OUR SERVICES</strong></Typography>
                 </Grid>
                  <Grid item xs={12}>
                  <Carousel showDots={true} responsive={responsive}>
                    <Stack justifyContent={'start'} alignItems='center' spacing={1} sx={{height:'12rem'}}>
                    <StyledBox>
                              <CheckroomIcon sx={{mb:'3rem',height:{lg:'6rem',md:'6rem',sm:'3',xs:'5rem'},width:{lg:'6rem',md:'6rem',sm:'3',xs:'5rem'},'&:hover':{color:'#fff'}}} />
                    </StyledBox>
                    <Typography variant='body1'> Dry Cleaning</Typography>          
                          </Stack>
                          
                          
                   
                    <Stack justifyContent={'start'} alignItems='center' spacing={1} sx={{height:'12rem'}}>
                    <StyledBox>
                              <IronIcon sx={{mb:'3rem',height:{lg:'6rem',md:'6rem',sm:'3',xs:'5rem'},width:{lg:'6rem',md:'6rem',sm:'3',xs:'5rem'},'&:hover':{color:'#fff'}}} />
                    </StyledBox>
                    <Typography variant='body1'> Premium Laundry</Typography>          
                     </Stack>
                    <Stack justifyContent={'start'} alignItems='center' spacing={1} sx={{height:'12rem'}}>
                    <StyledBox>
                              <CompressIcon sx={{mb:'3rem',height:{lg:'6rem',md:'6rem',sm:'3',xs:'5rem'},width:{lg:'6rem',md:'6rem',sm:'3',xs:'5rem'},'&:hover':{color:'#fff'}}} />
                    </StyledBox>
                    <Typography variant='body1'> Laundry</Typography>          
                     </Stack>
                    <Stack justifyContent={'start'} alignItems='center' spacing={1} sx={{height:'12rem'}}>
                    <StyledBox>
                              <IronIcon sx={{mb:'3rem',height:{lg:'6rem',md:'6rem',sm:'3',xs:'5rem'},width:{lg:'6rem',md:'6rem',sm:'3',xs:'5rem'},'&:hover':{color:'#fff'}}} />
                    </StyledBox>
                    <Typography variant='body1'>Steam Ironing</Typography>          
                     </Stack>
                    <Stack justifyContent={'start'} alignItems='center' spacing={1} sx={{height:'12rem'}}>
                    <StyledBox>
                              <DoNotStepIcon sx={{mb:'3rem',height:{lg:'6rem',md:'6rem',sm:'3',xs:'5rem'},width:{lg:'6rem',md:'6rem',sm:'3',xs:'5rem'},'&:hover':{color:'#fff'}}} />
                    </StyledBox>
                    <Typography variant='body1'>Shoe Cleaning</Typography>          
                     </Stack>
                    <Stack justifyContent={'start'} alignItems='center' spacing={1} sx={{height:'12rem'}}>
                    <StyledBox>
                              <BusinessCenterIcon sx={{mb:'3rem',height:{lg:'6rem',md:'6rem',sm:'3',xs:'5rem'},width:{lg:'6rem',md:'6rem',sm:'3',xs:'5rem'},'&:hover':{color:'#fff'}}} />
                    </StyledBox>
                    <Typography variant='body1'> Bag Cleaning</Typography>          
                     </Stack>
                    <Stack justifyContent={'start'} alignItems='center' spacing={1} sx={{height:'12rem'}}>
                    <StyledBox>
                              <BungalowIcon sx={{mb:'3rem',height:{lg:'6rem',md:'6rem',sm:'3',xs:'5rem'},width:{lg:'6rem',md:'6rem',sm:'3',xs:'5rem'},'&:hover':{color:'#fff'}}} />
                    </StyledBox>
                    <Typography variant='body1'> Home Cleaning</Typography>          
                     </Stack>
                    <Stack justifyContent={'start'} alignItems='center' spacing={1} sx={{height:'12rem'}}>
                    <StyledBox>
                              <ChairIcon sx={{mb:'3rem',height:{lg:'6rem',md:'6rem',sm:'3',xs:'5rem'},width:{lg:'6rem',md:'6rem',sm:'3',xs:'5rem'},'&:hover':{color:'#fff'}}} />
                    </StyledBox>
                    <Typography variant='body1'> sofa Cleaning</Typography>          
                     </Stack>
                    <Stack justifyContent={'start'} alignItems='center' spacing={1} sx={{height:'12rem'}}>
                    <StyledBox>
                              <DirectionsCarFilledIcon sx={{mb:'3rem',height:{lg:'6rem',md:'6rem',sm:'3',xs:'5rem'},width:{lg:'6rem',md:'6rem',sm:'3',xs:'5rem'},'&:hover':{color:'#fff'}}} />
                    </StyledBox>
                    <Typography variant='body1'> Car Cleaning</Typography>          
                     </Stack>
                  
                          

                   
                 </Carousel>
                 </Grid>
              </StyledGrid>
          </Container>
      </>
  )
}

export default Section2
