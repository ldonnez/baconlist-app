import React, { useState } from "react"
import Row from "components/Row"
import Column from "components/Column"
import Lists from "../Lists"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"

function ListsView () {
  const [newList, setNewList] = useState(false)

  const handleToggle = () => {
    setNewList(true)
  }

  const handleCancelNewList = () => {
    setNewList(false)
  }

  return (
    <React.Fragment>
      <Row>
        <Column spacing={4}>
          <Fab
            color="primary"
            onClick={handleToggle}
          >
            <AddIcon />
          </Fab>
        </Column>
      </Row>
      <Lists newList={newList} onCancelNewList={handleCancelNewList}/>
    </React.Fragment>
  )
}

export default ListsView
