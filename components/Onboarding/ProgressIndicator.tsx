import React from "react";

const ProgressIndicator: React.FC<{
  currentStep: number;
  totalSteps: number;
}> = ({ currentStep, totalSteps }) => {
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="mb-8">
      {/* <p className="text-sm font-medium text-gray-900">
        Step {currentStep + 1} of {steps.length}: {steps[currentStep].name}
      </p> */}
      <div aria-hidden="true" className="mt-4">
        <div className="w-full p-1 overflow-hidden rounded-full border border-gray-800">
          <div
            style={{
              width: `${progressPercentage}%`,
              transition: "width 1.5s ease-in-out",
            }}
            className="h-4 rounded-full bg-[#0055FF] shadow-[0_10px_40px_-10px_#0055FF]"
          />
        </div>

        {/* <div className="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid">
          {steps.map((step, index) => (
            <div
              key={step.name}
              className={`${
                index === 0
                  ? ""
                  : index === steps.length - 1
                  ? "text-right"
                  : "text-center"
              } ${index <= currentStep ? "text-primary" : ""}`}
            >
              {step.name}
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ProgressIndicator;
