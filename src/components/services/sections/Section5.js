import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';

export default function SimpleAccordion() {
  return (
      <Container  maxWidth='md' style={{ marginTop: '3rem', display: 'block', justifyContent:'center',alignItems:'center',textAlign:'center' }}>
          <Typography><strong> FREQUENTLY ASK QUESTIONS</strong></Typography>
      <Accordion sx={{mt:'3rem'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  sx={{color:'#74b944'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How much time will it take to wash my clothes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color:'#74b944'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  sx={{color:'#74b944'}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What if i need my Clothes Urgently Washed</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color:'#74b944'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  sx={{color:'#74b944'}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do you use Fresh Water for Laundry</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color:'#74b944'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  sx={{color:'#74b944'}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do You harsh detergents?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color:'#74b944'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  sx={{color:'#74b944'}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do you do Stain Removal in laundry by kg?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color:'#74b944'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  sx={{color:'#74b944'}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do you take Guarantee of colour bleeding</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color:'#74b944'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
     
    </Container>
  );
}
