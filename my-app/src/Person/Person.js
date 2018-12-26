import React from 'react'
import './Person.css'
// import Radium from 'radium'

const person = (props) => {
  // const style = {
  //   '@media(max-width: 500px)': {
  //     color: '#FFF',
  //     backgroundColor: '#667183'
  //   }
  // }
  return (
    <div className='Person'>
      <p onClick={props.click}>My name is {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name} />
    </div>
  )
}

export default person
// export default Radium(person)
