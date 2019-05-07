import React, { useEffect } from "react"
import { connect } from "react-redux"
import Typography from "@material-ui/core/Typography"
import * as selectors from "app/redux/version/version.selectors"
import { actions } from "app/redux/version/version.actions"

function VersionBar ({ upgrade, version }) {

  useEffect(() => {
    upgrade()
  }, [upgrade])

  return (
    <React.Fragment>
      <Typography variant="button" align="left">
        v{ version }
      </Typography>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    version: selectors.getVersion(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    upgrade: () => dispatch(actions.upgrade())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(VersionBar)
