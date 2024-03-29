import { useReducer, useRef, useState } from "react"
import './App.css'

function createToDo() {
  let arr = []
  for (let i = 0; i < 50; i++) {
    arr.push({ id: i, 'task': 'Todo' + i, 'completed': Math.random() > 0.5 })
  }
  return (arr)
}
let todo = createToDo()
console.log(todo)
function App() {
  const [dark, setDark] = useState(false)
  const [filter, setFilter] = useState('All')
  function handlechange() {
    setDark(!dark)
  }

  function all() {
    setFilter('All')
  }

  function completed() {
    setFilter('Completed')
  }

  function active() {
    setFilter('Active')
  }

  function Show() {
    if (filter === 'All') {
      return todo.map((r) => {
        return (
          <tr key={r.id}>
            <td>
              {r.id}
            </td>
            <td>
              {r.task}
            </td>
            <td>
              {r.completed ? "Completed" : "Active"}
            </td>
          </tr>

        )
      })
    } else if (filter === 'Completed') {
      return todo.map((r) => {
        if (r.completed === true) {
          return (
            <tr key={r.id}>
              <td>
                {r.id}
              </td>
              <td>
                {r.task}
              </td>
              <td>
                {r.completed ? "Completed" : "Active"}
              </td>
            </tr>
          )
        }
      })
    } else if (filter === 'Active') {
      return todo.map((r) => {
        if (r.completed === false) {
          return (
            <tr key={r.id}>
              <td>
                {r.id}
              </td>
              <td>
                {r.task}
              </td>
              <td>
                {r.completed ? "Completed" : "Active"}
              </td>
            </tr>
          )
        }
      })
    }
  }


  return (
    <>
      <div style={{ backgroundColor: dark ? "black" : 'white' }}>
        Dark Theme
        <input type="checkbox" checked={dark} onChange={handlechange}></input>
        <br></br>
        <button onClick={all} id="all">All</button>
        <button onClick={completed} id="complete">Completed</button>
        <button onClick={active} id="active">Active</button>

        <br></br>
        <table border={1}>
          <tbody>
            <Show />
          </tbody>
        </table>
      </div>
    </>
  )
}
export default App