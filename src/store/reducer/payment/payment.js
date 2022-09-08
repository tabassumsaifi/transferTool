import * as actionType from "../../action//actionTypes";
import { updateObject } from "../../../common/redux/index";

const intialState = {
  paymentObj: {},
  status: "",
  msg: "",
  loader: false,
  priceTableData: [],
  paymentStatus: null,
  paymentFail: null,
  migrationObjectList:[]
};

const initiateStripePaymentCallSuccess = (state, action) => {
  return updateObject(state, {
    paymentStatus: true,
    status: "200",
    msg: "Payment done successfully",
    // loader: false,
  });
};

// const initiateStripePaymentCallSuccess=(state,action)=>{
//     return updateObject(state,{
//         status:"200",
//         msg:"Payment done successfully"
//     })
// }

const initiateStripePaymentCallFail = (state, action) => {
  //alert(JSON.stringify(state.paymentFail))
  return updateObject(state, {
    paymentFail:true,
    paymentStatus: null,
    status: "400",
    msg: "Payment Failed",
  });
};

const resetPayMentStatus = (state, action) => {
  return updateObject(state, {
    status: "",
    msg: "",
    // loader: action.status,
  });
};

/**PAYMENT PRICING TABLE */
const paymentPriceTableDataSuccess = (state, action) => {
  return updateObject(state, {
    priceTableData: action.payload,
    status: "200",
    msg: "Fetch pricing data successfully",
  });
};

const paymentPriceTableDataFail = (state, action) => {
  return updateObject(state, {
    status: "400",
    msg: "Pricing data fail",
  });
};

/**END */


/**FETCH MIGRATION OBJECT LIST */
  
const fetchMigrationObjectListSuccess = (state, action) =>{
  //alert(JSON.stringify(action.payload))
    return updateObject(state,{
      migrationObjectList:action.payload,
      status: "200",
      msg: action.msg,
  
    })
  }
  const fetchMigrationObjectListFail = (state, action) =>{
    return updateObject(state,{
      msg: action.msg,
      status: "400",
  
    })
  
  }
/**END  */


//resetPaymentFailFlags
const resetPaymentFailFlags = (state, action) => {
  return updateObject(state, {
    paymentFail:null,
    paymentStatus: null,
    
  });
};



/**RESERT PAYMENT FLAGS */
const resetPaymentFlags = (state, action) => {
  return updateObject(state, {
    priceTableData: [],
    paymentFail:null,
    paymentStatus: null,
    migrationObjectList:[],
  });
};


const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionType.INITIATE_PAYMENT_CALL_SUCCESS:
      return initiateStripePaymentCallSuccess(state, action);
    case actionType.INITIATE_PAYMENT_CALL_FAIL:
      return initiateStripePaymentCallFail(state, action);
    case actionType.RESET_PAYMENT_STATUS:
      return resetPayMentStatus(state, action);
    /**payment price table data */
    case actionType.PAYMENT_PRICE_TABLE_DATA_SUCCESS:
      return paymentPriceTableDataSuccess(state, action);
    case actionType.PAYMENT_PRICE_TABLE_DATA_FAIL:
      return paymentPriceTableDataFail(state, action);
    //reset Payment Flags
    case actionType.RESET_PAYMENT_FLAGS:
      return resetPaymentFlags(state, action);

    //resetPaymentFailFlags
    case actionType.RESET_PAYMENT_FAIL_FLAGS:
      return resetPaymentFailFlags(state, action);

    //fetch migration object list
    case actionType.MIGRATION_OBJECT_LIST_SUCCESS:
      return fetchMigrationObjectListSuccess(state, action);
    case actionType.MIGRATION_OBJECT_LIST_FAIL:
      return fetchMigrationObjectListFail(state, action);  

    default:
      return state;
  }
};

export default reducer;
