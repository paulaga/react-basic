import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  
  state = {
    persons: [
      { id: 10, name: 'Mary', age: 48},
      { id: 11, name: 'Claudia', age: 28},
      { id: 12, name: 'Steph', age: 66}
    ],
    Hobbies: 'None',
    showPersons: false 
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: 48},
        { name: 'Claudia', age: 28},
        { name: 'Steph', age: 1}
      ]
    } )
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id)
    const person = { ...this.state.persons[personIndex] }
    // Or const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState( {persons: persons} )
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice;
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
    }
    const toogleStyle = {
      backgroundColor: '#73a1e6',
      color: 'white',
    }

    let persons = null;
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
    }

    return (
      <div className='App'>
        <h1>Hi there!!!</h1>
        <p>This is really working</p>
        <button style={btnStyle} onClick={ () => this.switchNameHandler('Clotilde')}>Switch name</button>
        <button style={toogleStyle} onClick={ this.togglePersonsHandler }>Toggle Persons</button>
        {persons}
      </div>
    )
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi there!!!'))
  }
}

export default App
