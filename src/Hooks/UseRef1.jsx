import React, { useEffect, useRef, useState } from 'react'

const UseRef1 = () => {

    const [count, setCount] = useState(0)
    const data = useRef(0)

    useEffect(() => {
        data.current = count
    }, [count])

    return (
        <div>
            <h1>{data.current}</h1>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>click me</button>
        </div>
    )
}

export default UseRef1
