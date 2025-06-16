import React, { useCallback, useState } from 'react';

const UseCall = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default UseCall;
