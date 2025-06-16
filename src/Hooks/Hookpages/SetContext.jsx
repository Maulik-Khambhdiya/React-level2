import React, { useContext } from 'react'
import { AddColor } from './UseContext'
import NewContext from './NewContext';

const SetContext = () => {
    const { SetColor } = useContext(AddColor)
    console.log(SetColor);
    return (
        <div>
            <h1 style={{ color: SetColor }}>page 2</h1>
            <NewContext />
        </div>
    )
}

export default SetContext
