import React, { Component } from 'react'
import classes from './App.module.css'
// import Radium, { StyleRoot } from 'radium'
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import Aux from '../hoc/Aux'
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

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

    let persons = null;
    
    if(this.state.showPersons) {
      persons =
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />
    }

    return (
      // <StyleRoot>
        <Aux>
          <Cockpit
            appTitle={this.props.title} 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            switcher={this.switchNameHandler}
            forToogle={this.togglePersonsHandler} />
          {persons}
        </Aux>
      // </StyleRoot>
    )
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi there!!!'))
  }
}

// export default Radium(App)
export default withClass(App, classes.App)
