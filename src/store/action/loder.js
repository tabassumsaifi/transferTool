import * as actions from './actionTypes'



export const displayLoader = ()=>{
    return {
        type:actions.DISPLAY_LOADER,
    }
}

export const hideLoader = (payload)=>{
    //alert(JSON.stringify(payload))
    return {
        type:actions.HIDE_LODER,
        payload: payload
    }
}



export const fetchAuthStatus = ()=>{
    return {
        type:actions.FECTH_AUTH_STATUS
    }
}



