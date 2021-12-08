import React from "react"
import { ListItem } from "./ListItem"

export function List(props){
  return(
    <ul>
    {props.tarefas.map(tarefa => 
      <ListItem key={tarefa.id} tarefa={tarefa} onDone={props.onDone} 
      onItemDeleted={props.onItemDeleted} />)}
    </ul>
  )
}