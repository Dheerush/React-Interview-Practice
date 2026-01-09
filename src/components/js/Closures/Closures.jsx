import React, { useState } from 'react'

const Closures = () => {
    const [count, setCount] = useState(0);

    const handleIncrementClick = () => {
        setCount(count + 1)
    }
    const handledecrementClick = () => {
        setCount(count - 1)
    }
    return (
        <div className='border-2 p-2 border-blue-500'>
            <h2 className='text-center'>Learning Closure in React</h2>
            <div className="border-2 p-4 flex items-center gap-2 w-3/12 mx-auto justify-center ">
                <button onClick={handledecrementClick} className='bg-red-400 p-2 rounded-xl text-2xl font-bold'>-</button>
                <p className='p-2 border'>Count {count}   </p>
                <button onClick={handleIncrementClick} className='bg-green-400 p-2 rounded-xl text-2xl font-bold'>+</button>
            </div>

        </div>
    )
}

export default Closures;



/** NOTES: Closures
 *  - The React component function itself is the “outer function”.
 *  - Every function defined inside it (event handlers, callbacks, effects) is an inner function.
 *  - Any variable declared in the component body is part of the lexical scope and can be captured by closures. 
 */