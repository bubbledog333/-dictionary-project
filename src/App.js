import  {useState}  from "react";
import './App.css';

function App() {
 let [keyWord , setKeyWord] = useState("");
  function handleSubmit(event){
    alert(` searching for ${keyWord}'s definition`)
    event.preventDefault()
   
  } 
  function handleKeyWord(event){
    setKeyWord(event.target.value)
  }
  return (

    <div className="App">
      <header className="App-header">
      <h1>-Dictionary project-</h1>
  
     <br/> <form onSubmit={handleSubmit}>
        <input placeholder="What to look up?"onChange={handleKeyWord} class="shadow"/>
      <br/>  <input class="btn btn-dark shadow " type="submit"/> 
      </form>
   

      </header>
    </div>
  );
}

export default App;
