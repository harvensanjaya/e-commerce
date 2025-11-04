import {useContext, createContext, useState} from 'react'

interface NavbarContextType {
  isLogin: boolean
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
  isShow: boolean
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>
}

const NavbarContext = createContext<NavbarContextType | null>(null)

export function NavbarProvider({children}: {children: React.ReactNode}) {
  const [isLogin, setIsLogin] = useState(true)
  const [isShow, setIsShow] = useState(false)

  return (
    <NavbarContext.Provider value={{isLogin, setIsLogin, isShow, setIsShow}}>
      {children}
    </NavbarContext.Provider>
  )
}

export function useNavbar() {
  const context = useContext(NavbarContext)

  if(!context){
    throw new Error("useNavbar must be used within a NavbarProvider")
  }

  return context
}