import React from "react"

const Header = (props) => {
  return (
    <div>
      <p>{props.course} </p>  
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
     <p>The parts of the course are {props.parts}</p>
   </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Total number of exercises is {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course} />
      <Content parts = {part1 + ', it has' +exercises1 + 'exercises. '+  part2 + 'has ' + exercises2 + ' and ' + part3 + ' has ' + exercises3} />
      <Total total = {exercises1 + exercises2 + exercises3}/>
      <p>
      </p>
    </div>
  )
}
export default App
