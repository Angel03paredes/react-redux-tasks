import React,{useState,useEffect} from "react";
import { useContext } from "react/cjs/react.development";
import TaskContext from "../context/TaskContext";
import {useHistory , useParams} from "react-router-dom"


const TaskForm = () => {

    const history = useHistory();
    const params = useParams();

    const {addTask,editTask,tasks} = useContext(TaskContext)

   

    const [task,setTask] = useState({
        id:"",
        title:"",
        description:""
    })

    const handlerTask = (e)=>{
        setTask({...task,[e.target.name]: e.target.value})
    }

    const taskSubmit =(e)=>{
        e.preventDefault()
        console.log(task.id)
        if(!task.id){
            addTask(task)
        }else{
            editTask(task);
        }
        history.push("/")
    }

    useEffect(() => {
       const taskFound = tasks.find((task)=> task.id === params.id)
       
        if(taskFound){
            setTask({id:taskFound.id,title:taskFound.title,description:taskFound.description})
        }
       
    }, [params.id,tasks])

    return (
       <div className="flex py-5  items-center justify-center">
            
            <form className=" bg-purple-900 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={taskSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input value={task.title} onChange={handlerTask} className=" bg-gray-700 shadow appearance-none  rounded w-full py-2 px-3 text-gray-100 leading-tight outline-none focus:outline-none focus:shadow-outline" id="title" type="text" name="title" placeholder="Title..." />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea value={task.description} onChange={handlerTask} className="shadow appearance-none bg-gray-700 rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline" id="description" name="description" rows="5" placeholder="Description..." />
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                       {task.id? ("Update"):("Add")}
                    </button>
                    
                </div>
            </form>

        
       </div>
    )
}

export default TaskForm;