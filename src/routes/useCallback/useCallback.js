import { useState, useCallback } from 'react'
import Content from './Content'

function Counter_Callback() {
    const[count, setCount] = useState(0)

    //Render everytime 
    // const handleIncrease = () => {
    //   setCount(c => c + 1)
    // }


    //Only render 1 times when use useCallback
    const handleIncrease = useCallback(() => {
        setCount(c => c + 1)
    }, [])


  return (
    <div style={{ padding: '10px 32px' }}>
        <Content onIncrease={handleIncrease} />
        <h1>{count}</h1>
    </div>
  )
}

export default Counter_Callback