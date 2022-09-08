import * as actions from '../actionTypes';


export const loginHomePage = (payload)=>{
   return {
       type:actions.HOME_LOGIN_PAGE,
       payload:payload,

   }
}
export const loginHomePageSuccess = (payload)=>{
    return {
        type:actions.HOME_LOGIN_PAGE_SUCCESS,
        payload:payload,
 
    }
 }
 export const loginHomePageFail = (msg)=>{
    return {
        type:actions.HOME_LOGIN_PAGE_FAIL,
        msg:msg,
 
    }
 }

 /**
  * Register action type
  */

  export const registerHomePage = (payload)=>{
    return {
        type:actions.HOME_REGISTER_PAGE,
        payload:payload,
       
 
    }
 }
 
 
 export const registerHomePageSuccess = (payload, msg)=>{
     return {
         type:actions.HOME_REGISTER_PAGE_SUCCESS,
         payload:payload,
         msg:msg
        
         
  
     }
  }
 
  
 export const registerHomePageFail = (msg)=>{
     return {
         type:actions.HOME_REGISTER_PAGE_FAIL,
         msg:msg,
  
     }
  }

  /**
   * 
   * @returns Registration 
   * @{} Login flag  //
   */

  
   export const resetLoginFlag = ()=>{
    return {
        type:actions.RESET_STATUS_FLAG
    }
}

  export const homeLoginFlag = (flag)=>{
      return {
          type:actions.HOME_LOGIN_FLAG,
          flag:flag
      }
  }
  export const homeRegistrationFlag = ()=>{
    return {
        type:actions.HOME_REGISTER_FLAG
    }
}



/**
 * Chekcing with token weather user is logined or not
 */

export const fetchLoginStatus = ()=>{
    return {
        type:actions.CHECK_USER_LOGIN_STATUS
    }
}

export const fetchLoginStatusSuccess = (payload)=>{
    return {
        type:actions.CHECK_USER_LOGIN_STATUS_SUCCESS,
        payload:payload
    }
}

export const fetchLoginStatusFail = ()=>{
    return {
        type:actions.CHECK_USER_LOGIN_STATUS_FAIL
    }
}



export const loggingOut = ()=>{
    return {
        type:actions.LOGGIN_OUT_API
    }
}

export const loggingOutSuccess = ()=>{
    return {
        type:actions.LOGGIN_OUT_API_SUCCESS
    }
}

export const loggingOutFail = ()=>{
    return {
        type:actions.LOGGIN_OUT_API_FAIL
    }
}

/**
 * Forgot password sending link
 * 
 */

export const forgotPasswordSendLink = (payload)=>{
    return {
        type:actions.FORGOT_PASSWORD_SEND_LINK,
        payload:payload,
    }
}


export const forgotPasswordSendLinkSuccess = (msg)=>{
    return {
        type:actions.FORGOT_PASSWORD_SEND_LINK_SUCCESS,
        msg:msg,
    }
}


export const forgotPasswordSendLinkFail = (msg)=>{
    return {
        type:actions.FORGOT_PASSWORD_SEND_LINK_FAIL,
        msg:msg,
    }
}

/**
 * Password change send api
 */

export const changeUserPassword = (payload)=>{
    return {
        type:actions.CHANGE_USER_PASSWORD,
        payload:payload,
    }
}

export const changeUserPasswordSuccess = (msg)=>{
    return {
        type:actions.CHANGE_USER_PASSWORD_SUCCESS,
        msg:msg,
    }
}

export const changeUserPasswordFail = (msg)=>{
    return {
        type:actions.CHANGE_USER_PASSWORD_FAIL,
        msg:msg,
    }
}