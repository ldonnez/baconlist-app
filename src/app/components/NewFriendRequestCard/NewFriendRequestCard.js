import React from "react"
import { connect } from "react-redux"

import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardActions from "@material-ui/core/CardActions"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import Close from "@material-ui/icons/Close"
import Check from "@material-ui/icons/Check"

import { actions as friendRequestsActions } from "app/redux/friendRequests/friendRequests.actions"

function NewFriendRequestCard ({ user, postFriendRequests, onCancel }) {
  const avatar = () => {
    const { first_name, last_name } = user
    return `${first_name.charAt(0).toUpperCase()} ${last_name.charAt(0).toUpperCase()}`
  }

  const fullName = () => {
    const { first_name, last_name } = user
    return `${first_name} ${last_name}`
  }

  const email = () => {
    const { email } = user
    return email
  }

  const handleOnAccept = () => {
    postFriendRequests({ id: user && user.id })
    onCancel()
  }

  const handleOnCancel= () => {
    onCancel()
  }

  return (
    <React.Fragment>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="Friend">
              {  avatar() }
            </Avatar>
          }
          title={fullName()}
          subheader={email()}
        />
        <CardActions disableActionSpacing>
          <IconButton onClick={handleOnAccept} aria-label="Add to friends">
            <Check color="primary" />
          </IconButton>
          <IconButton onClick={handleOnCancel} aria-label="Deny">
            <Close />
          </IconButton>
        </CardActions>
      </Card>
    </React.Fragment>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    postFriendRequests: data => {
      dispatch(friendRequestsActions.post(data))
    }
  }
}

export default connect(null, mapDispatchToProps)(NewFriendRequestCard)
