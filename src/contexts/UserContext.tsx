import { createContext, ReactNode, useState } from "react"

type UserContextProps = {
  children: ReactNode
}

type UserContextType = {
  selectedId: number
  setSelectedId: (newState: number) => void
}

const initialValue = {
  selectedId: -1,
  setSelectedId: () => {},
}

export const UserContext = createContext<UserContextType>(initialValue);

export const UserProvider = ({ children }: UserContextProps) => {
  const [ selectedId, setSelectedId ] = useState(initialValue.selectedId)
  return(
    <UserContext.Provider value={{selectedId, setSelectedId}}>
      { children }
    </UserContext.Provider>
  )
}