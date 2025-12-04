import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import Link from "next/link";
import { IStepProps } from "../interfaces/register.interfaces";

export const RegisterForm = ({ onNext }: IStepProps) => {
  return ( 
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8 flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-center">Crear una cuenta</h1>
        <p className="text-center text-black -mt-4">
          Accede a tus propiedades guardadas y gestiona tus consultas.
        </p>

        <div className="flex flex-col gap-4">
          <TextField
            fullWidth
            required
            autoFocus
            label="Nombre Completo"
            variant="outlined"
          />

          <TextField
            fullWidth
            required
            type="email"
            label="Correo Electrónico"
            variant="outlined"
          />

          <TextField
            fullWidth
            required
            label="Contraseña"
            type="password"
            variant="outlined"
          />

          <TextField
            fullWidth
            required
            label="Confirmar contraseña"
            type="password"
            variant="outlined"
          />

          <FormControlLabel
            control={<Checkbox />}
            label="Recordarme"
          />

          <Button
            variant="contained"
            fullWidth
            onClick={onNext}
            sx={{ paddingY: 1.5, borderRadius: '12px', textTransform: 'none' }}
          >
            Continuar
          </Button>
        </div>

        <div className="text-sm text-center ">
          <p>
            ¿Ya tienes una cuenta? <Link className="text-blue-600 hover:underline" href="/auth/login">Iniciar sesión</Link>
          </p>

        </div>


        <div className="flex items-center gap-3 ">
          <span className="flex-1 h-px bg-gray-300" />
          <span className="text-gray-500">o</span>
          <span className="flex-1 h-px bg-gray-300" />
        </div>

        <Button
          variant="outlined"
          fullWidth
          startIcon={<GoogleIcon/>}
          sx={{ paddingY: 1.5, borderRadius: '12px', textTransform: 'none' }}
        >
          Continuar con Google
        </Button>


        <p className="text-center text-sm text-black">
          Al completar este formulario, Acepto los
          <a className="text-blue-600 hover:underline ml-1" href="#">términos y condiciones</a>
        </p>
      </div>
  )
}
