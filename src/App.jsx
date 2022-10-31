import './App.css'
import { useState } from 'react';
let globalid = 1;
function App() {
  const [task, settask] = useState('');
  const [todos, settodo] = useState([]);
  const update = () => {
    console.log(globalid)

    settodo(todos => {
      return [...todos, { todo: task, id: globalid }];
    });
    globalid++;
    if (todos.length == 0) {
      globalid = 1;
    }
    settask('');
  }
  const del = (itemid) => {

    settodo(todos => todos.filter(item => itemid !== item.id))

  }
  const checkenter = (e) => {
    if (e.keyCode == 13) {
      update();
    }
  }
  return (
    <main>
      <h1 style={{ background: 'black',color: 'white' }}>Todo App</h1>
      <input onKeyDown={checkenter} type="text" value={task} onChange={event => settask(event.target.value)} ></input>
      <button onClick={update}>click me</button>

      <ul>
        {todos.map(item => {
          return <div key={item.id}>
            <li>{item.id} . {item.todo}</li>
            <button onClick={() => del(item.id)}>delete task</button>
          </div>

        })}
      </ul>

    </main>
  )
}
export default App;
