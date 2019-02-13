import React from "react"
import Typography from "@material-ui/core/Typography"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import SubmitButton from "components/SubmitButton"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"
import Column from "components/Column"
import DueTo from "./DueTo"

class ListPanel extends React.PureComponent {
  render() {
    const { list, onChange, expanded } = this.props
    return (
      <ExpansionPanel
        expanded={expanded === list.name}
        onChange={onChange(list.name)}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Column spacing={4}>
            <Typography variant="h6">{list.name}</Typography>
            <DueTo>{list.due_to}</DueTo>
          </Column>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>{list.description}</ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <SubmitButton
            type="submit"
            variant="text"
            size="large"
            color="primary"
          >
            Save
          </SubmitButton>
          <Button size="large" color="primary">
            Cancel
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    )
  }
}

export default ListPanel
