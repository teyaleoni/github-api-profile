const initialState = {
    repos: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'GET_REPOS':
            return {...state, repos: action.repos} 
        default:
            return state
    }
    
}