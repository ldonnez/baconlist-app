import React from "react"
import { connect } from "react-redux"
import ListPanel from "./components/ListPanel"
import NewListPanel from "./components/NewListPanel"
import { actions } from "../../redux/lists/lists.actions"
import * as selectors from "../../redux/lists/lists.selectors"
import * as listsPanelSelectors from "../../redux/listsPanel/listsPanel.selectors"

class Lists extends React.PureComponent {
  state = {
    expanded: null
  }

  handlePanelChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    })
  }

  componentDidMount = () => {
    const { getLists } = this.props
    getLists()
  }

  render() {
    const { lists, newList } = this.props
    return (
      <React.Fragment>
        {newList && <NewListPanel newList={newList} />}
        {lists &&
          lists.map(l => {
            return (
              <ListPanel
                key={l.id}
                list={l}
                onChange={this.handlePanelChange}
                expanded={this.state.expanded}
              />
            )
          })}
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
    lists: selectors.getLists(state),
    newList: listsPanelSelectors.getNewList(state)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lists)
