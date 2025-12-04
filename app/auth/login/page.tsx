import { LoginComponent } from "@/src/views/auth/login/LoginComponent";
import { ViewTransition } from "react";

export default function Login() {
  return (
    <ViewTransition>
      <LoginComponent />
    </ViewTransition>
  )
}