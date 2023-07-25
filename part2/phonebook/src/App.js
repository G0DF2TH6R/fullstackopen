import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/personService'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [shownPersons, setShownPersons] = useState([])
  const [message, setMessage] = useState('')
  const [goodNotification, setGoodNotification] = useState(true)

  useEffect(() => {
    personService
    .getAll()
    .then(response => setPersons(response))
  }, [])

  const handleNotification = (message, type) => {
    setMessage(message)
    setGoodNotification(type)
    setTimeout(() => {
      setMessage('')
    }, 3000)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const matchingPerson = persons.filter(person => checkNames(person.name, newName))

    if (matchingPerson.length > 0) {
      if (window.confirm(`${newName} is already in the phonebook, would you like to update his/her phone number?`)) {
        const updatedPerson = {...matchingPerson[0], number: newNumber}
        handleNumberUpdate(updatedPerson)
        handleNotification(`Changed ${updatedPerson.name}'s phone number to ${newNumber}`)
      }
    } else {
      personService.create({name: newName, number: newNumber})
      setPersons(persons.concat({ name: newName, number: newNumber}))
      handleNotification(`Added ${newName}`, true)
    }
  }

  const checkNames = (name1, name2) => name1.toLowerCase() === name2.toLowerCase()

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberUpdate = (newPerson) => {
    const newPersons = persons.map(person => person.id !== newPerson.id ? person : newPerson)

    personService
    .update(newPerson.id, newPerson)
    .then(setPersons(newPersons))    
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    const newFilter = event.target.value

    setFilter(newFilter)
    
    const matchingNames = persons.filter(person => person.name.toLowerCase().includes(newFilter))

    setShownPersons(matchingNames)
  }

  const handlePersonDelete = (id) => {
    const newPersons = () => persons.filter(person => person.id !== id)

    personService
    .remove(id)
    .then(setPersons(newPersons))
    .catch(error => {
      handleNotification(`This person has already been removed!`, false)
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification type={goodNotification} message={message} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <PersonForm handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} handleSubmit={handleSubmit} newNumber={newNumber} newName={newName} />
      <h2>Numbers</h2>
      <Persons handleDelete={handlePersonDelete} filter={filter} persons={persons} shownPersons={shownPersons} />
    </div>
  )
}

export default App