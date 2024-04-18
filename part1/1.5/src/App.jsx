import React from "react"

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.course} </p>  
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
    <p>los cursos son {props.parts} </p>
   </div>
  )
}

const Total = (props) => {
  console.log('dentro de total' + props)
  return (
    <div>
      <p>Total number of exercises is {props.parts}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name:'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React ',
      exercises: 10
    },
    {
      name: 'Using props to pass data ',
      exercises: 7
    },
    {
      name: 'State of a component ',
      exercises: 14
    }
  ]
}

  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts[0].name + '' + course.parts[1].name + '' + course.parts[2].name}/>
      <Total parts = {course.parts[0].exercises + course.parts[1].exercises}/>
      <p>
      </p>
    </div>
  )
}
//<Content parts = {part1 + ', it has' +exercises1 + 'exercises. '+  part2 + 'has ' + exercises2 + ' and ' + part3 + ' has ' + exercises3} />//
export default App
