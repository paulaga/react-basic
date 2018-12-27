import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentdidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error
    })
  }

  render () {
    if(this.state.hasError) {
      return <h1>It seems something went wrong :-(</h1>
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundary
