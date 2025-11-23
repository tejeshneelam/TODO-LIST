import React, { Children } from 'react'

export default function Todocard(props) {
    const { children,handleDeleteTodos,index,handleEditTodos} = props
    return (
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <button onClick={()=>{handleEditTodos(index)}}><i className="fa-regular fa-pen-to-square"></i></button>
                <button onClick={()=>{handleDeleteTodos(index)}}> <i className="fa-solid fa-trash-arrow-up"></i></button>
                
            </div>
        </li>

    )
}
