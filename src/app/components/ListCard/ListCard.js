import React, { useState } from "react"
import { connect } from "react-redux"

import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Collapse from "@material-ui/core/Collapse"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"
import ShareIcon from "@material-ui/icons/Share"

import Row from "components/Row"
import Column from "components/Column"
import ActionMenu from "components/ActionMenu"
import ConfirmationDialog from "components/ConfirmationDialog"

import Task from "../Task"
import TaskField from "../TaskField"
import ShareWithDialog from "../ShareWithDialog"
import { StyledCard, StyledCardHeader, StyledCardContent } from "./style"
import Description from "./components/Description"
import TagChips from "./components/TagChips"

import { actions } from "app/redux/lists/lists.actions"
import { actions as listsShareWithActions }from "app/redux/listsShareWith/listsShareWith.actions"
import { actions as friendsActions }from "app/redux/friends/friends.actions"
import { getCurrentUser } from "app/redux/authorization/authorization.selectors"

function ListCard ({ list, updateLists, onEdit, deleteLists, getListsShareWith, getFriends, onChange, currentUser, expanded }){
  const [actionMenu, setActionMenu] = useState({ open: false, anchorEl: null })
  const [confirmationDialog, setConfirmationDialog] = useState(false)
  const [shareWithDialog, setShareWithDialog] = useState(false)

  const tasks = list.tasks

  const handleOnCompleteTask = index => {
    const newTasks = tasks.map((t, i) => {
      if (i !== index) {
        return t
      }
      return {
        ...t,
        completed: "true"
      }
    })
    const newList = { ...list, tasks: newTasks }
    updateLists({ data: newList })
  }

  const handleOnDeleteTask = index => {
    const newTasks = tasks.filter((t, i) => i !== index)
    const newList = { ...list, tasks: newTasks }
    updateLists({ data: newList })
  }

  const handleOnTaskAdd = value => {
    const newTask = { name: value, completed: "false" }
    const newTasks = tasks ? [...tasks, newTask] : [newTask]
    const newList = { ...list, tasks: newTasks }
    updateLists({ data: newList })
  }

  const handleOnDeleteList = () => {
    setActionMenu({ open: false, anchorEl: null })
    setConfirmationDialog(true)
  }

  const handleOnEditList = () => {
    onEdit({ id: list.id })
  }

  const handleToggleActionMenu = event => {
    const { currentTarget } = event
    setActionMenu({ open: !actionMenu.open, anchorEl: currentTarget })
  }

  const handleCloseActionMenu = event => {
    setActionMenu({ open: false, anchorEl: null })
  }

  const handleOnCloseConfirmationDialog = () => {
    setConfirmationDialog(false)
  }

  const handleOnConfirmationDialog = () => {
    deleteLists({ id: list.id })
    setConfirmationDialog(false)
  }

  const handleOpenShareWithDialog = () => {
    getFriends()
    getListsShareWith({ id: list.id })
    setShareWithDialog(true)
  }

  const handleCloseShareWithDialog = () => {
    setShareWithDialog(false)
  }

  const handleOnSaveShareWith = friends => {
    const newList = { ...list, shared_with: friends }
    updateLists({ data: newList })
  }

  return (
    <StyledCard raised>
      <StyledCardHeader
        avatar={
          <Avatar aria-label="List">
            {list.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        action={
          <React.Fragment>
            { currentUser.ID === list.user_id &&
            <React.Fragment>
              <IconButton onClick={handleToggleActionMenu}>
                <MoreVertIcon />
              </IconButton>
              <ActionMenu
                open={actionMenu.open}
                anchor={actionMenu.anchorEl}
                placement="bottom-end"
                onClose={handleCloseActionMenu}
              >
                <MenuList>
                  <MenuItem onClick={handleOnEditList}>Edit</MenuItem>
                  <MenuItem onClick={handleOnDeleteList}>Delete</MenuItem>
                </MenuList>
              </ActionMenu>
            </React.Fragment>
            }
          </React.Fragment>
        }
        title={list.name}
        subheader={list.due_to ? list.due_to : "No due date"}
      />
      <StyledCardContent>
        <TagChips tags={list.tags} />
        <Description>{list.description}</Description>
      </StyledCardContent>
      <CardActions disableActionSpacing>
        <IconButton
          onClick={onChange(list.id)}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        { currentUser.ID === list.user_id &&
          <IconButton onClick={handleOpenShareWithDialog}aria-label="Share">
            <ShareIcon />
          </IconButton>
        }
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Row margin={8}>
            <Column lg={12} md={12} xs={12}>
              <TaskField onAdd={handleOnTaskAdd} />
            </Column>
          </Row>
          <Row margin={8}>
            <Typography variant="button">Todo</Typography>
          </Row>
          {tasks &&
              tasks.map((task, i) => {
                return (
                  task.completed === "false" && (
                    <Row key={`${list.id}-${i}-${task.name}`}>
                      <Column lg={12} md={12} xs={12}>
                        <Task
                          name={task.name}
                          index={i}
                          onDelete={handleOnCompleteTask}
                        />
                      </Column>
                    </Row>
                  )
                )
              })}
          <Row margin={8}>
            <Typography variant="button">Completed</Typography>
          </Row>
          {tasks &&
              tasks.map((task, i) => {
                return (
                  task.completed === "true" && (
                    <Row key={`${list.id}-${i}-${task.name}`}>
                      <Column lg={12} md={12} xs={12}>
                        <Task
                          completed
                          name={task.name}
                          index={i}
                          onDelete={handleOnDeleteTask}
                        />
                      </Column>
                    </Row>
                  )
                )
              })}
        </CardContent>
      </Collapse>
      <ConfirmationDialog
        open={confirmationDialog}
        onClose={handleOnCloseConfirmationDialog}
        onConfirm={handleOnConfirmationDialog}
        text={`Are you sure you want to delete ${list.name}?`}
      />
      { shareWithDialog &&
          <ShareWithDialog
            listId={list.id}
            open={shareWithDialog}
            onClose={handleCloseShareWithDialog}
            onSave={handleOnSaveShareWith}
          />
      }
    </StyledCard>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: getCurrentUser(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateLists: fields => {
      dispatch(actions.patch(fields))
    },
    deleteLists: id => {
      dispatch(actions.delete(id))
    },
    onEdit: id => {
      dispatch(actions.onEdit(id))
    },
    getListsShareWith: id => {
      dispatch(listsShareWithActions.get(id))
    },
    getFriends: fields => {
      dispatch(friendsActions.get())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCard)
