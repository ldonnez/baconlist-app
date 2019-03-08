import React, { memo } from "react"
import { connect } from "react-redux"

import Row from "components/Row"
import Column from "components/Column"
import FriendRequestCard from "../FriendRequestCard"
import * as selectors from "app/redux/friendRequests/friendRequests.selectors"

function FriendRequests ({ friendRequests }) {
  return (
    <React.Fragment>
      <Row margin={16}>
        {  friendRequests && friendRequests.map(fr => {
          return (
            <Column key={fr.id} spacing={8} lg={2} md={6} xs={12}>
              <FriendRequestCard friendRequest={fr} />
            </Column>
          )
        })}
      </Row>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    friendRequests: selectors.getFriendRequests(state)
  }
}

export default connect(mapStateToProps, null)(memo(FriendRequests))
