import { useState } from "react";
import { registerFlowMap } from "../utils/register";
import { Steps } from "../interfaces/register.interfaces";

export function useRegisterFlow() {
  const [currentStep, setCurrentStep] = useState<Steps>(Steps.step1);

  const flow = registerFlowMap[currentStep];

  const next = () => {
    if (flow.next) {
      setCurrentStep(flow.next);
    }
  };

  const prev = () => {
    if (flow.prev) {
      setCurrentStep(flow.prev);
    }
  };

  const goTo = (step: Steps) => {
    setCurrentStep(step);
  };

  return {
    step: currentStep,
    flow,
    next,
    prev,
    goTo,
  };
}
