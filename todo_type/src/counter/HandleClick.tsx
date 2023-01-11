import React from 'react'

interface Props{
    handleIncrease: ()=> void
    handleDecrease: ()=> void
}

const HandleClick:React.FC<Props> = (props) => {
    const { handleIncrease, handleDecrease } = props
  return (
    <div>
        <button onClick={handleIncrease} >Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default HandleClick