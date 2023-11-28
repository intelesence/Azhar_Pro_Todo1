import React , {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";
const Login=()=>{
const Navigate=useNavigate();
/*
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    */

    const [user,setuser]=useState({
        email:''
        ,password:''
    
    });
    useEffect(()=>{

console.log(user.email);

    },[user.email]);
return(

<>
<div className="logincontainer">
<h1>
    My to<span>do list</span>
</h1>

<form onSubmit={
(e)=>{

e.preventDefault();
const tempuser=localStorage.getItem('userDetails');
if(tempuser){
    let loginuser=JSON.parse(tempuser);
if(user.email===loginuser.email &&user.password===loginuser.password){

alert('Form submit successffully');
localStorage.setItem('userDetails',JSON.stringify(user));
Navigate('my-list');
}
else{

    alert('wrong email and password');

}
}
else{

localStorage.setItem('userDetails',JSON.stringify(user));
alert('Form submit successffully');
Navigate('my-list');
}
}

}>
<label htmlFor="email">Email({user.email})</label>
<input type="email"id="email"name="email"value={user.email} onChange={(e)=>{

setuser({...user,email:e.target.value});

}}required />
<label htmlFor="password">Password({user.password})</label>
<input type="password"id="password"name="password"value={user.password}onChange={(e)=>{

setuser({...user,password:e.target.value});

}} />

<button>Login / Registration</button>
</form>

</div>
</>

)




}

export default Login;