import { createContext, ReactNode, useState } from "react"

type UserContextProps = {
  children: ReactNode
}

type UserContextType = {
  isOpenModal: boolean
  setIsOpenModal: (newState: boolean) => void
  selectedId: number
  setSelectedId: (newState: number) => void
}

const initialValue = {
  isOpenModal: false,
  setIsOpenModal: () => {},
  selectedId: -1,
  setSelectedId: () => {},
}

export const UserContext = createContext<UserContextType>(initialValue);

export const UserProvider = ({ children }: UserContextProps) => {
  const [ isOpenModal, setIsOpenModal ] = useState(initialValue.isOpenModal);
  const [ selectedId, setSelectedId ] = useState(initialValue.selectedId)
  return(
    <UserContext.Provider value={{isOpenModal, setIsOpenModal, selectedId, setSelectedId}}>
      { children }
    </UserContext.Provider>
  )
}