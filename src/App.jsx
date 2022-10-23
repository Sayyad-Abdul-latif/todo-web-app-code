import './App.css'
import { useState } from 'react';
let globalid = 0;
function App() {
  const [task, settask] = useState('');
  const [todos, settodo] = useState([]);

  const update = () => {
    settodo(todos => {
      return [...todos,{todo:task , id : globalid+=1} ];
    });
    settask('');
  }
  const del = (itemid) => {
    console.log(itemid)
    settodo(todos => todos.filter(item =>  itemid !== item.id))
  }
  const checkenter = (e) =>{
    if(e.keyCode == 13){
       update();
    }
  }
  return (
    <main>
      <h1>Todo App</h1>
      <input onKeyDown={checkenter} type="text" value={task} onChange={event => settask(event.target.value)} ></input>
      <button onClick={update}>click me</button>

      <ul>
        {todos.map(item => {
          return <div key = {item.id}>
            <li>{item.todo}</li>
                 <button onClick={() => del(item.id)}>delete task</button>
              </div>
                 
        })}
      </ul>
      
    </main>
  )
}
export default App;
