import './App.css'
import {useState} from 'react';
 function App() {
   const [task , settask] = useState('')
   const [todos , settodo] = useState(['Homework' , 'shopping'])

   const update = () =>{
     settodo(todos => {
       return [...todos , task];
     });
     settask('');
   }
   const del = () =>{
    if(todos.length >0){
      todos.pop()
    }
     settodo(todos);
   }
  return (
    <>
      <h1>Todo App</h1>
      <input type="text" value = {task} onChange = {event => settask(event.target.value)} ></input>
      <button onClick={update}>click me</button>
      
      <ul>
        {todos.map(todo =>{
            return <li>{todo}</li>
        })}
      </ul>
      <button onClick={del}>delete task</button>
    </>
      )
}
export default App;
