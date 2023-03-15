import Stepper from '@/components/Stepper';
import StepperControl from '@/components/StepperControl';
import { useEffect, useState } from 'react';
import SellPrompt from '@/components/steps/SellPrompt';
import Account from '@/components/steps/Account';
import Final from '@/components/steps/Final';
import GetPaid from '@/components/steps/GetPaid';
import PromptFile from '@/components/steps/PromptFile';
import PromptDetail from '@/components/steps/PromptDetail';
import { StepperContext } from '@/contexts/StepperContext';
import StepAction from '@/components/StepAction';
import { NextPageWithAuth } from '@/helpers/interface';
import UserService from '@/supabase/User';

const Sell: NextPageWithAuth = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);
  const [direction, setDirection] = useState('next');
  const steps = ['Sell a Prompt', 'Create An Account', 'Prompt Details', 'Prompt File', 'Get Paid', 'Thank you'];

  const displayStep = (step: number) => {
    switch (step) {
      case 1:
        return <SellPrompt handleClick={handleClick} />;
      case 2:
        return <Account onSuccess={() => setCurrentStep(3)} />;
      case 3:
        return <PromptDetail />;
      case 4:
        return <PromptFile />;
      case 5:
        return <GetPaid />;
      case 6:
        return <Final handleClick={handleClick} />;
    }
  };

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await UserService.get_session();

      if (session !== null && currentStep === 2) {
        setCurrentStep(direction === 'next' ? 3 : 1);
      }
    };

    if (currentStep === 2) {
      getSession();
    }
  }, [currentStep]);

  const handleClick = (direction: string) => {
    let newStep = currentStep;
    setDirection(direction);
    direction === 'next' ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <div className="grow flex flex-col justify-center items-center py-14 px-20">
      {/* <Stepper steps={steps} currentStep={currentStep} /> */}
      <StepAction className="w-2/3" current={currentStep} total={steps.length} />
      <div className="my-10 p-10">
        <StepperContext.Provider
          value={
            {
              userData,
              setUserData,
              finalData,
              setFinalData,
            } as any
          }
        >
          {displayStep(currentStep)}
        </StepperContext.Provider>
      </div>
      {currentStep !== steps.length && currentStep !== 1 && currentStep !== 2 && (
        <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
      )}
    </div>
  );
};

export default Sell;

// Sell.auth = true;
