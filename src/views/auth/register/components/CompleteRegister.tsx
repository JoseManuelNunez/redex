
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


export const CompleteRegister = () => {
  return (
    <div className="w-full  flex flex-col items-center justify-center text-center">
      <CheckCircleIcon
        className="text-green-400 animate-spin-fade"
        style={{ fontSize: 120 }}
      />

      <h1 className="text-2xl font-bold mt-6">¡Registro Exitoso!</h1>
      <p className="text-gray-600 mt-2">
        Has completado el registro de tu cuenta
      </p>
    </div>
  )
}
