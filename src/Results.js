import React from "react"
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic";
import "./App.css"
export default function Result(props){
 if (props.results) {
    return(
        <div className="Result">
          <h2>{props.results.word}</h2>  
          {props.results.phonetics.map(function(phonetic, index){
          return (
          <div key={index}>
           <Phonetic phonetic={phonetic} />
          </div>
          )
          })}
        {props.results.meanings.map(function(meaning, index){
           return (
           <div key={index}>
        <Meaning  meaning={meaning}/>
           </div>
           );
        })}
        </div>
        )
        
    } else{
        return null;

    }
}