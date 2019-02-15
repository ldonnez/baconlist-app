import React from "react"

const withLayout = (WrappedComponent, validate) => {
  return class RenderLayout extends React.PureComponent {
    render() {

      return <WrappedComponent {...this.props} />
    }
  }
}

export default withLayout
