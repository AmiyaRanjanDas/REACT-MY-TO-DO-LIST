import React from 'react'

export default function alltodos({todo,onDelete,mode}) {
  return (
    <div style={(mode==='Dark Mode')?({background:'rgb(0 64 255)',padding:'10px',marginBottom:'8px'}):
    ({background:'rgb(0 32 126)',padding:'10px',marginBottom:'8px'})}>
        <h5>{todo.title}</h5>
        <h6>{todo.desc}</h6>
        <button className='btn btn-dark btn-sm' onClick={()=>onDelete(todo)}>Delete</button>
    </div>
  )
}
