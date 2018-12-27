import React, { Component } from 'react'
import classes from './App.module.css'
// import Radium, { StyleRoot } from 'radium'
import Person from './Person/Person'

class App extends Component {
  
  state = {
    persons: [
      {id: 10, name: 'Mary', age: 48},
      {id: 11, name: 'Claudia', age: 28},
      {id: 12, name: 'Steph', age: 66}
    ],
    Hobbies: 'None',
    showPersons: false 
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        {id: 10, name: newName, age: 48},
        {id: 11, name: 'Claudia', age: 28},
        {id: 12, name: 'Steph', age: 1}
      ]
    } )
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id)
    const person = { ...this.state.persons[personIndex] }

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState( {persons: persons} )
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons}) 
  }

  togglePersonsHandler = () => {
    const show = this.state.showPersons
    this.setState( { showPersons: !show } )
  }

  render () {

    const btnStyle = {
      backgroundColor: 'gray',
      color: 'white',
      // ':hover': {
      //   backgroundColor: '#0AF'
      // }
    }

    let persons = null;
    let toogleStyle = '';
    
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((e, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)} 
            name={e.name} 
            age={e.age}
            key={e.id}
            changed={(event) => this.nameChangeHandler(event, e.id)}/>
          })}
        </div> 
      )
      toogleStyle = classes.hide;
    }

    let assignedClasses = []
    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.thin)
    }
    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.purple)
    }

    return (
      // <StyleRoot>
        <div className={classes.App}>
          <h1>Hi there!!!</h1>
          <p className={assignedClasses.join(' ')}>This is really working</p>
          <button style={btnStyle} onClick={ () => this.switchNameHandler('Clotilde')}>Switch name</button>
          <button className={toogleStyle} onClick={ this.togglePersonsHandler }>Toggle Persons</button>
          {persons}
        </div>
      // </StyleRoot>
    )
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi there!!!'))
  }
}

// export default Radium(App)
export default App
