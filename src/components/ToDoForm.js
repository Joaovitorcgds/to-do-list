import { useState } from "react";
import "../styles/toDoForm.css"

export function ToDoForm(props){
  const [text, setText] = useState("");

  function handleChange(event){
    let t = event.target.value
    setText(t)
  }
  
  function Add(event){  // button
    event.preventDefault(props);
    if(text){
      props.onAddTarefas(text);
      setText("")
    }
  }

  return(
    <form autocomplete="off">
      <input className="inputForm" type="text" id="valor" onChange={handleChange} value={text}/>
      <button className="btnAdd" onClick={Add}>Adicionar</button>
    </form>
  )
}