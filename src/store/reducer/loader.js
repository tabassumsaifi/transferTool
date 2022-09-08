import * as actionType from '../action/actionTypes'
import { updateObject } from '../../common/redux/index'


const initialState = {
    loader:false,
    fetchStatus:false,
    msg:"",
    status:"",
    alertStatus: false,

}


const displayLoader = (state,action)=>{
    return updateObject(state,{
        loader:true,
        msg:"",
       status:"",
       alertStatus: false,

    })
}

const displayHide = (state,action)=>{
    //alert(JSON.stringify(action.payload))
    return updateObject(state,{
        loader:false,
        msg:action.payload?.msg || '',
       status:action.payload?.status || '',
       alertStatus: action.payload?.alertStatus || false,
    })
}
const fetchAuthStatus = (state,action)=>{
    return updateObject(state,{
        fetchStatus:true,
    })
}
// const 
const reducer  = (state=initialState,action)=>{

    switch(action.type){
        case actionType.DISPLAY_LOADER:
            return displayLoader(state,action)
        case actionType.HIDE_LODER:
            return displayHide(state,action)
        case actionType.FECTH_AUTH_STATUS:
            return fetchAuthStatus(state,action)
        
        default: return state

    }
}

export default reducer