import ChildTodoTask from './pages/childTodoTask/ChildTodoTask.jsx';
import Login from './pages/login/Login.jsx';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import ListTodo from './pages/listTodo';
import './global/styles/index.css';
function App() {
  return (
   
<BrowserRouter>


<Routes>

<Route path='/child-todo/:id'element={<ChildTodoTask/>}/>
  
<Route path='/my-list'element={<ListTodo/>}/>

<Route path='/'element={<Login/>}/>


</Routes>


</BrowserRouter>

  );
};

export default App;
