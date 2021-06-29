import '../styles/game.css';

const { useState } = require("react");

// Square
const Square = (props) => {

    // The state of a component is only accesible within that component or to the child of that component
    // this state can not be acccesed from a sibling/parent of that component

    return (<button className="square" onClick={() => {
        props.handleSqaureClick(props.id)
    }}>{props.value}</button>)
}

// GameBoard

const GameBoard = (props) => {

    const { handleSqaureClick } = props;

    return (
        <div>
            <div className="board-row">
                <Square value={props.values[0]} id={0} handleSqaureClick={handleSqaureClick} />
                <Square value={props.values[1]} id={1} handleSqaureClick={handleSqaureClick} />
                <Square value={props.values[2]} id={2} handleSqaureClick={handleSqaureClick} />
            </div>
            <div className="board-row">
                <Square value={props.values[3]} id={3} handleSqaureClick={handleSqaureClick} />
                <Square value={props.values[4]} id={4} handleSqaureClick={handleSqaureClick} />
                <Square value={props.values[5]} id={5} handleSqaureClick={handleSqaureClick} />
            </div>
            <div className="board-row">
                <Square value={props.values[6]} id={6} handleSqaureClick={handleSqaureClick} />
                <Square value={props.values[7]} id={7} handleSqaureClick={handleSqaureClick} />
                <Square value={props.values[8]} id={8} handleSqaureClick={handleSqaureClick} />
            </div>

        </div>
    )
}

const GameInfo = (props) => {

    return (<div className="px-40 text-2xl">
        <div> Next Turn : {props.nextPlayer}</div>
        <div> Winner: {props.winner}</div>
        <div> <button onClick={props.resetGame}>Reset</button></div>
    </div>)
}

// GameInfo
// GameHistory
// HistroyRow

const ROWS = [
    [0,1,2], // represents one row of 3 sqaures 
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const App = () => {

    const defaultState = [null, null, null, null, null, null, null, null, null]
    // store the value of all the sqaures in our app component state

    const [values, changeValues] = useState(defaultState);
    const [nextPlayer, changeNextPlayer] = useState('X');
    const [winner, setWinner] = useState(null);

    const resetGame = () => {
        setWinner(null);
        changeValues(defaultState);
        changeNextPlayer('X')
    }


    const calculateWinner = () => {
        // logic to check winner
        // values array has all the values of squares from 0 to 9
        // sqaure position comes from this row array
        // actual value of that square from values array for that square position
        ROWS.forEach((row) => {
            if((values[row[0]] === values[row[1]]) && (values[row[1]] === values[row[2]])){
                setWinner(values[row[0]])
                return
            }
        })

    }

    const handleSqaureClick = (sqaureId) => {
        if(values[sqaureId]) return;
        if(winner) return;

        // set the new value of the square in app state
        const newValues = [...values]
        newValues[sqaureId] = nextPlayer;
        changeValues(newValues);
        // change the next player
        changeNextPlayer((nextPlayer === 'X') ? 'O' : 'X')
        ROWS.forEach((row) => {
            if((newValues[row[0]] === newValues[row[1]]) && (newValues[row[1]] === newValues[row[2]])){
                setWinner(newValues[row[0]])
                return
            }
        })
    }

    return (<div>
        <h1 className="text-2xl">My Tic Tac Toe Game</h1>
        <div className="flex">
            <GameBoard values={values} handleSqaureClick={handleSqaureClick} />
            <GameInfo nextPlayer={nextPlayer} winner={winner} resetGame={resetGame}/>
        </div>

    </div>)

}

export default App;