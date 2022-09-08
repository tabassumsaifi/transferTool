import * as actions from '../actionTypes';


export const fetchAllSolutions = (payload)=>{
    return {
        type:actions.FETCH_ALL_SOLUTION,
        payload:payload
    }
}

export const fetchAllSolutionsSuccess = (data,msg)=>{
    return {
        type:actions.FETCH_ALL_SOLUTION_SUCCESS,
         data:data,
        msg:msg
    }
}

export const fetchAllSolutionsFail = (msg)=>{
    return {
        type:actions.FETCH_ALL_SOLUTION_FAIL,
        msg:msg
    }
}

export const resetSolutionStatus = ()=>{
    return {
        type:actions.RESET_SOLUTION_STATUS
    }
}

// As per the new updated API for getting list of solutions

export const getAllSolutions = (payload) =>{
    return{
        type:actions.GET_ALL_SOLUTION,
        payload:payload
    }
}

export const getAllSolutionsSuccess = (data, msg) =>{
    return{
        type: actions.GET_ALL_SOLUTION_SUCCESS,
        data: data,
        msg:msg
    }  

}

export const getAllSolutionsFail = (msg) =>{
    return{
        type: actions.GET_ALL_SOLUTION_FAIL,
        msg:msg

    }
}


//for saving selected object
export const saveSelectedObject = (payload) =>{
    return{
        type: actions.SAVE_SELECTEDOJECT,
        payload:payload
    }
  

}


// for setting initial state

export const setIntialState = ()=>{
    return {
        type: actions.SET_INITLA_STATE_FOR_SOLUTION,
    }
}


export const setSelectedTabValue = (payload) =>{

    return{
        type: actions.SET_SELECTED_TAB_VALUE,
        payload:payload
    }

}

// fetching From CRM list

export const fetchFromCrmList = (payload)=>{
    return {
        type:actions.FETCH_FROM_CRM_LIST,
        payload:payload
    }
}

export const fetchFromCrmListSuccess = (data,msg)=>{
    return {
        type:actions.FETCH_FROM_CRM_LIST_SUCCESS,
         data:data,
        msg:msg
    }
}

export const fetchFromCrmListFail = (msg)=>{
    return {
        type:actions.FETCH_FROM_CRM_LIST_FAIL,
        msg:msg
    }
}

// fetching To CRM list

export const fetchToCrmList = (payload)=>{
    //alert(JSON.stringify(payload))
    return {
        type:actions.FETCH_TO_CRM_LIST,
        payload:payload
    }
}

export const fetchToCrmListSuccess = (data,msg)=>{
    return {
        type:actions.FETCH_TO_CRM_LIST_SUCCESS,
         data:data,
        msg:msg
    }
}

export const fetchToCrmListFail = (msg)=>{
    return {
        type:actions.FETCH_TO_CRM_LIST_FAIL,
        msg:msg
    }
}

// fetching complete CRM solution list

export const fetchCrmSolutionList = (payload)=>{
    return {
        type:actions.FETCH_CRM_SOLUTION_LIST,
        payload:payload
    }
}

export const fetchCrmSolutionListSuccess = (data,msg)=>{
    return {
        type:actions.FETCH_CRM_SOLUTION_LIST_SUCCESS,
         data:data,
        msg:msg
    }
}

export const fetchCrmSolutionListFail = (msg)=>{
    return {
        type:actions.FETCH_CRM_SOLUTION_LIST_FAIL,
        msg:msg
    }
}

//reset Selected CRM object
export const resetSelectedCRMObject = ()=>{
    return {
        type:actions.RESET_SELECTED_CRM_OBJECT
    }
}

//for managing and selection of tabs value



export const setTabsValue = (payload) =>{
    return{
        type: actions.SET_TABS_VALUE,
        payload:payload
    }
}


//new migration progress bar

export const newMigrationProgressBar = (payload) =>{
    return{
        type: actions.NEW_MIGRATION_PROGRESS_BAR,
        payload:payload
    }
}