
import { Card } from "./Card"

export function Modal(props){
  function hideModal(e){
    let click = e.target.id;
    if(click === "modal"){
      props.onHideModal()
    }
  }

  return(  
    <div id = "modal" className={props.show ? "modal" : "modal hide"} onClick={hideModal} >
      <Card className="cardModal">
        {props.children}
      </Card>
    </div>
  )
}