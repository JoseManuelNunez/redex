import { IStepProps } from "../interfaces/register.interfaces";
import { ArrowBack } from "@mui/icons-material";

export const IntroducePhone = ({ onBack, onNext }: IStepProps) => {
  return (
   <div className="w-full min-h-screen flex justify-center items-start pt-14 bg-white">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-black">
          Introduce tu numero de teléfono
        </h1>

        <p className="text-gray-500 mt-1 text-sm">
          Te enviaremos un código de seguridad de seis dígitos por SMS
        </p>

        <div className="flex items-center justify-center mt-6 space-x-3">

          <button
            className="px-4 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm text-sm"
          >
            +1
          </button>

          <input
            type="text"
            placeholder="(829) 123-4567"
            className="w-60 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-gray-400 text-sm placeholder-gray-400"
          />

          <button
            onClick={onNext}
            className="px-5 py-2 bg-gray-100 text-black border border-gray-300 rounded-md shadow-sm text-sm"
          >
            Enviar
          </button>

        </div>
        <button
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition mt-10 cursor-pointer"
          onClick={onBack}
          >
          <ArrowBack fontSize="small" />
          Atrás
        </button>
      </div>
    </div>
  )
}
