import React from 'react';

interface StepperControlProps {
  handleClick: any;
  currentStep: any;
  steps: any;
}
const StepperControl = ({ handleClick, currentStep, steps }: StepperControlProps) => {
  return (
    <div className={`"container flex justify-center gap-3 mb-8" ${currentStep === 4 ? 'ml-[-890px]' : ''}`}>
      <button
        onClick={() => handleClick('next')}
        className="bg-yellow py-3 px-12 rouned-full text-black
            font-semibold border-2 hover:bg-slate-700 transition duration-200 ease-in-out"
      >
        {currentStep === steps.length - 1 ? 'Confirm' : 'Next'}
      </button>
      <button
        onClick={() => handleClick()}
        className={`py-3 px-12 rouned-full bg-transparent text-white
            font-semibold border-2 hover:bg-slate-700 transition duration-200 ease-in-out ${
              currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
      >
        Back
      </button>
    </div>
  );
};

export default StepperControl;
