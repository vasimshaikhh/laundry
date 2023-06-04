import { Box } from '@mui/material';
import React from 'react'
import save from '../../../asset/save.jpg';

const Section3 = () => {
    return (
      <Box sx={{mt:'3rem'}}>
            <Box component={'img'} src={save} sx={{ height: '100%', width: '100%' }} />
     </Box>
  )
}

export default Section3;
