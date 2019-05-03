import React, { memo, useEffect, useState, useCallback } from "react"
import { connect } from "react-redux"

import Divider from "@material-ui/core/Divider"

import Row from "components/Row"
import Column from "components/Column"
import LoadingIndicator from "components/LoadingIndicator"

import FriendCard from "../FriendCard"
import NewFriendRequestCard from "../NewFriendRequestCard"
import AddFriendField from "./components/AddFriendField"

import * as selectors from "app/redux/friends/friends.selectors"
import * as usersSelectors from "app/redux/users/users.selectors"
import { actions } from "../../redux/friends/friends.actions"
import { actions as usersActions } from "../../redux/users/users.actions"

function Friends ({ loading, friends, user, getUsersByEmail, getFriends }) {
  const [add, setAdd] = useState(false)

  useEffect(() => {
    getFriends()
  }, [getFriends])

  const onAddFriendChange = useCallback((value) => {
    getUsersByEmail({ email: value })
    setAdd(true)
  }, [getUsersByEmail, setAdd])

  const onCancelAdd = () => {
    setAdd(false)
  }

  return (
    <React.Fragment>
      <Row>
        <Column spacing={8} lg={3} md={6} xs={12}>
          <AddFriendField onChange={onAddFriendChange}/>
        </Column>
      </Row>
      <Row>
        <Column spacing={8} lg={3} md={6} xs={12}>
          { add && user &&
            <NewFriendRequestCard user={user && user} onCancel={onCancelAdd}/>
          }
        </Column>
      </Row>
      <Divider />
      <Row>
        {  friends && friends.map(f => {
          return (
            <Column key={f.id} spacing={8} lg={3} md={6} xs={12}>
              <FriendCard friend={f} />
            </Column>
          )
        })}
      </Row>
  			{loading && (
  				<Row>
  					<Column lg={12} md={12} xs={12}>
  						<LoadingIndicator />
  					</Column>
  				</Row>
  			)}
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    friends: selectors.getFriends(state),
    loading: selectors.loading(state),
    user: usersSelectors.getUser(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFriends: fields => {
      dispatch(actions.get())
    },
    getUsersByEmail: email => {
      dispatch(usersActions.getByEmail(email))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(memo(Friends))
