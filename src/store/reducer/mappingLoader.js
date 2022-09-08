import * as actionType from '../action/actionTypes'
import { updateObject } from '../../common/redux/index'


const initialState = {
    mapLoader:false,
    // fetchStatus:false,
    msg:"",
    status:"",
    alertStatus: false,

}


const displayMappingLoader = (state,action)=>{
    return updateObject(state,{
        mapLoader:true,
        msg:"",
       status:"",
       alertStatus: false,

    })
}

const hideMappingLoader = (state,action)=>{
    //alert(JSON.stringify(action.payload))
    return updateObject(state,{
        mapLoader:false,
        msg:action.payload?.msg || '',
       status:action.payload?.status || '',
       alertStatus: action.payload?.alertStatus || false,
    })
}
// const fetchAuthStatus = (state,action)=>{
//     return updateObject(state,{
//         fetchStatus:true,
//     })
// }
// const 
const reducer  = (state=initialState,action)=>{

    switch(action.type){
        case actionType.DISPLAY_MAPPING_LOADER:
            return displayMappingLoader(state,action)
        case actionType.HIDE_MAPPING_LOADER:
            return hideMappingLoader(state,action)
        // case actionType.FECTH_AUTH_STATUS:
        //     return fetchAuthStatus(state,action)
        
        default: return state

    }
}

export default reducer