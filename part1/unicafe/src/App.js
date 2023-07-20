import { useState } from 'react'

const Button = ( {name, handleClick} ) => {

  return (
    <button onClick={handleClick}>{name}</button>
  )
}

const Statistics = ( {good, neutral, bad} ) => {
  const average = (good - bad) / (good + neutral + bad)
  const positive = good / (good + neutral + bad)

  if (good + neutral + bad === 0) return <p>No feedback given</p>

  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={good + neutral + bad} />
        <StatisticsLine text="average" value={average} />
        <StatisticsLine text="positive" value={positive} />
      </tbody>
    </table>
  )
}

const StatisticsLine = ( {text, value} ) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good + 1)
  const addNeutral = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button name="good" handleClick={addGood} />
      <Button name="neutral" handleClick={addNeutral} />
      <Button name="bad" handleClick={addBad} />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App