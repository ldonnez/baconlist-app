import React from "react"
import { connect } from "react-redux"
import ListCard from "./components/ListCard"
import Row from "components/Row"
import Column from "components/Column"
import { actions } from "../../redux/lists/lists.actions"
import * as selectors from "../../redux/lists/lists.selectors"

class Lists extends React.PureComponent {
  state = {};

  handlePanelChange = identifier => event => {
    const expanded = this.state[identifier] ? false : true
    this.setState({ [identifier]: expanded })
  };

  componentDidMount = () => {
    const { getLists } = this.props
    getLists()
  };

  render() {
    const { lists } = this.props

    return (
      <React.Fragment>
        <Row>
          {lists &&
            lists.map(l => {
              return (
                <Column key={l.id} spacing={8} lg={3} md={6} xs={12}>
                  <ListCard
                    list={l}
                    onChange={this.handlePanelChange}
                    expanded={this.state[l.id] && this.state[l.id]}
                  />
                </Column>
              )
            })}
        </Row>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getLists: fields => {
      dispatch(actions.get())
    }
  }
}

const mapStateToProps = state => {
  return {
    errors: selectors.getErrors(state),
    loading: selectors.isLoading(state),
    lists: selectors.getLists(state)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lists)
