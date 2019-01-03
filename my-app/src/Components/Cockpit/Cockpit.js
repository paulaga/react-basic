import React from 'react'
import classes from './Cockpit.module.css'
import Aux from '../../hoc/Aux'

const cockpit = (props) => {
  const btnStyle = {
    backgroundColor: '#51b879',
    color: 'white'
  }
  let assignedClasses = []
  let toogleStyle = classes.Button

  if (props.showPersons) {
    toogleStyle = [classes.Button, classes.hide].join(' ')
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.thin)
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.purple)
  }

  return (
    <Aux>
      {/* Could use simple <> </> or <Fragment> imported from React, {Fragment} */}
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button className={classes.login} onClick={props.login}>Login</button>
      <button style={btnStyle} onClick={() => props.switcher('Clotilde')}>Switch name</button>
      <button className={toogleStyle} onClick={props.forToogle}>Toggle Persons</button>
    </Aux>
  )
}

// React memo is a hoc that wraps functional components
export default React.memo(cockpit)
