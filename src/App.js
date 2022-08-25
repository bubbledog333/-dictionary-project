import  {useState}  from "react";
import axios from "axios";
import './App.css';

function App() {
 let [keyWord , setKeyWord] = useState("");
 
 
 function handleResponse(response){
console.log(response.data)
 }
  function handleSubmit(event){
    alert(` searching for ${keyWord}'s definition`)
    event.preventDefault()
   
    let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`
   console.log(apiUrl)
    axios.get(apiUrl).then(handleResponse);
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
