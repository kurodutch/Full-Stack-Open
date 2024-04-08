import React from "react"

const Hello = (props) => {
  console.log(props)
  return (
    <div>
    <p> Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  const age = 10
  const name = 'Pedro'
  return(
    <div>
      <h1>Greeting</h1>
      <Hello name = 'Jorge' age = {26+age} />
      <Hello name = {name} age = {age}/>
    </div>
  )

  /*return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'Hello world, it is', now.toString()
    ),  
    React.createElement(
      'p', null, a, ' plus ', b, ' is ', a+b
    )
  ) */ 


  /*console.log(now, a+b)
  //return (
   // <div>
    //  <p>Hello World, it is {now.toDateString()}</p>
     // <p>
      //  {a} plus {b} is {a+b}
      //</p>
    //</div>
)*/
}

export default App
