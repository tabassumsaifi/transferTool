import { put} from "redux-saga/effects";
import * as actions from "../../action";
import axios from "../../../axios";
// import { yellow } from "@material-ui/core/colors";

export function* intiatePaymentCallSaga(action) {
    yield put(actions.displayPaymentLoader());  
  try {
    let respData = yield axios("/api/payment", {
      method: "post",
      data: { data: { ...action.payload } },
    });
    console.log("response data", respData.data)
    if (respData.data.status !== 200)
      throw new Error("Invalid request payment not completed");
    yield put(
      actions.initiateStripePaymentCallSuccess("Payment done successfull")
    );
    yield put(
        actions.hidePaymentLoader({
          status: "200",
          msg: respData.data.msg,
          alertStatus: false,
        })
      );

  } catch (error) {
    yield put(actions.initiateStripePaymentCallFail("Payment Failed")
    );
    yield put(actions.hidePaymentLoader());
  }
}

export function* paymentPriceTableDataSaga(action) {
  yield put(actions.displayPaymentLoader());

  try {
    let respData = yield axios("/api/getAmountToPay", {
      method: "get",
      params: { instanceId: action.payload },
      //data: {data:{ ...action.payload }}
    });
    if (respData.data.status !== 200)
      throw new Error("Invalid request payment not completed");
    yield put(
      actions.paymentPriceTableDataSuccess(
        respData.data.data,
        respData.data.msg
      )
    );
    yield put(
      actions.hidePaymentLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (error) {
    yield put(
      actions.paymentPriceTableDataFail(
        error.message ? error.message : error.response.data.message
      )
    );
    yield put(actions.hidePaymentLoader());
  }
}


/**Migration object list  */
export function* fetchMigrationObjectListSaga(action) {
  //alert(action.payload)
    yield put(actions.displayPaymentLoader());
  
    try {
      let respData = yield axios("/api/getSelectedMoList", {
        method: "get",
        params: { instanceId: action.payload },
       
      });
  
      if (respData.data.status !== 200)
        throw new Error("Unable to fecth the Data");
      //alert(JSON.stringify(respData.data.data))
      yield put(
        actions.fetchMigrationObjectListSuccess(
          respData.data.data,
          respData.data.msg
        ) 
      );
      yield put(
        actions.hidePaymentLoader({
          status: "200",
          msg: respData.data.msg,
          alertStatus: false,
        })
      );
    } catch (e) {
      console.log(e);
      yield put(actions.fetchMigrationObjectListFail("Unable to fetch response"));
      yield put(actions.hidePaymentLoader());
    }
  }
  
  /**end migration object list */