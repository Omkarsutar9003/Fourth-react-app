

function App() {
  
  return (
    <>
      <h1>Props Demo</h1>
      <Demo username="Omkar" place="Kolhapur" />
      <Demo username="Nitesh" place="Sangli" />
      <Demo username="Amit" place="Kolhapur" />
    </>
  );
};

function Demo(props)
{
   console.log("inside function", props);
  return (
    <>
      <h1>{props.username}</h1>
      <h1>{props.place}</h1>
    </>
  );
}

export default App;