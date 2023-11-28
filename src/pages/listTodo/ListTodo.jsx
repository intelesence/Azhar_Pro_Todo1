import React,{useEffect, useState} from 'react';
//import {  useNavigate } from 'react-router-dom';
import './ListTodo.css';
import Todo from '../../global/components/Todo';
const ListTodo = () => {


//const navigate=useNavigate();

const [useremail,setuseremail]=useState('');
const [TodoEdit,setTodoEdit]=useState(null);
const [todo,settodo]=useState('');
const [usertodo,setusertodo]=useState([]);


useEffect(()=>{

const temptodo=localStorage.getItem('Todolist');

if(temptodo){
console.log(JSON.parse(temptodo));
setusertodo(JSON.parse(temptodo));

}
},[]);

useEffect(()=>{

  console.log(usertodo);
  if(usertodo.length){
localStorage.setItem('Todolist',JSON.stringify(usertodo));

  }

},[usertodo]);

useEffect(()=>{

console.log(usertodo);

},[usertodo]);

useEffect(()=>{

const tempuser=localStorage.getItem('userDetails');

if(tempuser){

let loginuser=JSON.parse(tempuser);
setuseremail(loginuser.email);


}
else{

  setuseremail('.......');

}

},[]);
  return(
   

 <Todo
 
 settodo={settodo}
 setTodoEdit={setTodoEdit}
 setusertodo={setusertodo}
 title={useremail}
 todo={todo}
 TodoEdit={TodoEdit}
 isChild={true}
usertodo={usertodo}

 onSubmithandler={(e)=>{
    e.preventDefault();
if(TodoEdit===null){
  setusertodo([...usertodo,{id:usertodo.length,todo,create:new Date().toDateString(),},
  ]
  .sort((a,b)=>a.id-b.id).reverse()
  
  );

}
else{
let tempData=usertodo;
usertodo[TodoEdit]={
...usertodo[TodoEdit],
todo,
  
}

setusertodo([...tempData]);
setTodoEdit(null);
}

settodo('');

    }
    


 }/>

  )
}

export default ListTodo;
