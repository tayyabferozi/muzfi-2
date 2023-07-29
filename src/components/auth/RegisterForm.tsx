import React from 'react'
import SignupA from './SignupA';
import SignupB from './SignupB';
import { inputAssetsA } from './inputs';

const RegisterForm = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
  return (
    <div>
      <SignupA inputAssets={inputAssetsA} title="SignUp" />
      {/* <SignupB />
      <SignupB /> */}
    </div>
  );
}

export default RegisterForm