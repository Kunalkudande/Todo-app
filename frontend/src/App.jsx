import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Createtodo } from './components/Createtodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{       //used for fetching the added todo in db to frontend
    //setInterval(()=> {
      fetch("http://localhost:3000/todos")
      .then(async function(res){
          const json = await res.json();
          setTodos(json.todos);
      })
    }, [Createtodo])

    //}, 5000);
    
  

  return (
    <div>
      <Createtodo></Createtodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
