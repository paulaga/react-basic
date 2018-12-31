import React from 'react'
import classes from './Person.module.css'
import WithClass from '../../../hoc/WithClass'
// import Radium from 'radium'

const person = (props) => {
  return (
    <WithClass classes={classes.Person}>
      <p onClick={props.click}>My name is {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name} />
    </WithClass>
  )
}

export default person
// export default Radium(person)
