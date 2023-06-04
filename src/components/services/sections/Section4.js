import { Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';

const Section4 = () => {
  return (
      <Container maxWidth='md' sx={{mt:'3rem',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Grid container spacing={{lg:20,md:20,xs:10}}> 
              <Grid item lg={3} md={3} sm={6} xs={6}>
              
              <Stack spacing={1.5}>
                  <PriceCheckIcon sx={{ height: '6rem', width: '6rem',color:'green' }} />
                  <Typography sx={{textAlign:'center'}} variant='body1'>Affordable rates</Typography>
                  </Stack>
                  </Grid>
              <Grid item lg={3} md={3} sm={6} xs={6}>
              
              <Stack spacing={1.5}>
                  <ThumbUpIcon sx={{ height: '6rem', width: '6rem',color:'green' }} />
                  <Typography sx={{textAlign:'center'}} variant='body1'>Skin Friendly</Typography>
                  </Stack>
                  </Grid>
              <Grid item lg={3} md={3} sm={6} xs={6}>
              
              <Stack spacing={1.5}>
                  <WbSunnyIcon sx={{ height: '6rem', width: '6rem',color:'green' }} />
                  <Typography sx={{textAlign:'center'}} variant='body1'>UV Safe Air Drying</Typography>
                  </Stack>
                  </Grid>
              <Grid item lg={3} md={3} sm={6} xs={6}>
              
              <Stack spacing={1.5}>
                  <LocalDrinkIcon sx={{ height: '6rem', width: '6rem',color:'green' }} />
                  <Typography sx={{textAlign:'center'}} variant='body1'>Uses less & Fresh Water</Typography>
                  </Stack>
              </Grid>
              
          </Grid>
    </Container>
  )
}

export default Section4
