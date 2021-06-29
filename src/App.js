
import { Component, useState } from 'react'; 
// useState is a hook defined in react
// ---- to provide the functionality of state management in functional components
// useEffect is another hook which 
// ---- to provide lifecycles functionality in functional components
// const { useState } = require('react')
import './App.css';

const names = ["Rahul", "Yash", "Sushant"]

class SideMenuItem extends Component {

  render() {
    // you can put whatever logic you want // 
    return (
      <div className="bg-red-500 p-4 shadow-2xl rounded text-white font-bold w-40 mr-2">
        <div>My Name is {this.props.name}</div>
        <div>{this.props.surname}</div>
        {/* whatever i want to repeat */}
      </div>
    )
  }
}


// a component is nothing but a function that returns some html that is shown on the website
// function SideMenuItem(meriProps) {
//   return(
//     <div className="bg-red-500 p-4 shadow-2xl rounded text-white font-bold w-40 mr-2">
//       <div>My Name is {meriProps.name}</div>
//       <div>My Subtitle</div>
//       {/* whatever i want to repeat */}
//     </div>
//   )
// }

// what kind of conde we write in JS --> javascript
// JSX -- react

function App() {
  // need to have a state from where we get and set the count
  //  declaring the state variable
  // const [variableName, FunctionThatChangesThisVariableInState] = useState(defaultValue)
  const [counter, changeCount] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  const InceaseCount = () => { changeCount(counter + 1) }

  if (!loggedIn) {
    return (
      <div> Please Login First
        <input
          type="button"
          value="Login"
          onClick={
            () => { setLoggedIn(true) }
          } ></input>
      </div>
    )
  }

  return (
    <div className="flex p-4 w-screen flex-wrap">

      {names.map(item => <SideMenuItem name={item} surname="Bawa" />)}

      {/* <h1>Count: {counter} </h1>
      <input type="button" value="Increase Count"
        onClick={InceaseCount} ></input>
      <input type="button" value="Decrease Count"
        onClick={() => { changeCount(counter - 1) }} ></input>
      <input type="button" value="LogOut"
onClick={() => { setLoggedIn(false) }} ></input> */}

    </div>
  );

}

export default App;
