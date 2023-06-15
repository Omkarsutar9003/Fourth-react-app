import { useRef, useState } from "react";

function App() {
  return (
    <>
      <h1>Stateful List</h1>
      <ListDemo />
    </>
  );
}

function ListDemo() {
  let inputref = useRef();

  let [list, setList] = useState(["delhi"]);

  let addItemAction = () => {
    // let inputRef = document.querySelector("#id1");
    // let inputValue = inputRef.value;

    // let newList = [...list, inputValue];
    // setList(newList);

    // inputRef.value = "";
     
   let inputvalue = inputref.current.value;
    let newList = [...list,
      inputvalue];
    setList(newList);
    inputref.current.value = "";


  };

  return (
    <>
      <input type="text" ref={inputref} placeholder="Enter user input..." />
      <input type="button" value="Add New Item" onClick={addItemAction} />

      {list.map((item) => (<h1>{item}</h1>))}
    </>
  );
}

export default App;
