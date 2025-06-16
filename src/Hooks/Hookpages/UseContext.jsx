import React, { createContext, useState } from 'react'
import SetContext from './SetContext'

export const AddColor = createContext();
const UseContext = () => {

  const [color , setColor] = useState("green")
  return (
    <AddColor.Provider value={{SetColor : color}}>
    <div>
        <h1 style={{color:color}}>page 1</h1>
        <SetContext />
    </div>
    </AddColor.Provider>
  )
}

export default UseContext
