import * as actionType from '../action/action-type';

export const initialState = {
    humanValue: '0',
    computerValue: '0',
    result:'Start the game',
    name:''
}

export const allReducer = (state = initialState, {type,payload,result,name}) => {
    switch (type) {
        case actionType.HUMAN_ADD_VALUE:
            return { ...state, humanValue: payload,result }
        case actionType.COMPUTER_ADD_VALUE:
            return { ...state,computerValue:payload,result }
        case actionType.DRAW_SCORE:
            return{...state,result}
        case actionType.RESET:
            return{...state,humanValue: payload,computerValue:payload,result}
        case actionType.USERNAME:
            return{...state,name}
        default:
            return state
    }
}

export default allReducer