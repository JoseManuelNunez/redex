export enum Steps {
  step1 = "step1",
  step2 = "step2",
  step3 = "step3",
  step4 = "step4",
  step5 = "step5",
}

export interface IRegisterFlow {
  step: Steps,
  prev: Steps | null,
  next: Steps | null,
  complete: boolean
}

export interface IStepProps {
  onNext?: () => void;
  onBack?: () => void;
}