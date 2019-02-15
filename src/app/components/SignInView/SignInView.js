import React from "react"
import SignInForm from "./components/SignInForm"
import CenteredCard from "components/CenteredCard"
import LinkButton from "components/LinkButton"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"


class SignInView extends React.PureComponent {
  render() {
    return (
      <CenteredCard width="450px" height="332px" padding="8px">
        <CardContent>
          <Typography gutterBottom variant="h5" align="center">
            Sign In
          </Typography>
          <SignInForm/>
        </CardContent>
        <CardActions>
          <LinkButton fullWidth size="small" to="/signup">Sign up here</LinkButton>
        </CardActions>
      </CenteredCard>
    )
  }
}

export default SignInView
