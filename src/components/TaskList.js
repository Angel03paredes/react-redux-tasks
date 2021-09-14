import React from "react";
import TaskContext from "../context/TaskContext";
import { useContext } from 'react';
import {Link} from 'react-router-dom'

const TaskList = () => {
    const {tasks,deleteTask,doneTask} = useContext(TaskContext);

    return (
        <div className="p-5 flex justify-center"  >
           <div className="w-6/12">
           {tasks.map((task) => (
                <div key={task.id} className=" items-center flex justify-between text-white rounded shadow-lg bg-purple-900 m-3 py-3 px-4">
                    <p>{task.title}</p>
                    <p>{task.description}</p>
                    <div onClick={()=>{doneTask(task.id)}} className="py-3 px-4 bg-purple-500 hover:bg-purple-600 text-white rounded">{task.done ? ("undone"):("done")}</div>
                    <Link to={`/edit/${task.id}`} className="py-3 px-4 bg-gray-500 hover:bg-gray-600 text-white rounded">Edit</Link>
                    <div onClick={()=>{
                        deleteTask(task.id)
                    }} className="py-3 px-4 bg-red-500 hover:bg-red-600 text-white rounded">Delete</div>
                </div>
            ))}
           </div>
        </div>
    )
}

export default TaskList;