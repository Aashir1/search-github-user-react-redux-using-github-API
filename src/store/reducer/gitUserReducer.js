import GitAction from '../action/searchUserAction';

let defaultState = {
    allUsers : []
}

function StoreUser(state = defaultState, action){
    // console.log('decrement state: ', state);
    switch(action.type){
        case GitAction.SAVE_USERS:
            return Object.assign({}, state, {allUsers : [...state.allUsers, action.obj]});
    
        default:
            return state;
    }
}

export default StoreUser;