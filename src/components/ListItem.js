import React from "react"

import { Card } from "./Card"

import Delete from "../assets/bin.png"
import Done from "../assets/done.png"
import Undone from "../assets/undone.png"

import "../styles/buttonItem.css"

export function ListItem(props){

  function DoneItem(props){
    if(props.done){
      return <img className="img1" alt="done" src={Done}/>
    }else{
      return <img className="img1" alt="done" src={Undone}/>
    }
  }

  return(
    <li>
      <Card className={props.tarefa.done ? "done item" : "item"} >
        {props.tarefa.text}
        <div className="div">
          <button className="buttonItem" onClick={() => props.onDone(props.tarefa)}><DoneItem done={props.tarefa.done}/></button>
          <button className="buttonItem" onClick={() => props.onItemDeleted(props.tarefa)}>
            <img alt="delete" src={Delete} width='30px'/>
          </button>
        </div>
      </Card>
    </li>)
}