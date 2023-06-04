import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import image5 from '../../../asset/image5.jpg'

const Section3 = () => {
  return (
      <>
          <Box sx={{ mt: '3rem', backgroundColor: '#f3f3f3',height:{lg:'25rem',md:'25rem',} }}>
              <Container>
                  <Grid container spacing={2}>
                      <Grid item lg={5} md={5} sm={12} xs={12}>
                          <Box sx={{height: {lg:'20rem',md:'20rem',sm:'15rem',xs:'15rem'}, width: '100%' }}>
                              <Box component='img' src={image5} sx={{height:'100%',width:'100%',borderRadius: '1.5rem'}}/>
                        </Box>
                      </Grid>        
                      <Grid item lg={7} md={7} sm={12} xs={12}>
                          <Stack spacing={2} textAlign='center' justifycontent='center'alignItems='center'>
                              <Typography variant='h5'>
                                  <strong>LAUNDRY</strong>
                              </Typography>
                              <Typography variant='body1'>
                              The laundry process at UClean begins by sorting the clothes. After sorting, similar clothes are washed together. The best detergent brands are used for washing clothes. The washing machine is then loaded by adjusting the right setting for your clothes. The freshwater rinse during the process helps in eliminating the dirt and stains from the clothes. We air-dry your clothes in anti-bacterial stainless-steel air-dryers that eliminate Direct UV rays from the sun which react with the colour pigments of your clothes and create bleaching effect. After the laundry cycle ends,High pressure vacuum steam iron is done for that perfect finishing . As per CDC and WHO, steam sterilization is best and safest way to sanitize your clothes.
                              </Typography>
                        </Stack>
                      </Grid>        
                  </Grid>
              </Container>
        </Box>
      </>
  )
}

export default Section3
