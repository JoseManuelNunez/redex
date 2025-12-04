'use client'
import { Menu } from "@/src/constant"
import Image from "next/image"
import { ReactNode } from "react"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export const Header = ({children}: {children: ReactNode}) => {
  return (
    <div className="flex flex-col">
      <header className="fixed top-0 left-0 w-full h-[10vh] bg-white flex items-center justify-between px-6 z-50 ">

        <div className="w-6/12 md:w-3/12 flex items-center">
          <div className="w-3/12 md:w-2/12 ">
            <Image
              src="/assets/logos/logo-redex.webp"
              width={250}
              height={250}
              alt="logo de Redex"
              className="w-full h-auto"
            />
          </div>
        </div>

        <nav className="hidden md:flex w-6/12 justify-center gap-8">
          {Menu.map((item, index) => (
            <span
              key={index}
              className="font-semibold lg:text-lg hover:text-blue-500 transition duration-150 cursor-pointer"
            >
              {item.name}
            </span>
          ))}
        </nav>

        <div className="w-6/12 md:w-3/12 flex justify-end gap-4">
          <Button
            sx={{
              borderRadius: "20px",
              backgroundColor: "#F0F0F0",
              boxShadow: "none",
              paddingInline: "16px",
            }}
            href="/auth/login"
            variant="contained"
            startIcon={<PersonOutlineOutlinedIcon sx={{ color: "#000" }} />}
            className="hidden sm:flex"
          >
            <span className="font-medium text-black transition">Iniciar sesión</span>
          </Button>
          <div className="flex md:hidden">
            <Button
              sx={{
                borderRadius: "20px",
                backgroundColor: "#F0F0F0",
                boxShadow: "none",
              }}
              variant="contained"
              >
              <MenuIcon fontSize="medium" sx={{ color: "#000" }} />
            </Button>
          </div>
        </div>
      </header>

      <div className="w-full min-h-screen mt-[10vh]">
        {children}
      </div>
    </div>

  )
}
