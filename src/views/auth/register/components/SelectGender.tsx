import { ArrowBack } from "@mui/icons-material";
import { IStepProps } from "../interfaces/register.interfaces";
import FemaleIcon from '@mui/icons-material/Female';
import { Button, IconButton } from "@mui/material";
import MaleIcon from '@mui/icons-material/Male';

export const SelectGender = ({onBack, onNext}: IStepProps) => {
  return (
    <div className="space-y-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-900">¿Cuál es su género?</h1>

      {/* Opciones */}
      <div className="flex justify-between w-6/12">
        <IconButton size="large">
          <MaleIcon className="rounded-2xl text-blue-600"/>
        </IconButton>

        <IconButton size="large">
          <FemaleIcon className="rounded-2xl text-pink-600"/>
        </IconButton>
      </div>

      <div className="flex justify-between w-full">
        <button
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition cursor-pointer"
          onClick={onBack}
          >
          <ArrowBack fontSize="small" />
          Atrás
        </button>

        <Button variant="contained" size="large" onClick={onNext}>
          Continuar
        </Button>
      </div>
    </div>
  )
}


