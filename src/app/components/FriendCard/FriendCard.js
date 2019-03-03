import React from "react"
import { connect } from "react-redux"

import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardActions from "@material-ui/core/CardActions"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import Close from "@material-ui/icons/Close"

import { actions as friendsActions } from "app/redux/friends/friends.actions"

function FriendCard ({ friend, deleteFriends }) {
  const avatar = () => {
    const { first_name, last_name } = friend
    return `${first_name.charAt(0).toUpperCase()} ${last_name.charAt(0).toUpperCase()}`
  }

  const fullName = () => {
    const { first_name, last_name } = friend
    return `${first_name} ${last_name}`
  }

  const email = () => {
    const { email } = friend
    return email
  }

  const handleOnDelete = () => {
    deleteFriends({ id: friend.id })
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
          <IconButton onClick={handleOnDelete} aria-label="Delete">
            <Close />
          </IconButton>
        </CardActions>
      </Card>
    </React.Fragment>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    deleteFriends: fields => {
      dispatch(friendsActions.delete(fields))
    }
  }
}

export default connect(null, mapDispatchToProps)(FriendCard)
