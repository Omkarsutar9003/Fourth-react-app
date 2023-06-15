import { useRef, useState } from "react";

function App() {
  return (
    <>
      <h1>My project</h1>
      <ListDemo />
    </>
  );
}

function ListDemo() {

  let inputref = useRef();
  let [list, setList] = useState(["delhi"]);
  
  let additem=() => {
    
    let inputvalue = inputref.current.value;
    let newlist = [inputvalue, ...list];
    setList(newlist);
    inputref.current.value = "";

  };

  return (
    <>
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "95vh" }}
      >
        <div className="col-sm-12 col-md-6">
          <h1>Registration App</h1>
          <input
            className="form-control"
            type="text"
            placeholder="user name"
            ref={inputref}
          />

          <input
            className="form-control"
            type="text"
            placeholder="password"
            ref={inputref}
          />

          <input
            className="form-control"
            type="text"
            placeholder="Email"
            ref={inputref}
          />

          <input
            type="button"
            value="Login"
            className="w-100"
            onClick={additem}
          />
        </div>
      </div>
    </>
  );
}

export default App;
