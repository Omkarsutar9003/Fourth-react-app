

function App() {
  
  return (
    <>
      <h1>Loop Demo</h1>
      <Listdemo/>
    </>
  )
}

function Demo({username,place})
{
    //console.log("inside function", props);
  return (
    <>
      <h1>
        {username} {place}
       
      </h1>
      
    </>
  );
}

function Listdemo()
{
  let data = "Shri Swami Samarth";
  let list = [];

  for (let i = 0; i < 6; i++)
  {
    list.push("Shri Swami Samarth");
  }
  
   return (
     <>
        
       <h1>{data}</h1>
       {list.forEach((item) => item)}
       {list.map((item)=>list)}

     </>
   );
  
};
export default App;