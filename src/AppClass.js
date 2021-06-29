import { Component } from "react";

class App extends Component {

    constructor(props) {
        super(props)

        console.log('constructor')
        this.state = {
            counter: 0
        }
    }

    InceaseCount = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1>Count: {this.state.counter} </h1>
                <input type="button" value="Increase Count"
                    onClick={this.InceaseCount} ></input>
            </div>
        )
    }

    componentDidMount() {
        console.log("component did mount")
    }

    componentDidUpdate() {
        console.log("component did update")
    }
}

export default App;