import React from "react"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { StyledCard } from "./style"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Collapse from "@material-ui/core/Collapse"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import MoreVertIcon from "@material-ui/icons/MoreVert"

class ListCard extends React.PureComponent {
  render() {
    const { list, onChange, expanded } = this.props
    return (
      <StyledCard raised>
        <CardHeader
          avatar={<Avatar aria-label="List">{ list.name.charAt(0).toUpperCase() }</Avatar>}
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={list.name}
          subheader={new Date(list.due_to).toDateString()}
        />

        <CardContent>
          <Typography component="p">
            { list.description }
          </Typography>
        </CardContent>
        <CardActions disableActionSpacing>
          <IconButton
            onClick={onChange(list.id)}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
          </CardContent>
        </Collapse>
      </StyledCard>
    )
  }
}

export default ListCard
