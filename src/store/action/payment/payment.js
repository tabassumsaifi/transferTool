import * as actions from '../actionTypes';




export const initiateStripePaymentCall = (payload)=>{
    //alert(JSON.stringify(payload))
    return {
        type:actions.INITIATE_PAYMENT_CALL,
        payload:payload
    }
}

export const initiateStripePaymentCallSuccess = (msg)=>{
    return {
        type:actions.INITIATE_PAYMENT_CALL_SUCCESS,
        msg:msg
    }
}


export const initiateStripePaymentCallFail = (msg)=>{
    return {
        type:actions.INITIATE_PAYMENT_CALL_FAIL,
        msg:msg
    }
}

export const resetPayMentStatus = (status)=>{
    return {
        type:actions.RESET_PAYMENT_STATUS,
        status:status
    }

}

/**price table data data */
export const paymentPriceTableData = (payload)=>{
    //alert(JSON.stringify(payload))
    return {
        type:actions.PAYMENT_PRICE_TABLE_DATA,
        payload:payload
    }
}

export const paymentPriceTableDataSuccess = (payload)=>{
    return {
        type:actions.PAYMENT_PRICE_TABLE_DATA_SUCCESS,
        payload:payload
    }
}


export const paymentPriceTableDataFail = (msg)=>{
    return {
        type:actions.PAYMENT_PRICE_TABLE_DATA_FAIL,
        msg:msg
    }
}

/**reset payment flags */

export const resetPaymentFlags = () =>{
    return {
        type:actions.RESET_PAYMENT_FLAGS        
    }

}

/**reset payment fail flag */

export const resetPaymentFailFlags = () =>{
    return {
        type:actions.RESET_PAYMENT_FAIL_FLAGS        
    }

}

//FETCH MIGRATION OBJECT LIST
export const fetchMigrationObjectList = (payload) =>{
    //alert(JSON.stringify(payload))
    return{
      type:actions.MIGRATION_OBJECT_LIST,
      payload:payload
  
    }
  }
  
  export const fetchMigrationObjectListSuccess = (payload) =>{
    //alert(JSON.stringify(payload))
  return{
    type:actions.MIGRATION_OBJECT_LIST_SUCCESS,
    payload:payload
  }
  }
  
  export const fetchMigrationObjectListFail = (msg) =>{
    return{
      type:actions.MIGRATION_OBJECT_LIST_FAIL,
      msg:msg
    }
  }