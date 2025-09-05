import React, { useEffect, useState } from 'react'

function ToDo() {
    const [task,setTask] = useState("")
    const [list,setList] = useState([])

    const useEffect =(() =>{
        setList(li);      
     },[list]);

    

    function addTask(e){
        e.preventDefault();
        const li = list
        console.log(li)
        li.push(task)
        setList(li)
        print()
    }

    function print(){
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            console.log(element);            
        }
    }

  return (
    <>
        <h1>TO DO LISTS</h1>
        <form action="" onSubmit={addTask}>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
            <button type="submit">Add task</button>
        </form>

        <div className="overflow-y-auto" style={{ maxHeight: "260px" }}>
        <table className="w-full text-left border border-gray-300">
          <thead>
            <tr className="bg-gray-100 sticky top-0">    
              <th className="py-2 px-4">Task</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((b) => (
              <tr key={b.id} className="border-t">
                
                <td className="py-2 px-4 flex gap-2">
                  <button
                    className="bg-blue-500 text-white px-1 py-1 rounded-md"
                    onClick={() => handleEdit(b)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-400 text-white px-1 py-1 rounded-md"
                    onClick={() => handleDelete(b.busId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {list.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
        
        
    </>
  )
}

export default ToDo
