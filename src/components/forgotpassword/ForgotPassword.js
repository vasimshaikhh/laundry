import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import water from '../../asset/water.jpg'
import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import styled from '@mui/material/styles/styled'

const StyledButton = styled(Button)(() => ({
  width:'50%',backgroundColor:'#033d29','&:hover':{backgroundColor:'#033d00'}
}))


const ForgotPassword = () => {
  return (
    <Container maxWidth='xs' sx={{ mt: '6rem',background:`src(${water})` }}>
      
      <Stack sx={{ border: '1px solid black', borderRadius: '1rem', height: '16rem' }}>
        <Container>
          <Stack spacing={2} justifyContent='center' alignItems={'center'}>
          <Typography sx={{textAlign:'center',mt:'1rem'}}>Forgot Password</Typography>
          <TextField variant='outlined' label='New Password' sx={{width:'100%'}} />
            <TextField variant='outlined' label='Re-Enter New Password' sx={{ width: '100%' }} />
            <StyledButton sx={{}}  variant='contained'>Reset</StyledButton>
            </Stack>
          </Container>
      </Stack>
    </Container>

  )
}

export default ForgotPassword
