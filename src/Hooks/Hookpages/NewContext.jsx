import React, { useContext } from 'react'
import { AddColor } from './UseContext'


const NewContext = () => {
   const {SetColor} = useContext(AddColor)
    console.log(SetColor);
  return (
    <div>
        <h1 style={{color:SetColor}}>page 3</h1>
    </div>
  )
}

export default NewContext
