import { useState } from 'react'

const Button = ({handleClick, text}) => 
  <>
    <button onClick={handleClick}>
    {text}
    </button>
  </>

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
      <h1> Statistics </h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good+neutral+bad}</p>
      <p>average {(good- bad)/(good+neutral+bad)}</p>
      <p>positive {(good)/(good+neutral+bad)}%</p>
    </div>
  )
}

export default App