import React from "react"
import SignUpForm from "./components/SignUpForm"
import CenteredCard from "components/CenteredCard"
import LinkButton from "components/LinkButton"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"


class SignUpView extends React.PureComponent {
  render () {
    return (
      <CenteredCard width="450px" height="560px" padding="8px">
        <CardContent>
          <Typography gutterBottom variant="h5" align="center">
            Sign Up
          </Typography>
          <SignUpForm/>
        </CardContent>
        <CardActions>
          <LinkButton fullWidth size="small" to="/signin">Back</LinkButton>
        </CardActions>
      </CenteredCard>
    )
  }
}

export default SignUpView
