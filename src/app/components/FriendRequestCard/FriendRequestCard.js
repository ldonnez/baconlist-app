import React from "react"
import { connect } from "react-redux"

import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardActions from "@material-ui/core/CardActions"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import Close from "@material-ui/icons/Close"
import Check from "@material-ui/icons/Check"

import { actions as friendsActions } from "app/redux/friends/friends.actions"
import { actions as friendRequestsActions } from "app/redux/friendRequests/friendRequests.actions"

function FriendRequestCard ({ friendRequest, postFriends, deleteFriendRequests }) {
  const avatar = () => {
    const { first_name, last_name } = friendRequest
    return `${first_name.charAt(0).toUpperCase()} ${last_name.charAt(0).toUpperCase()}`
  }

  const fullName = () => {
    const { first_name, last_name } = friendRequest
    return `${first_name} ${last_name}`
  }

  const email = () => {
    const { email } = friendRequest
    return email
  }

  const handleOnAccept = () => {
    postFriends({ id: friendRequest.id })
  }

  const handleOnDeny= () => {
    deleteFriendRequests({ id: friendRequest.id })
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
          <IconButton onClick={handleOnDeny} aria-label="Deny">
            <Close />
          </IconButton>
        </CardActions>
      </Card>
    </React.Fragment>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    postFriends: fields => {
      dispatch(friendsActions.post(fields))
    },
    deleteFriendRequests: id => {
      dispatch(friendRequestsActions.delete(id))
    }
  }
}

export default connect(null, mapDispatchToProps)(FriendRequestCard)
