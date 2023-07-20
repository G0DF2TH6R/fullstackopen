import { useState } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const handleVote = (index) => {
    const copy = [...points]
    copy[index] += 1
    setPoints(copy)
  }
  
  const AnecdoteOfTheDay = () => {
    let mostVotesIndex = 0;
    
    for (let i = 0; i < anecdotes.length; i++) {
      if (points[i] >= points[mostVotesIndex]) {
        mostVotesIndex = i
      }
    }
    
    return (
      <p>{anecdotes[mostVotesIndex]}</p>
    )
  }
  
  const [points, setPoints] = useState([0,0,0,0,0,0,0,0])
  const [selected, setSelected] = useState(0)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>Has {points[selected]} votes</p>
      <button onClick={() => handleVote(selected)}>Vote</button>
      <button onClick={() => setSelected(getRandomInt(anecdotes.length))}>Next anecdote</button>
      <h2>Anecdote with the most votes</h2>
      <AnecdoteOfTheDay/>


    </div>
  )
}

export default App