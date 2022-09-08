import * as actionType from '../action/actionTypes'
import { updateObject } from '../../common/redux/index'


const initialState = {
    loader:false,
    fetchStatus:false,
    msg:"",
    status:"",
    alertStatus: false,

}


const displayPaymentLoader = (state,action)=>{
    return updateObject(state,{
        loader:true,
        msg:"",
       status:"",
       alertStatus: false,

    })
}

const hidePaymentLoader = (state,action)=>{
    //alert(JSON.stringify(action.payload))
    return updateObject(state,{
        loader:false,
        msg:action.payload?.msg || '',
       status:action.payload?.status || '',
       alertStatus: action.payload?.alertStatus || false,
    })
}

// const 
const reducer  = (state=initialState,action)=>{

    switch(action.type){
        case actionType.DISPLAY_PAYMENT_LOADER:
            return displayPaymentLoader(state,action)
        case actionType.HIDE_PAYMENT_LOADER:
            return hidePaymentLoader(state,action)
        
        
        default: return state

    }
}

export default reducer