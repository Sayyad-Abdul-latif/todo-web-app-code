import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';

function Hello() {
  return (
    <h1>hello my name is Abdul Latif</h1>
  )
}

const page = (
  <div  >
    <img src="./public/favicon.svg" width={'100px'} />
  </div>
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <ul>
  //   <li>One</li>
  //   <li>Two</li>
  // </ul>
)