import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StepsPropsNew } from '../../types';

export default function StepsNew(props: StepsPropsNew) {
  const { steps, currentStep } = props;

  return (
    <Box sx={{ width: 'max' }}>
      <Stepper activeStep={currentStep}>
        {steps.map((step) => (
          <Step key={step.number}>
            <StepLabel>{}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
