import React, { PureComponent } from 'react'
import classes from './App.module.css'
// import Radium, { StyleRoot } from 'radium'
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import Aux from '../hoc/Aux'
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

export const AuthContext = React.createContext(false)

class App extends PureComponent {
  constructor(props) {
    super(props)
    console.log('[App.js] Inside Constructor', props)
    this.state = {
      persons: [
        {id: 10, name: 'Mary', age: 48},
        {id: 11, name: 'Claudia', age: 28},
        {id: 12, name: 'Steph', age: 66}
      ],
      Hobbies: 'None',
      showPersons: false,
      toggleCounter: 0,
      isAuthenticated: false
    }
  }
  
  // *************************************************************
  // The way in ES6 and so. Cleaner and doesn't need constructor
  // *************************************************************
  // state = {
  //   persons: [
  //     {id: 10, name: 'Mary', age: 48},
  //     {id: 11, name: 'Claudia', age: 28},
  //     {id: 12, name: 'Steph', age: 66}
  //   ],
  //   Hobbies: 'None',
  //   showPersons: false 
  // }
  // *************************************************************
  
  // ************************************************************
  // DEPRECATED in 17.0
  // ************************************************************
  // componentWillMount() {
    //   console.log('[App.js] Inside componentWillMount()')
    // }
    
  // componentWillUpdate (nextProps, nextState) {
    //   console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState)
    // }
  // *************************************************************
  
  static getDerivedStateFromProps (nextProps, prevState) {
    console.log('[UPDATE App.js] Inside getDerivedStateFromProps()', 
    nextProps, prevState)
    return prevState
  }
  
  getSnapshotBeforeUpdate () {
    console.log('[UPDATE App.js] Inside getSnapshotBeforeUpdate()')
  }

  componentDidUpdate () {
    console.log('[UPDATE App.js] Inside componentDidUpdate()')
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()')
  }
  
  loginHandler = () => {
    this.setState({ isAuthenticated: true })
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
    this.setState((prevState, props) => {
      return {
        showPersons: !show, 
        toggleCounter: prevState.toggleCounter + 1 
      }
    })
  }

  render () {
    console.log('[App.js] Inside render()')
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
          <button onClick={() => this.setState({showPersons: true})}>Show Person</button>
          <Cockpit
            appTitle={this.props.title} 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            login={this.loginHandler}
            switcher={this.switchNameHandler}
            forToogle={this.togglePersonsHandler} />
          <AuthContext.Provider value={this.state.isAuthenticated}>
            {persons}
          </AuthContext.Provider>
        </Aux>
      // </StyleRoot>
    )
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi there!!!'))
  }
}

// export default Radium(App)
export default withClass(App, classes.App)
