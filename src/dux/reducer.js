const initialState = {
    username: ''
}

//ACTION CONSTANTS----------------------------------
const UPDATE_USERNAME = 'UPDATE_USERNAME'



//ACTION BUILDERS----------------------------------
export function updateUsername(username){
    // console.log(username) //---> fred11
    return {
        type: UPDATE_USERNAME,
        payload: username
    }
}

//REDUCER FUNCTION----------------------------------
export default function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_USERNAME:
            return { username: action.payload}
        default: return state
    }
}