import { useEffect, useState, useRef } from "react";

interface StepperProps {
  steps: string[];
  currentStep: number;
}
const Stepper = ({ steps, currentStep }: StepperProps) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber: any, steps: any) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps?.length) {
      //current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }
      //setp completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }

      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
      return newSteps;
    }
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );
    stepRef.current = stepsState as any;

    const current: any = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);
  const displaySteps = newStep?.map((step: any, index: number) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center">
          <div
            className={`rounded-full bg-white text-black transition duration-500 ease-in-out
                    border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3 ${
                      step.selected
                        ? "bg-yellow font-bold border border-yellow"
                        : ""
                    }`}
          >
            {step.completed ? (
              <span className="font-bold text-xl">&#10003;</span>
            ) : (
              index + 1
            )}
          </div>
          {/* <div
            className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ${
              step.highlighted ? 'text-gray-900' : 'text-gray-400'
            }`}
          >
            {step.description}
          </div> */}
        </div>
        <div
          className={`flex-auto border-t-2 transition bg-yellow duration-500 ease-in-out${
            step.completed ? "border-yellow-600" : "border-gray-300"
          }`}
        ></div>
      </div>
    );
  });
  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      {displaySteps}
    </div>
  );
};

export default Stepper;
