import { useRef, useState } from "react";

function App() {
  return (
    <>
      <h1>My Todo</h1>
      <MyTodo />
    </>
  );
}

function MyTodo() {
  let inputref = useRef();
  let [todo, setTodo] = useState({ task: "" });

  let taskhandler = (e) => {
    let newTodo = { ...todo, task: e.target.value };
    setTodo(newTodo);
  };

  let addTodoaction = () => {
    alert(todo.task);
  };
           
  return (
    <>
      <input
        type="text"
        placeholder="Enter task"
        value={todo.task}
        onChange={taskhandler}
        className="form-control"
      />
      <input type="button" value="Add todo" onClick={addTodoaction} />
    </>
  );
}

export default App;
