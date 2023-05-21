import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

 const Information2 =()=> {
  return (
    <div className='Information'>
      <div className="Information1"><br /> <br />

      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> <p className='text-lg font-semibold text-cyan-300'>Visiting request from a Patient.</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Dear Dr.Akash Sunar <br />
          This is to notify you that a patient hari poudel,whom you treated wants to meet you in 10 am of  9th jestha  <br />
          Hope you will make time for this  follow up Thank you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><p className='text-lg font-semibold text-cyan-300'> Your endoscopy report has been uploaded in your  report's list.</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  );
}
export default Information2;
