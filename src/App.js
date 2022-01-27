import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (!all) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} percentage/>
        </tbody>
      </table>
    </>
  )
}

const StatisticLine = ({ text, value, percentage }) => (
  <tr>
    <td>{text}</td>  
    <td>{`${value}${percentage ? ' %' : ''}`}</td>
  </tr>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = ((good - bad) / all).toFixed(1)
  const positive = ((good * 100) / all).toFixed(1)

  const addToGood = number => () => setGood(number)

  const addToNeutral = number => () => setNeutral(number)
  
  const addToBad = number => () => setBad(number)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={addToGood(good + 1)} text="good" />
      <Button handleClick={addToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={addToBad(bad + 1)} text="bad" />
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App
