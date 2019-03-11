import React, { memo } from "react"
import { connect } from "react-redux"
import Notification from "./components/Notification"
import * as selectors from "../../redux/notifications/notifications.selectors"


function Notifications ({ notifications }) {
  return (
    notifications.map(notification => {
      return <Notification id={notification.id} message={notification.message} />
    }))
}

const mapStateToProps = state => {
  return {
    notifications: selectors.getNotifications(state)
  }
}

export default connect(mapStateToProps)(memo(Notifications))
