const Header = (prop) => {
  console.log(prop)
  return (
    <h1>{prop.header}</h1>
  )
}

const Part = (prop) => {
  return (
    <p>{prop.part.name + " " + prop.part.exercises}</p>
  )
}

const Content = (prop) => {
  return (
    <>
    {prop.parts.map(element => {
      return <Part part={element}/>;
    })
    }
    </>
  )
}

const Total = (prop) => {
  return (
    <p> Number of exercises {prop.parts.reduce(
      (accumulator, currentValue) => accumulator + currentValue.exercises,
      0
    )} </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header header={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App