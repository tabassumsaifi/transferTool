import { put } from 'redux-saga/effects';
import * as actions from '../../action';
import axios from '../../../axios';


export function* homeLoginPageSaga(action) {
    //alert(JSON.stringify(action))
  yield put(actions.displayLoader())
  try {
    // alert('test')
    const respData = yield axios('api/login', {
      method: 'post',
      data: action.payload,
    });
    console.log('login response', respData.data);
    if (respData.data.status !== 200) throw new Error('Invalid Credential');
    yield put(actions.loginHomePageSuccess(respData.data, respData.data.msg));
    yield put(actions.hideLoader({status:"200", msg:respData.data.msg, alertStatus:true}))
  } catch (e) {
    //    alert('error')
    console.log(e.message);
    yield put(actions.loginHomePageFail('Invalid Credential'));
    yield put(actions.hideLoader({status:"400", msg:'Invalid Credential', alertStatus:true}))
    // alert('somthing went wrongs')
  }
}

export function* homeRegisterPageSaga(action) { 
  yield put(actions.displayLoader())
  try {    
    const respData = yield axios('api/register', {
      method: 'post',
      data: action.payload,
      
    });
   console.log('error message', respData.data.msg);
    //alert(JSON.stringify(respData.data.msg))
    if (respData.data.status !== 200)  throw new Error(respData.data.msg);
    yield put(actions.registerHomePageSuccess(respData.data.data, respData.data.msg));
    yield put(actions.hideLoader({status:"200", msg:respData.data.msg, alertStatus:true}))
  } catch (e) {
    //alert(JSON.stringify(e))
    yield put(actions.registerHomePageFail(e.message));
    yield put(actions.hideLoader({status:"400", msg:'User already exist', alertStatus:true}))
    //alert('somthing went wrongs')
  }
}
//api/check
export function* checkUserLoginStatus(action) {
  try {
    const respData = yield axios('api/check', {
      method: 'post',
    });
    if (respData.data.status !== 200) throw new Error('Not loged in');
    yield put(actions.fetchLoginStatusSuccess(respData.data));
    yield put(actions.fetchAuthStatus());
  } catch (e) {
    yield put(actions.fetchLoginStatusFail(''));
    yield put(actions.fetchAuthStatus());
  }
}

/**
 * Logging out API call with no parameters
 */

export function* loggingOutSaga(action) {
 //  alert(JSON.stringify(action))
  yield put(actions.displayLoader())
  try {
    const respData = yield axios('api/logout', {
      method: 'post',
    });
    console.log(respData.data)
    if (respData.data.status !== 200) throw new Error('Log out failed');

    yield put(actions.loggingOutSuccess(''));
    yield put(actions.hideLoader({status:"200", msg:respData.data.msg, alertStatus:true}))
  } catch (e) {
    console.log(e);
    yield put(actions.loggingOutFail(''));
    yield put(actions.hideLoader({status:"400", msg:'Log out Failed', alertStatus:true}))
  }
}

/**
 * Logging out
 *
 */

export function* forgotpasswordSaga(action) {
  // alert(JSON.stringify(action.payload));
  try {
    const respData = yield axios('api/forgotpassword', {
      method: 'post',
      data: action.payload,
    });
    // console.log(respData.data)
    if (respData.data.status !== 200) throw new Error('Log out success fully');
    yield put(actions.forgotPasswordSendLinkSuccess(respData.data.msg));
    yield put(actions.hideLoader({status:"200", msg:respData.data.msg, alertStatus:true}))
  } catch (e) {
    console.log(e);
    yield put(
      actions.forgotPasswordSendLinkFail(e.message || 'Email not registered')
    ); 
    yield put(actions.hideLoader({status:"400", msg:'Email not registered or Invalid Email', alertStatus:true}))
  }
}

export function* changeUserPasswordSaga(action) {
  try {
    let token = action.payload.token;
    delete action.payload.token;
    let respData = yield axios('/api/changePassword', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
      method: 'post',
      data: action.payload,
    });

    if (respData.data.status !== 200)
      throw new Error('Unbale to change your password');
    yield put(
      actions.changeUserPasswordSuccess('Password Change successFully')
    );
  } catch (e) {
    console.log(e);
    yield put(actions.changeUserPasswordFail('Unbale to change your password'));
  }
}
