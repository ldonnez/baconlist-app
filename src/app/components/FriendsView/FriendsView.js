import React, { useState } from "react"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import People from "@material-ui/icons/People"
import GroupAdd from "@material-ui/icons/GroupAdd"
import FriendRequestsBadge from "../FriendRequestsBadge"
import FriendRequests from "../FriendRequests"
import Friends from "../Friends"

function FriendsView () {
  const [tab, setTab] = useState(0)

  const handleChange = (event, value) => {
    setTab(value)
  }

  	return (
  		<React.Fragment>
      <AppBar position="static" color="secondary">
        <Tabs variant="fullWidth" indicatorColor="primary" value={tab} onChange={handleChange}>
          <Tab icon={<People />} label="Friends" />
          <Tab icon={<FriendRequestsBadge><GroupAdd /></FriendRequestsBadge>} label="Requests" />
        </Tabs>
      </AppBar>
      {tab === 0 && <Friends />}
      {tab === 1 && <FriendRequests />}
  		</React.Fragment>
  	)
}

export default FriendsView
