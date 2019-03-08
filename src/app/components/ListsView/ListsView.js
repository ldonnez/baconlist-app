import React, { useState } from "react"
import { withRouter } from "react-router-dom"
import AddButton from "components/AddButton"
import Lists from "../Lists"

function ListsView () {
  const [newList, setNewList] = useState(false)

  const handleToggle = () => {
    setNewList(true)
    window.scrollTo(0,0)
  }

  const handleCancelNewList = () => {
    setNewList(false)
  }

  return (
    <React.Fragment>
      <Lists newList={newList} onCancelNewList={handleCancelNewList}/>
      <AddButton onClick={handleToggle} />
    </React.Fragment>
  )
}

export default withRouter(ListsView)
