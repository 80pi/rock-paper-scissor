import * as actionType from './action-type';

export const humanAddValue=({data,result})=>{
    return{
        type:actionType.HUMAN_ADD_VALUE,
        payload:data,
        result
    }
}
export const computerAddValue=({data,result})=>{
    return{
        type:actionType.COMPUTER_ADD_VALUE,
        payload:data,
        result
    }
}


export const drawValue=(result)=>{
    return{
        type:actionType.DRAW_SCORE,
        result
    }
}

export const resetValue=({data,result})=>{
    return{
        type:actionType.RESET,
        payload:data,
        result
    }
}

export const reduxName=(name)=>{
    return{
        type:actionType.USERNAME,
        name
    }
}
