
import React from 'react'

function Task(props) {
  return (
    <div className="task">
      <h1>{props.taskName}</h1>
<button onClick={()=>props.deleteTask(props.id)}>X</button>
    </div>
  )
}

export default Task
