import React from "react"
import { connect } from "react-redux"
import Badge from "@material-ui/core/Badge"
import * as selectors from "app/redux/friendRequests/friendRequests.selectors"

function FriendRequestsBadge ({ count, children }) {
  return (
    <React.Fragment>
      <Badge color="primary" badgeContent={count} invisible={count === 0 ? true : false}>
        { children }
      </Badge>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    count: selectors.getCount(state)
  }
}

export default connect(mapStateToProps, null)(FriendRequestsBadge)
