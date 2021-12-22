import * as actionType from '../action/action-type';

export const initialState={
    humanValue:0,
    computerValue:0
}

export const allReducer=(state=initialState,{type})=>{
    switch(type){
        case actionType.HUMAN_ADD_VALUE:
            return {...state,humanValue:+1}
        case actionType.COMPUTER_ADD_VALUE:
            return{...state,computerValue:+1}
        default:
            return state
    }
}

export default allReducer