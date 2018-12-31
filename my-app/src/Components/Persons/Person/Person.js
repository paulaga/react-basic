import React, { Component } from 'react'
import classes from './Person.module.css'
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux'
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
  }

  render () {
    console.log('[person.js] Inside render()')
    return (
      <Aux>
        <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type='text' onChange={this.props.changed} value={this.props.name} />
      </Aux>
    )
  }
}

export default withClass(person, classes.Person)
// export default Radium(person)
