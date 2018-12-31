import React from 'react'
import classes from './Person.module.css'
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux'
// import Radium from 'radium'

const person = (props) => {
  return (
    <Aux>
      <p onClick={props.click}>My name is {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name} />
    </Aux>
  )
}

export default withClass(person, classes.Person)
// export default Radium(person)
