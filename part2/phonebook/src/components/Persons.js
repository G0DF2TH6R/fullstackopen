const Persons = ( {filter, persons, shownPersons, handleDelete} ) => {
    return (
        <div>
            {filter.length === 0 ? persons.map((person, i) =>
            <div key={person.id} >
                <p>{person.name} {person.number}</p>
                <button onClick={() => handleDelete(person.id)} >Delete</button>
            </div>) 
            : shownPersons.map((person, i) => 
            <div key={person.id} >
                <p>{person.name} {person.number}</p>
                <button key={person.id} onClick={() => handleDelete(person.id)} >Delete</button>
            </div>)}
        </div>
    )
}

export default Persons