import React, { PureComponent } from 'react'
import Person from './Person/Person'

class Persons extends PureComponent {
  constructor (props) {
    super(props)
    console.log('[Persons.js] Inside Constructor', props)
  }

  componentWillMount () {
    console.log('[Persons.js] Inside componentWillMount()')
  }

  componentDidMount () {
    console.log('[Persons.js] Inside componentDidMount()')
  }

  componentWillReceiveProps (nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps()', nextProps)
  }

  // shouldComponentUpdate() is useful in cases with lots of props, if we want to check whether any prop has changed
  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log('[UPDATE Persons.js] Inside shouldComponentUpdate()', nextProps, nextState)
  //   return nextProps.persons !== this.props.persons ||
  //   nextProps.changed !== this.props.changed ||
  //   nextProps.clicked !== this.props.clicked // In this case it only compares two different objects because we created a new different array
  // }

  componentWillUpdate (nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside componentWillUpdate()', nextProps, nextState)
  }

  componentDidUpdate () {
    console.log('[UPDATE Persons.js] Inside componentDidUpdate()')
  }

  render () {
    console.log('[Persons.js] Inside render()')
    return this.props.persons.map((e, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={e.name}
        age={e.age}
        key={e.id}
        position={index}
        changed={(event) => this.props.changed(event, e.id)} />
    })
  }
}

export default Persons
