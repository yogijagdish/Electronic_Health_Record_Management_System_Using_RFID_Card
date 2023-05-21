import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

 const Information1 =()=> {
  return (
    <div className='Information'>
      <div className="Information1"><br /> <br />

      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> <p className='text-lg font-semibold text-cyan-300'>Dr.Akash Sunar will not be available from 4th jestha to 9th jestha.</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Dear nawaraj <br />
          This is to notify you that doctor akash sunar, ENT specialist of out hospital
          has gone out of town due to some personal work. <br />
          He will  be away for the next 3-4 days.
          As per his communication,he will inform us about his arrival after he 
          returns to town. <br />
          We request to all of you to cooperate us. Thank you.
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
export default Information1;
