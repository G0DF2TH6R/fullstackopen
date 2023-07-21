import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [shownPersons, setShownPersons] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(newNumber)

    if (persons.filter(person => checkNames(person.name, newName)).length > 0) {
      alert(`${newName} is already in the phonebook`)
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber}))
    }
  }

  const checkNames = (name1, name2) => name1 === name2

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit} >
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => <p key={i} >{person.name} {person.number}</p>)}
    </div>
  )
}

export default App