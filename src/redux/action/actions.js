import * as actionType from './action-type';

export const humanAddValue=data=>{
    return{
        type:actionType.HUMAN_ADD_VALUE,
        payload:data
    }
}
export const computerAddValue=data=>{
    return{
        type:actionType.COMPUTER_ADD_VALUE,
        payload:data
    }
}