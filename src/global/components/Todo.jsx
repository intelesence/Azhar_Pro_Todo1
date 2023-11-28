import React from 'react'
import { useNavigate } from 'react-router-dom'

const Todo = ({ title,
    onSubmithandler=()=>{},
    settodo,
    todo,
    TodoEdit,
    usertodo=[],
    setusertodo,
    setTodoEdit,
    isChild=false,
}) => {



const navigate=useNavigate();

  return(
    
      <div className='listcontainer container'>
      <h1>
       Todo ({title})
      </h1>

      <form onSubmit={onSubmithandler}>
<div style={{

display:'flex',
flexDirection:'column',
flex:'1',
gap:'10px'



}}>
  <label htmlFor="todo">Enter your todo</label>
     <input type="text"name='todo'id='todo'value={todo}onChange={(e)=>{

 settodo(e.target.value)

     }} />


     </div>
     <button>{TodoEdit !==null ? 'Edit':'Add'}</button>

     </form>
    <div className='list'>

 { usertodo.reverse().map((i,index)=>{
 
 return(
 <div key={index}className='card'>
<div>

 <span>{i.todo} </span>

<span>{i.create}</span>

    </div>

    <div>

<button onClick={()=>{

setTodoEdit(index);
settodo(i.todo);

}}>Edit</button>

{isChild &&(
<button onClick={()=>{

navigate('/child-todo/'+index);


}}>Child</button>

)
 }
<button onClick={()=>{

const tempdata=usertodo;

tempdata.splice(index,1);

setusertodo([...tempdata]);

}}>Delete</button>
</div>
    </div>)}
)}
     </div>
      
    </div> 
    
  )
}

export default Todo
