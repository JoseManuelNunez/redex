import RegisterPage from "@/src/views/auth/register/RegisterPage";
import { ViewTransition } from "react";

export default function Register() {
  return (
    <ViewTransition>
      <RegisterPage />
    </ViewTransition>
    
  )
}