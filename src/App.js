import  {useState}  from "react";
import axios from "axios";
import Results from "./Results";
import './App.css';

function App() {
 let [keyWord , setKeyWord] = useState("");
 let [results, setResults] = useState(null);
 
 function handleResponse(response){
  console.log(response.data[0]);
  setResults(response.data[0]);
  
 }
  function handleSubmit(event){
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
      <br/>
      
      </header>
   
      <Results results={results}/>
   <br/>  <br/><p>This is open <a href="https://github.com/bubbledog333/-dictionary-project">scorced</a> with github</p>
    </div>
  );
}

export default App;
