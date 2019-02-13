import styled from "@emotion/styled"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import Button from "@material-ui/core/Button"
import RemoveButton from "components/RemoveButton"

export const AddTaskButton = styled(Button)`
  margin-left: -8px;
`

export const RemoveTaskButton = styled(RemoveButton)`
  margin-top: 16px;
`

export const StyledExpansionPanelSummary = styled(ExpansionPanelSummary)`
  display: block;
  padding: 0 0 0 32px;
`

export const StyledExpansionPanelDetails = styled(ExpansionPanelDetails)`
  display: block;
  padding-right: 32px;
  padding-left: 32px;
`
