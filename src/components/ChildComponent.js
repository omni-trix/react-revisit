import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick = {()=>props.greetHandler("child")}>{props.greet} Parent</button>
    </div>
  )
}

export default ChildComponent