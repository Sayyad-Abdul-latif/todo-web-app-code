import './App.css'
import { useState } from 'react';
function App() {
  const [task, settask] = useState('')
  const [todos, settodo] = useState([])

  const update = () => {
    settodo(todos => {
      return [...todos, task];
    });
    settask('');
  }
  const del = () => {
    settodo(todos => {
      return todos.slice(0, todos.length - 1)
    })
  }
  const checkenter = (e) =>{
    if(e.keyCode == 13){
       update();
    }
  }
  return (
    <>
      <h1>Todo App</h1>
      <input onKeyDown={checkenter} type="text" value={task} onChange={event => settask(event.target.value)} ></input>
      <button onClick={update}>click me</button>

      <ul>
        {todos.map(todo => {
          return <li>{todo}</li>
        })}
      </ul>
      <button onClick={del}>delete task</button>
    </>
  )
}
export default App;
