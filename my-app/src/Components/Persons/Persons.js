import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
  render () {
    return this.props.persons.map((e, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={e.name}
        age={e.age}
        key={e.id}
        changed={(event) => this.props.changed(event, e.id)} />
    })
  }
}

export default Persons
