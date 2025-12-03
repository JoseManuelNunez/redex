import { JSX } from "react"
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }:{ children: JSX.Element }) => {
  return (
    <AuthContext.Provider value={{
      hola: ""
    }}>
      {children}
    </AuthContext.Provider>
  )
}
