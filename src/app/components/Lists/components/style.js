import styled from "@emotion/styled"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import Button from "@material-ui/core/Button"
import RemoveButton from "components/RemoveButton"
import TextField from "components/TextField"
import Chip from "@material-ui/core/Chip"

export const StyledCard = styled(Card)(props => {
  return {
    width: "100%"
  }
})

export const StyledCardActions = styled(CardActions)(props => {
  return {
    display: "flex"
  }
})

export const AddTaskButton = styled(Button)`
  margin-left: -8px;
`

export const RemoveTaskButton = styled(RemoveButton)`
  margin-top: 16px;
`

export const TaskField = styled(TextField)`
  width: 50%;
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

export const StyledChip = styled(Chip)`
  width: 50%;
  margin: 4px 0 4px 0;
  border-radius: 4px;
`
