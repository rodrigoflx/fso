import { useState } from 'react'

const Button = ({handleClick, text}) => 
  <>
    <button onClick={handleClick}>
    {text}
    </button>
  </>

const StatisticLines = ({text, value}) => 
  <tr>
    <td> {text} </td> 
    <td> {value} </td>
  </tr> 

const StatisticLinesPercentage = ({text, value}) =>
  <tr>
    <td> {text} </td> 
    <td> {value}% </td>
  </tr> 

const Statistics = ({good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
      <p> No feedback given</p>
      </>
    )
  } else { 
    return (
      <>
      <h1> Statistics </h1>
      <table>
        <tbody>
          <StatisticLines text='good' value={good} />
          <StatisticLines text='neutral' value={neutral} />
          <StatisticLines text='bad' value={bad} />
          <StatisticLines text='all' value={good+neutral+bad} />
          <StatisticLines text='average' value={(good- bad)/(good+neutral+bad)} />
          <StatisticLinesPercentage text='positive' value={((good)/(good+neutral+bad)) * 100} />
        </tbody>
      </table>
      </> 
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood =  () => setGood(good+1)
  const increaseNeutral = () => setNeutral(neutral+1)
  const increaseBad = () => setBad(bad+1)

  return (
    <div>
      <h1> give Feedback </h1>
      <Button handleClick={increaseGood} text='good'/>
      <Button handleClick={increaseNeutral} text='neutral'/>
      <Button handleClick={increaseBad} text='bad'/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App