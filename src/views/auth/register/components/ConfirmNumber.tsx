"use client";

import { useState, useRef, KeyboardEvent } from "react";
import { IStepProps } from "../interfaces/register.interfaces";

export const ConfirmNumber = ({ onBack, onNext }: IStepProps) => {
    const [code, setCode] = useState(Array(6).fill(""));
  const inputs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        inputs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };
  return (
        <div className="w-full min-h-screen flex justify-center items-start pt-14 bg-white">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-black">
          Hemos enviado un SMS
        </h1>

        <p className="text-gray-500 mt-1 text-sm">
          Introduce el código de seguridad de seis dígitos que enviamos a{" "}
          <span className="text-black font-semibold">(829) 123-4567</span>
        </p>

        <button className="text-blue-600 text-sm mt-2 hover:underline" onClick={onNext}>
          Editar numero.
        </button>

        {/* Códigos */}
        <div className="flex justify-center mt-6 space-x-3">
          {code.map((digit, i) => (
            <input
              key={i}
              maxLength={1}
              ref={(el) => {
                inputs.current[i] = el;
              }}
              value={digit}
              onChange={(e) => handleChange(e.target.value, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className="w-12 h-12 text-center text-lg border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        {/* Botón */}
        <button className="mt-6 px-8 py-2 bg-blue-600 text-white rounded-md shadow text-sm" onClick={onNext}>
          Siguiente
        </button>

        <p className="text-gray-600 text-sm mt-3">
          ¿Aún no recibes el código?{" "}
          <button className="text-blue-600 hover:underline">
            Enviar de nuevo
          </button>
        </p>
      </div>
    </div>
  )
}
