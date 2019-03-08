import styled from "@emotion/styled"
import ListItem from "@material-ui/core/ListItem"
import theme from "../../theme"

export const StyledListItem = styled(ListItem)(props => {
  return {
    backgroundColor: props.active ? theme.palette.background.default : theme.palette.background.paper
  }
})
