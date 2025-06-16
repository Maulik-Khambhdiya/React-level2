import React, { useMemo, useState } from 'react'

const UseMemo = () => {

    const [count, setCount] = useState(0)

    const data = useMemo(() => {
        return count * 2
    }, [count])

    return (
        <div>
            <h1>{data}</h1>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>click me</button>
        </div>
    )
}

export default UseMemo
