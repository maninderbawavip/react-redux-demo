import { connect } from "react-redux"
import { incrementCount } from "../redux/store"

const Counter = (props) => {
    console.log(props)
    return (<div>
        <h1>Count: {props.count}</h1>
        <h1>{props.name}</h1>
        <input type="button" value="Increase Count"
           onClick={() => props.dispatch(incrementCount())} ></input>
    </div>)
}

// putStateInProps

// get the state from the store and put it in the props of this component
const putStateInProps = (storeState) => {
    // interface between store and your component
    // store = {
    //     count: 0,
    //     user: "Maninder"
    // }
    return ({
        count: storeState.count,
        name: storeState.user 
    })
}

export default connect(putStateInProps)(Counter)