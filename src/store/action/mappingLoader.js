import * as actions from './actionTypes'



export const displayMappingLoader = ()=>{
    return {
        type:actions.DISPLAY_MAPPING_LOADER,
    }
}

export const hideMappingLoader = (payload)=>{
    //alert(JSON.stringify(payload))
    return {
        type:actions.HIDE_MAPPING_LOADER,
        payload: payload
    }
}



// export const fetchAuthStatus = ()=>{
//     return {
//         type:actions.FECTH_AUTH_STATUS
//     }
// }



