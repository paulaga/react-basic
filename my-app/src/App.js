import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  
  state = {
    persons: [
      { name: 'Mary', age: 48},
      { name: 'Claudia', age: 28},
      { name: 'Steph', age: 66}
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

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Leticia', age: 48},
        { name: event.target.value, age: 28},
        { name: 'Steph', age: 89}
      ]
    } )
  }

  togglePersonsHandler = () => {
    const show = this.state.showPersons
    this.setState( { showPersons: !show } )
  }

  render () {

    const btnStyle = {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: '2px 2px 4px gray',
      padding: '5px 10px',
      borderRadius: '10px',
      outline: 'none',
      cursor: 'pointer'
    }

    return (
      <div className='App'>
        <h1>Hi there!!!</h1>
        <p>This is really working</p>
        <button style={btnStyle} onClick={ () => this.switchNameHandler('Clotilde')}>Switch name</button>
        <button onClick={ this.togglePersonsHandler }>Show Persons</button>
        {this.state.showPersons ?
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.Hobbies}
              click={this.switchNameHandler.bind(this, 'Max')}
              changed={this.nameChangeHandler}/>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}/>
          </div> : null
        }
      </div>
    )
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi there!!!'))
  }
}

export default App
