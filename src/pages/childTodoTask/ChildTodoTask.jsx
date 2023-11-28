import React,{useState,useEffect} from 'react';
import { useParams} from 'react-router-dom';

import Todo from '../../global/components/Todo';
const ChildTodoTask = () => {


    const {id}=useParams();


//const navigate=useNavigate;


    //const [useremail,setuseremail]=useState('');
    const [TodoEdit,setTodoEdit]=useState(null);
    const [todo,settodo]=useState('');
    const [usertodo,setusertodo]=useState([]);
    
    
    useEffect(()=>{
    
    const temptodo=localStorage.getItem(`Todolistchild${id}`);
    
    if(temptodo){
    console.log(JSON.parse(temptodo));
    setusertodo(JSON.parse(temptodo));
    
    }
    },[id]);
    
    useEffect(()=>{
    
      console.log(usertodo);
      if(usertodo.length){
    localStorage.setItem(`Todolistchild${id}`,JSON.stringify(usertodo));
    
      }
    
    },[id,usertodo]);
    
    
    
    
      return(
       
    
     <Todo
     
     settodo={settodo}
     setTodoEdit={setTodoEdit}
     setusertodo={setusertodo}
     title={id}
     todo={todo}
     TodoEdit={TodoEdit}
     isChild={false}
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
      
    };
    
    setusertodo([...tempData]);
    setTodoEdit(null);
    }

    settodo('');
        }
        
    
    
     }/>
    
      )

  
}

export default ChildTodoTask;

