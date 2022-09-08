import * as actionType from "../../action/actionTypes";
import { updateObject } from "../../../common/redux/index";
const initialState = {
  loginDetails: {},
  status: "",
  msg: "",
  loginStatus: false,
  loader: false,
  registerStatus: false,
  passwordChangeStatus: false,
};
const loginHomePageSuccess = (state, action) => {
  //alert(JSON.stringify(action.payload))
  return updateObject(state, {
    loginDetails: { ...action.payload.userData },
    msg: "LogIn SuccessFully",
    loginStatus: true,
    loader: false,
    status: "200",
  });
};
const loginHomePageFailed = (state, action) => {
  return updateObject(state, {
    status: "400",
    msg: "Invalid Credential Login Failed",
    loginStatus: false,
    loader: false,
  });
};

const registerHomePageSuccess = (state, action) => {
  return updateObject(state, {
    // loginDetails:action.payload,
    status: "200",
    msg: action.msg,
    registerStatus: true,
    loader: false,
  });
};
const registerHomePageFailed = (state, action) => {
  //alert(JSON.stringify(action.msg))
  return updateObject(state, {
    status: "400",
    msg: action.msg,
    loader: false,
  });
};

const homeLoginFlag = (state, action) => {
  let flag = action?.flag;
  if (typeof flag == "undefined") {
    flag = true;
  }
  return updateObject(state, {
    // loginStatus:true,
    loader: flag,
    status: "",
  });
};
const homeRegistrationFlag = (state, action) => {
  return updateObject(state, {
    registerStatus: false,
    loader: true,
    status: "",
  });
};
const resetLoginFlag = (state, action) => {
  return updateObject(state, {
    // loginStatus:true,
    loader: false,
    status: "",
    msg: "",
  });
};

const fetchLoginStatusSuccess = (state, action) => {
  return updateObject(state, {
    loginDetails: { ...action.payload.userData },
    loader: false,
    loginStatus: true,
  });
};

const fetchLoginStatusFail = (state) => {
  return updateObject(state, {
    loader: false,
    loginStatus: false,
  });
};
const loggingOutSuccess = (state) => {
  return updateObject(state, {
    loginStatus: false,
    msg: "LogOut SuccessFully",
  });
};
const loggingOutFail = (state) => {
  return state;
};

const forgotPasswordSendLinkSuccess = (state, action) => {
  return updateObject(state, {
    status: "200",
    msg: action.msg,
    loader: false,
  });
};

const forgotPasswordSendLinkFail = (state, action) => {
  return updateObject(state, {
    status: "400",
    msg: action.msg,
    loader: false,
  });
};

const changeUserPasswordSuccess = (state, action) => {
  return updateObject(state, {
    status: "200",
    msg: action.msg,
    loader: false,
    passwordChangeStatus: true,
  });
};

const changeUserPasswordFail = (state, action) => {
  return updateObject(state, {
    status: "400",
    msg: action.msg,
    loader: false,
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.HOME_LOGIN_PAGE_SUCCESS:
      return loginHomePageSuccess(state, action);
    case actionType.HOME_LOGIN_PAGE_FAIL:
      return loginHomePageFailed(state, action);
    case actionType.HOME_REGISTER_PAGE_SUCCESS:
      return registerHomePageSuccess(state, action);
    case actionType.HOME_REGISTER_PAGE_FAIL:
      return registerHomePageFailed(state, action);
    case actionType.HOME_LOGIN_FLAG:
      return homeLoginFlag(state, action);
    case actionType.HOME_REGISTER_FLAG:
      return homeRegistrationFlag(state, action);
    case actionType.RESET_STATUS_FLAG:
      return resetLoginFlag(state, action);
    case actionType.CHECK_USER_LOGIN_STATUS_SUCCESS:
      return fetchLoginStatusSuccess(state, action);
    case actionType.CHECK_USER_LOGIN_STATUS_FAIL:
      return fetchLoginStatusFail(state, action);
    case actionType.LOGGIN_OUT_API_SUCCESS:
      return loggingOutSuccess(state, action);
    case actionType.LOGGIN_OUT_API_FAIL:
      return loggingOutFail(state, action);
    case actionType.FORGOT_PASSWORD_SEND_LINK_SUCCESS:
      return forgotPasswordSendLinkSuccess(state, action);
    case actionType.FORGOT_PASSWORD_SEND_LINK_FAIL:
      return forgotPasswordSendLinkFail(state, action);
    case actionType.CHANGE_USER_PASSWORD_SUCCESS:
      return changeUserPasswordSuccess(state, action);
    case actionType.CHANGE_USER_PASSWORD_FAIL:
      return changeUserPasswordFail(state, action);

    default:
      return state;
  }
};
// homeLoginFlag
export default reducer;
