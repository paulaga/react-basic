import React, { Component } from 'react'
import propTypes from 'prop-types'
import classes from './Person.module.css'
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux'
import { AuthContext } from '../../../containers/App'
// import Radium from 'radium'

class person extends Component {
  constructor (props) {
    super(props)
    console.log('[person.js] Inside Constructor', props)
  }

  componentWillMount () {
    console.log('[person.js] Inside componentWillMount()')
  }

  componentDidMount () {
    console.log('[person.js] Inside componentDidMount()')
    if (this.props.position === 0) {
      this.inputElement.focus()
    }
  }

  render () {
    console.log('[person.js] Inside render()')
    return (
      <Aux>
        <AuthContext.Consumer>
          { auth => auth ? <p className={classes.log}>It's Authenticated</p> : null}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input
          type='text'
          ref={(inp) => { this.inputElement = inp }}
          onChange={this.props.changed}
          value={this.props.name} />
      </Aux>
    )
  }
}

person.propTypes = {
  click: propTypes.func,
  name: propTypes.string,
  age: propTypes.number,
  changed: propTypes.func
}

export default withClass(person, classes.Person)
// export default Radium(person)
