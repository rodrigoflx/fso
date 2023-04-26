const Header = ({header}) => {
  return (
    <h1>{header}</h1>
  )
}

const Part = ({part : {name, exercises}}) => {
  return (
    <p>{name + " " + exercises}</p>
  )
}

const Content = ({parts}) => {
  return (
    <>
    {parts.map(element => {
      return <Part part={element}/>;
    })
    }
    </>
  )
}

const Total = ({parts}) => {
  return (
    <p> Number of exercises {parts.reduce(
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