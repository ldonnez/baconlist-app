import React from "react"
import { connect } from "react-redux"
import ListCard from "../ListCard"
import EditListCard from "../EditListCard"
import NewListCard from "../NewListCard"
import Row from "components/Row"
import Column from "components/Column"
import LoadingIndicator from "components/LoadingIndicator"
import { actions } from "../../redux/lists/lists.actions"
import * as selectors from "../../redux/lists/lists.selectors"

class Lists extends React.PureComponent {
  state = {}

  handlePanelChange = identifier => event => {
    const expanded = this.state[identifier] ? false : true
    this.setState({ [identifier]: expanded })
  }

  componentDidMount = () => {
    const { getLists } = this.props
    getLists()
  }

  render () {
    const { lists, editId, loading } = this.props
    const { newList, onCancelNewList } = this.props

    return (
      <React.Fragment>
        <Row>
          { newList &&
             <Column spacing={8} lg={3} md={6} xs={12}>
               <NewListCard onClose={onCancelNewList}/>
             </Column>
          }
          {lists &&
            lists.map(l => {
              if (l.id === editId) {
                return (
                  <Column key={l.id} spacing={8} lg={3} md={6} xs={12}>
                    <EditListCard list={l} />
                  </Column>
                )
              } else {
                return (
                  <Column key={l.id} spacing={8} lg={3} md={6} xs={12}>
                    <ListCard
                      list={l}
                      onChange={this.handlePanelChange}
                      expanded={this.state[l.id] && this.state[l.id]}
                    />
                  </Column>
                )
              }
            })}
        </Row>
        {loading && (
          <Row>
            <Column lg={12} md={12} xs={12}>
              <LoadingIndicator />
            </Column>
          </Row>
        )}
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
    editId: selectors.getEditId(state),
    lists: selectors.getLists(state)
  }
}

export default connect(mapStateToProps,
  mapDispatchToProps)(Lists)
