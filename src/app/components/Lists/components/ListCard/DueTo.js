import React from "react"
import Typography from "@material-ui/core/Typography"

class DueTo extends React.PureComponent {
  render() {
    const { children } = this.props
    return (
      <Typography inline gutterBottom variant="caption">
        {children}
      </Typography>
    )
  }
}

export default DueTo
