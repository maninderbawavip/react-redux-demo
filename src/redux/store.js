import { combineReducers, createStore } from "redux";

const INITIAL_STATE = 0;

const ACTION_TYPES = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT"
}

//action creator
export const incrementCount = () => ({ type: ACTION_TYPES.INCREMENT })  // action that needs to be dispatched - sent to the store
export const decrementCount = () => ({ type: ACTION_TYPES.DECREMENT })  // action that needs to be dispatched

const CountReducer = (state=INITIAL_STATE, action) => {

    // logic to produce new state based upon the action

    if(action.type === ACTION_TYPES.INCREMENT){
        return state + 1
    }
    if(action.type === ACTION_TYPES.DECREMENT) {
        return state - 1
    }

    return state;
}

const UserReducer = (state="Maninder", action) => {
    return state
}

// export const store = createStore(UserReducer)
// store = Maninder

// export const store = createStore(CountReducer)
// store = 0

const rootReducer = combineReducers({
    count: CountReducer,
    user: UserReducer
})

// store = {
//     count: 0,
//     user: "Maninder"
// }

export const store = createStore(rootReducer)


