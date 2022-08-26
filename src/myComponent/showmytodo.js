import React from 'react'
import Alltodos from '../myComponent/alltodos';

export default function showmytodo({todos,onDelete,mode}) {
    return (
        <div className="container" style={(mode==='Dark Mode')?({background:'rgb(0 187 255)',color:'black',paddingBottom:'5px'}):
        ({background:'rgb(0 136 197)',color:'white',paddingBottom:'5px'})}>
            <h3 style={{ paddingTop: '8px' }}>All Your Tasks:</h3>
            <h6 className="mb-2">you need to complete all your tasks !</h6>
            <h5>
            {todos.length===0?"No Task to display":
            todos.map((todo)=>{
                return <Alltodos todo={todo} key={todo.sno} onDelete={onDelete} mode={mode}/>
            })}</h5>
        </div>
    )
}

