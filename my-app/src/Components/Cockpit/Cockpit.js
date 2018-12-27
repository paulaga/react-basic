import React from 'react'
import classes from './Cockpit.module.css'

const cockpit = (props) => {
  const btnStyle = {
    backgroundColor: 'gray',
    color: 'white'
  }
  let assignedClasses = []
  let toogleStyle = ''

  if (props.showPersons) {
    toogleStyle = classes.hide
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.thin)
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.purple)
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button style={btnStyle} onClick={() => props.switcher('Clotilde')}>Switch name</button>
      <button className={toogleStyle} onClick={props.forToogle}>Toggle Persons</button>
    </div>
  )
}

export default cockpit
