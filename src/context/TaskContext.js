import {createContext,useReducer} from 'react';
import TaskReducer from './TasksReducer';
import { v4 as uuidv4 } from 'uuid';


const initialTasks = { tasks : [{
    id:1,
    title:"title 1",
    description:"description1",
    done:false
},
{
    id:2,
    title:"title 2",
    description:"description 2",
    done:false
}]}

const TaskContext = createContext(initialTasks)    


export default TaskContext;



export const TaskProvider = ({children})=>{

    const [stateTask,dispatch] = useReducer(TaskReducer,initialTasks)

    const addTask = (task)=>{
        dispatch({type:"ADD_TASK",payload:{...task,id:uuidv4()}})
    }

    const deleteTask = (id)=>{
        dispatch({type:"DELETE_TASK",payload:id})
    }

    const editTask = (task)=>{
        dispatch({type:"EDIT_TASK",payload:task})
    }

    const doneTask = (id)=>{
        dispatch({type:"DONE_TASK",payload:id})
    }

    return (
        <TaskContext.Provider value={{...stateTask,addTask,deleteTask,editTask,doneTask}}>
            {children}
        </TaskContext.Provider>
    )
}