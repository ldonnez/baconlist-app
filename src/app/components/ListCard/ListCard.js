import React from "react"
import { connect } from "react-redux"

import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Collapse from "@material-ui/core/Collapse"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"

import Row from "components/Row"
import Column from "components/Column"
import ActionMenu from "components/ActionMenu"
import ConfirmationDialog from "components/ConfirmationDialog"

import Task from "../Task"
import TaskField from "../TaskField"
import { StyledCard } from "./style"
import { normalizedDate } from "utils"

import { actions } from "app/redux/lists/lists.actions"
import * as selectors from "app/redux/lists/lists.selectors"
import { getCurrentUser } from "app/redux/authorization/authorization.selectors"

class ListCard extends React.PureComponent {
  state = {
  	openActionMenu: false,
  	anchorEl: null,
  	openConfirmationDialog: false
  };

  handleOnCompleteTask = index => {
  	const { list, updateLists } = this.props
  	const tasks = list.tasks
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
  };

  handleOnDeleteTask = index => {
  	const { list, updateLists } = this.props
  	const tasks = list.tasks
  	const newTasks = tasks.filter((t, i) => i !== index)
  	const newList = { ...list, tasks: newTasks }
  	updateLists({ data: newList })
  };

  handleOnTaskAdd = value => {
  	const { list, updateLists } = this.props
  	const tasks = list.tasks
  	const newTask = { name: value, completed: "false" }
  	const newTasks = tasks ? [...tasks, newTask] : [newTask]
  	const newList = { ...list, tasks: newTasks }
  	updateLists({ data: newList })
  };

  handleOnDeleteList = () => {
  	this.setState({ openActionMenu: false, anchorEl: null, openConfirmationDialog: true })
  }

  handleToggleActionMenu = event => {
  	const { currentTarget } = event
  	this.setState(state => ({ openActionMenu: !state.openActionMenu, anchorEl: currentTarget }))
  };

  handleCloseActionMenu = event => {
  	this.setState({ openActionMenu: false, anchorEl: null })
  };

  handleOnCloseConfirmationDialog = () => {
  	this.setState({ openConfirmationDialog: false })
  }

  handleOnConfirmationDialog = () => {
  	const { list, deleteLists } = this.props
  	deleteLists({ id: list.id })
  	this.setState({ openConfirmationDialog: false })
  }

  render () {
  	const { list, onChange, currentUser, expanded } = this.props
  	const tasks = list.tasks
  	return (
  		<StyledCard raised>
  			<CardHeader
  				avatar={
  					<Avatar aria-label="List">
  						{list.name.charAt(0).toUpperCase()}
  					</Avatar>
  				}
  				action={
  					<React.Fragment>
  						<IconButton onClick={this.handleToggleActionMenu}>
  							<MoreVertIcon />
  						</IconButton>
  						<ActionMenu
  							open={this.state.openActionMenu}
  							anchor={this.state.anchorEl}
  							placement="bottom-end"
  							onClose={this.handleCloseActionMenu}
  						>
  							<MenuList>
  								{ currentUser.ID === list.user_id &&
  									<MenuItem onClick={this.handleOnDeleteList}>Delete</MenuItem>
  								}
  							</MenuList>
  						</ActionMenu>
  					</React.Fragment>
  				}
  				title={list.name}
  				subheader={normalizedDate(list.due_to)}
  			/>

  			<CardContent>
  				<Typography component="p">{list.description}</Typography>
  			</CardContent>
  			<CardActions disableActionSpacing>
  				<IconButton
  					onClick={onChange(list.id)}
  					aria-expanded={expanded}
  					aria-label="Show more"
  				>
  					<ExpandMoreIcon />
  				</IconButton>
  			</CardActions>
  			<Collapse in={expanded} timeout="auto" unmountOnExit>
  				<CardContent>
  					<Row margin={8}>
  						<Column lg={12} md={12} xs={12}>
  							<TaskField onAdd={this.handleOnTaskAdd} />
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
              						onDelete={this.handleOnCompleteTask}
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
              						onDelete={this.handleOnDeleteTask}
              					/>
              				</Column>
              			</Row>
              		)
              	)
              })}
  				</CardContent>
  			</Collapse>
  			<ConfirmationDialog
  				open={this.state.openConfirmationDialog}
  				onClose={this.handleOnCloseConfirmationDialog}
  				onConfirm={this.handleOnConfirmationDialog}
  				text={`Are you sure you want to delete ${list.name}?`}
  			/>
  		</StyledCard>
  	)
  }
}

const mapStateToProps = state => {
	return {
		tasksTodo: id => selectors.getTodoTasksFromList(state, id),
		tasksCompleted: id => selectors.getCompletedTasksFromList(state, id),
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
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListCard)
