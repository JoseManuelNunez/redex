import { createContext } from "react";

interface IAuthContext {
  hola: string
}

export const AuthContext = createContext({} as IAuthContext)
