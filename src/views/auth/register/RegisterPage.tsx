"use client";

import { useRegisterFlow } from "./hooks/useRegisterFlow";
import { startTransition, ViewTransition } from "react";
import { Steps } from "./interfaces/register.interfaces";
import { RegisterForm } from "./components/RegisterForm";
import { SelectGender } from "./components/SelectGender";
import { IntroducePhone } from "./components/IntroducePhone";
import { ConfirmNumber } from "./components/ConfirmNumber";
import { CompleteRegister } from "./components/CompleteRegister";

export default function RegisterPage() {
  const { step, next, prev } = useRegisterFlow();

  const animateNext = () => startTransition(() => next());
  const animatePrev = () => startTransition(() => prev());

  return (
    <div className="min-h-screen flex items-start justify-center bg-white p-4">
      <ViewTransition>
        {step === Steps.step1 && <RegisterForm onNext={animateNext} />}
        {step === Steps.step2 && <SelectGender onBack={animatePrev} onNext={animateNext} />}
        {step === Steps.step3 && <IntroducePhone onBack={animatePrev} onNext={animateNext} />}
        {step === Steps.step4 && <ConfirmNumber onBack={animatePrev} onNext={animateNext} />}
        {step === Steps.step5 && <CompleteRegister />}
      </ViewTransition>
    </div>
  );
}
