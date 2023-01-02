import React, { useState } from "react"

function Count() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div>
                <h1>count:{count}</h1>
                <button onClick={() => setCount(count + 1)}>update</button>
            </div>
        </>
    )
}

export default Count