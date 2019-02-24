import React, { useState, memo } from "react"
import { connect } from "react-redux"

import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Avatar from "@material-ui/core/Avatar"

import SubmitButton from "components/SubmitButton"
import TextField from "components/TextField"
import Row from "components/Row"
import Column from "components/Column"
import useValidator from "components/Hooks/validator"
import TaskField from "../TaskField"
import Task from "../Task"

import validations from "./validations"
import { actions as listActions } from "../../redux/lists/lists.actions"
import * as selectors from "../../redux/lists/lists.selectors"

function EditListCard ({ patchList, errors, loading, onEdit, list }) {
	const [formData, setFormData] = useState({ ...list })
	const validationErrors = useValidator(formData, errors, validations)

	const handleOnChange = event => {
		setFormData({ ...formData, [event.target.name]: event.target.value })
	}

	const handleOnCancel = () => {
		onEdit({ id: null })
	}

	const handleOnTaskAdd = value => {
  	const tasks = formData.tasks
  	const newTask = { name: value, completed: "false" }
  	const newTasks = tasks ? [...tasks, newTask] : [newTask]
  	setFormData({ ...formData, tasks: newTasks })
	}

	const handleOnDeleteTask = index => {
		setFormData({
			...formData,
			tasks: formData.tasks.filter((task, i) => i !== index)
		})
	}

	const handleOnSave = event => {
		event.preventDefault()
		patchList({ data: formData })
		if (!loading) {
			onEdit({ id: null })
		}
	}

	return (
		<Card>
			<CardHeader
				avatar={
					<Avatar aria-label="List">
						{formData.name && formData.name.charAt(0).toUpperCase()}
					</Avatar>
				}
				title={
					<TextField
						id="name"
						label="Name"
						name="name"
						value={formData.name}
						onChange={handleOnChange}
						errors={validationErrors && validationErrors["name"]}
					/>
				}
				subheader={
					<TextField
						id="dueTo"
						type="date"
						label="Due to"
						name="due_to"
						value={formData.due_to}
						onChange={handleOnChange}
						errors={validationErrors && validationErrors["due_to"]}
						InputLabelProps={{
							shrink: true
						}}
					/>
				}
			/>
			<CardContent>
				<Column />
			</CardContent>
			<Divider />
			<CardContent>
				<Row>
					<Column xs={12} lg={12} md={12}>
						<TextField
							fullWidth
							id="description"
							label="Description"
							multiline
							rows="2"
							rowsMax="4"
							variant="outlined"
							name="description"
							value={formData.description}
							onChange={handleOnChange}
							errors={validationErrors && validationErrors["description"]}
						/>
					</Column>
				</Row>
  					<Row margin={8}>
  						<Column lg={12} md={12} xs={12}>
  							<TaskField onAdd={handleOnTaskAdd} />
  						</Column>
  					</Row>
  					<Row margin={8}>
  						<Typography variant="button">Todo</Typography>
  					</Row>
  					{formData.tasks &&
              formData.tasks.map((task, i) => {
              	return (
              		task.completed === "false" && (
              			<Row key={`${list.id}-${i}-${task.name}`}>
              				<Column lg={12} md={12} xs={12}>
              					<Task
													created
              						name={task.name}
              						index={i}
          								onDelete={handleOnDeleteTask}
              					/>
              				</Column>
              			</Row>
              		)
              	)
              })}
  					<Row margin={8}>
  						<Typography variant="button">Completed</Typography>
  					</Row>
  					{formData.tasks &&
              formData.tasks.map((task, i) => {
              	return (
              		task.completed === "true" && (
              			<Row key={`${list.id}-${i}-${task.name}`}>
              				<Column lg={12} md={12} xs={12}>
              					<Task
              						completed
              						name={task.name}
              						index={i}
              					/>
              				</Column>
              			</Row>
              		)
              	)
              })}
			</CardContent>
			<Divider />
			<CardActions>
				<SubmitButton
					type="submit"
					variant="text"
					size="large"
					color="primary"
					loading={loading}
					onClick={handleOnSave}
				>
          Save
				</SubmitButton>
				<Button onClick={handleOnCancel} size="large" color="primary">
          Cancel
				</Button>
			</CardActions>
		</Card>
	)
}

const mapDispatchToProps = dispatch => {
	return {
		patchList: data => {
			dispatch(listActions.patch(data))
		},
		onEdit: id => {
			dispatch(listActions.onEdit(id))
		}
	}
}

const mapStateToProps = state => {
	return {
		errors: selectors.getErrors(state),
		loading: selectors.isLoading(state)
	}
}

export default connect(mapStateToProps,
	mapDispatchToProps)(memo(EditListCard))
