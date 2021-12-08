import React, { useEffect, useState } from "react"

import { ToDoForm } from "./components/ToDoForm";
import { List } from "./components/List";
import { Item } from "./components/Item";
import { Modal } from "./components/Modal";
import "./styles/toDo.css"


const SAVED_TAREFAS = "savedTarefas";

export function ToDo(){
  const [tarefas, setTarefas] = useState([]);
  const [showModal, setShowModal] = useState(false)

  useEffect(() =>{
    let savedTarefas = JSON.parse(localStorage.getItem(SAVED_TAREFAS))
    
    if (savedTarefas){
      setTarefas(savedTarefas)
    }
     
  }, [])

  useEffect(() => {
    localStorage.setItem(SAVED_TAREFAS, JSON.stringify(tarefas))
  
  }, [tarefas])


  function onAddTarefas(text){
    let item = new Item(text)
    setTarefas([...tarefas, item])
    setShowModal(false)
  }

  function onItemDeleted(tarefa){
    const itemFiltered = tarefas.filter(trf => trf.id !== tarefa.id)
    setTarefas(itemFiltered)
  }

  function onDone(tarefa){
    let updatedTarefas = tarefas.map(trf => {
      if(trf.id === tarefa.id){
        trf.done = !trf.done
      }
      return trf
    })
    setTarefas(updatedTarefas);
  }

  function onHideModal(){
    setShowModal(false)
  }

  return(
    <div className="container">
        <header className="header">
          <h1 className="title">To do List</h1>
          <button className="addButton" onClick={() => setShowModal(true)}>+</button>
        </header>
        <Modal show={showModal} onHideModal={onHideModal}>
          <ToDoForm onAddTarefas={onAddTarefas}></ToDoForm>
        </Modal>
        
        <List onDone={onDone} onItemDeleted={onItemDeleted} tarefas={tarefas}></List>
          
    </div>
  )
}

