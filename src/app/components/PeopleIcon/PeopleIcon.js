import React from "react"
import FriendRequestsBadge from "../FriendRequestsBadge"
import People from "@material-ui/icons/People"

function PeopleIcon () {
  return (
    <React.Fragment>
      <FriendRequestsBadge>
        <People />
      </FriendRequestsBadge>
    </React.Fragment>
  )
}

export default PeopleIcon
