import * as actions from './actionTypes'



export const displayPaymentLoader = ()=>{
    return {
        type:actions.DISPLAY_PAYMENT_LOADER,
    }
}

export const hidePaymentLoader = (payload)=>{
    //alert(JSON.stringify(payload))
    return {
        type:actions.HIDE_PAYMENT_LOADER,
        payload: payload
    }
}



// export const fetchAuthStatus = ()=>{
//     return {
//         type:actions.FECTH_AUTH_STATUS
//     }
// }



