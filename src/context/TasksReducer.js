export default function TaskReducer(state, action){

    switch(action.type){
        case "ADD_TASK":{
            return {tasks:[...state.tasks,action.payload]}
        }
        case "DELETE_TASK":{
            return {tasks:state.tasks.filter(task=>task.id !== action.payload)}
        }
        case "EDIT_TASK":{
            
                const editTask = action.payload
               const updatedTask = state.tasks.map((task)=>{
                    if(task.id === editTask.id){
                       return editTask
                    }
                    return task
                })
            return  {
                tasks: updatedTask
              };
        }
        case "DONE_TASK":{
            const id = action.payload;
            const tasks = state.tasks.map((task)=>{
                if(task.id === id){
                    console.log(task.done)
                    return {...task,done:!task.done}
                }
                return task;
            })
            return { tasks:tasks}
        }
        default : return state;
    }
    
}