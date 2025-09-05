import React, { useEffect, useState } from 'react'

function ToDo() {
    const [task,setTask] = useState("")
    const [list,setList] = useState([])

    const useEffect = () =>{(
        console.log("HI")        
    ),[task]};

    function addTask(e){
        e.preventDefault();
        const li = list
        console.log(li)
        li.push(task)
        setList(li)
    }

  return (
    <>
        <h1>TO DO LIST</h1>
        
        <p>{task}</p>
        <form action="" onSubmit={addTask}>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
            <button type="submit">Add task</button>
        </form>
        
    </>
  )
}

export default ToDo
