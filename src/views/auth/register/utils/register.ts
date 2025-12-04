import { IRegisterFlow, Steps } from "../interfaces/register.interfaces";

export const registerFlowMap: Record<Steps, IRegisterFlow> = {
  [Steps.step1]: {
    step: Steps.step1,
    prev: null,
    next: Steps.step2,
    complete: false,
  },
  [Steps.step2]: {
    step: Steps.step2,
    prev: Steps.step1,
    next: Steps.step3,
    complete: false,
  },
  [Steps.step3]: {
    step: Steps.step3,
    prev: Steps.step2,
    next: Steps.step4,
    complete: false,
  },
  [Steps.step4]: {
    step: Steps.step4,
    prev: Steps.step3,
    next: Steps.step5,
    complete: false,
  },
  [Steps.step5]: {
    step: Steps.step5,
    prev: Steps.step4,
    next: null,
    complete: true, 
  },
};
