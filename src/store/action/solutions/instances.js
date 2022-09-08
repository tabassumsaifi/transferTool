import * as actions from "../actionTypes";

export const fetchSolutionInstances = () => {
  return {
    type: actions.FETCH_SOLUTION_INSTANCES,
  };
};

export const fetchSolutionInstancesSuccess = (payload) => {
  return {
    type: actions.FETCH_SOLUTION_INSTANCES_SUCCESS,
    payload: payload,
  };
};

export const fetchSolutionInstancesFail = (msg) => {
  return {
    type: actions.FETCH_SOLUTION_INSTANCES_FAIL,
    msg: msg,
  };
};

export const deleteSolutionInstances = (payload) => {
  // alert(payload)
  return {
    type: actions.DELETE_SOLUTION_INSTANCES,
    payload: payload,
  };
};

export const deleteSolutionInstancesSuccess = (payload) => {
  return {
    type: actions.DELETE_SOLUTION_INSTANCES_SUCCESS,
    payload: payload,
  };
};

export const deleteSolutionInstancesFail = (msg) => {
  return {
    type: actions.DELETE_SOLUTION_INSTANCES_FAIL,
    msg: msg,
  };
};

export const changeStatusSolutionInstances = (payload) => {
  // alert(payload)
  return {
    type: actions.CHANGE_STATUS_SOLUTION_INSTANCES,
    payload: payload,
  };
};

export const changeStatusSolutionInstancesSuccess = (payload) => {
  return {
    type: actions.CHANGE_STATUS_SOLUTION_INSTANCES_SUCCESS,
    payload: payload,
  };
};

export const changeStatusSolutionInstancesFail = (msg) => {
  return {
    type: actions.CHANGE_STATUS_SOLUTION_INSTANCES_FAIL,
    msg: msg,
  };
};

export const configeInstanceSolution = (payload) => {
  return {
    type: actions.CONFIGE_INSTANCE_SOLUTION,
    payload: payload,
  };
};

export const configeInstanceSolutionSuccess = (msg) => {
  return {
    type: actions.CONFIGE_INSTANCE_SOLUTION_SUCCESS,
    msg: msg,
  };
};
export const configeInstanceSolutionFail = (msg) => {
  return {
    type: actions.CONFIGE_INSTANCE_SOLUTION_FAIL,
    msg: msg,
  };
};

//SET_CONFIG_INSTANCE

export const setConfigInstance = (payload) => {
  return {
    type: actions.SET_CONFIG_INSTANCE,
    payload: payload,
  };
};

//edit Solution instance - fetch salesforce user list
export const fetchSalesForceUserList = (payload) => {
  return {
    type: actions.FETCH_SALESFORCE_USER_LIST,
    payload: payload,
  };
};

export const fetchSalesForceUserListSuccess = (payload) => {
  return {
    type: actions.FETCH_SALESFORCE_USER_LIST_SUCCESS,
    payload: payload,
  };
};
export const fetchSalesForceUserListFail = (msg) => {
  return {
    type: actions.FETCH_SALESFORCE_USER_LIST_FAIL,
    msg: msg,
  };
};

//edit Solution instance - fetch Hubspot user list

export const fetchHubSpotUserList = (payload) => {
  return {
    type: actions.FETCH_HUBSPOT_USER_LIST,
    payload: payload,
  };
};

export const fetchHubSpotUserListSuccess = (payload) => {
  return {
    type: actions.FETCH_HUBSPOT_USER_LIST_SUCCESS,
    payload: payload,
  };
};
export const fetchHubSpotUserListFail = (msg) => {
  return {
    type: actions.FETCH_HUBSPOT_USER_LIST_FAIL,
    msg: msg,
  };
};

//reset sales force and hubspot user list
export const resetSfHsUserList = () => {
  return {
    type: actions.RESET_SF_HF_USER_LIST,
  };
};

//edit Solution instance - MATCH USER DATA

export const matchUserData = (payload) => {
 // alert(JSON.stringify(payload))
  return {
    type: actions.MATCH_USER_DATA,
    payload: payload,
  };
};

export const matchUserDataSuccess = (payload, msg) => {
  return {
    type: actions.MATCH_USER_DATA_SUCCESS,
    payload: payload,
  };
};
export const matchUserDataFail = (msg) => {
  return {
    type: actions.MATCH_USER_DATA_FAIL,
    msg: msg,
  };
};

// RefreshMatchUserData

export const refreshMatchUserData = (payload) => {
  return {
    type: actions.REFRESH_MATCH_USER_DATA,
    payload: payload,
  };
};

export const refreshMatchUserDataSuccess = (payload, msg) => {
  return {
    type: actions.REFRESH_MATCH_USER_DATA_SUCCESS,
    payload: payload,
  };
};
export const refreshMatchUserDataFail = (msg) => {
  return {
    type: actions.REFRESH_MATCH_USER_DATA_FAIL,
    msg: msg,
  };
};



export const setEditInstanceActiveStep = (payload) => {
  return {
    type: actions.EDIT_ISTANCE_SET_ACTIVE_STEP,
    payload: payload,
  };
};

//save match user data
export const saveMtachUserData = (payload) => {
  return {
    type: actions.SAVE_MATCH_USER_DATA,
    payload: payload,
  };
};

//store matched user data
export const storeMtachedUserData = (payload) => {
  return {
    type: actions.STORE_MATCHED_USERS_DATA,
    payload: payload,
  };
};

//set seleted tabs value for map field screen
export const setMapFieldsSelectedTabs = (payload) => {
  return {
    type: actions.SET_MAP_FIELDS_SELECTED_TABS,
    payload: payload,
  };
};

//edit Solution instance - MAP FIELDS COMPANY DATA

export const fetchmapCompanyData = (payload) => {
  return {
    type: actions.FETCH_MAP_COMPANY_DATA,
    payload: payload,
  };
};

export const fetchmapCompanyDataSuccess = (payload) => {
  return {
    type: actions.FETCH_MAP_COMPANY_DATA_SUCCESS,
    payload: payload,
  };
};
export const fetchmapCompanyDataFail = (msg) => {
  return {
    type: actions.FETCH_MAP_COMPANY_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - MAPPED COMPANY DATA

export const mappedCompanyData = (payload) => {
  return {
    type: actions.MAPPED_COMPANY_DATA,
    payload: payload,
  };
};

export const mappedCompanyDataSuccess = (payload, msg) => {
  return {
    type: actions.MAPPED_COMPANY_DATA_SUCCESS,
    payload: payload,
  };
};
export const mappedCompanyDataFail = (msg) => {
  return {
    type: actions.MAPPED_COMPANY_DATA_FAIL,
    msg: msg,
  };
};

//save mapped company data
export const saveMappedCompanyData = (payload) => {
  return {
    type: actions.SAVE_MAPPED_COMPANY_DATA,
    payload: payload,
  };
};

//edit Solution instance - refresh COMPANY DATA

export const refreshCompanyData = (payload) => {
  return {
    type: actions.REFRESH_MAP_COMPANY_DATA,
    payload: payload,
  };
};

export const refreshCompanyDataSuccess = (payload) => {
  return {
    type: actions.REFRESH_MAP_COMPANY_DATA_SUCCESS,
    payload: payload,
  };
};
export const refreshCompanyDataFail = (msg) => {
  return {
    type: actions.REFRESH_MAP_COMPANY_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - MAP FIELDS CONTACT DATA

export const fetchMapContactData = (payload) => {
  return {
    type: actions.FETCH_MAP_CONTACT_DATA,
    payload: payload,
  };
};

export const fetchMapContactDataSuccess = (payload) => {
  return {
    type: actions.FETCH_MAP_CONTACT_DATA_SUCCESS,
    payload: payload,
  };
};
export const fetchMapContactDataFail = (msg) => {
  return {
    type: actions.FETCH_MAP_CONTACT_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - MAPPED COMPANY DATA

export const mappedContactData = (payload) => {
  return {
    type: actions.MAPPED_CONTACT_DATA,
    payload: payload,
  };
};

export const mappedContactDataSuccess = (payload, msg) => {
  return {
    type: actions.MAPPED_CONTACT_DATA_SUCCESS,
    payload: payload,
  };
};
export const mappedContactDataFail = (msg) => {
  return {
    type: actions.MAPPED_CONTACT_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - refresh CONTACT DATA

export const refreshContactData = (payload) => {
  return {
    type: actions.REFRESH_MAP_CONTACT_DATA,
    payload: payload,
  };
};

export const refreshContactDataSuccess = (payload) => {
  return {
    type: actions.REFRESH_MAP_CONTACT_DATA_SUCCESS,
    payload: payload,
  };
};
export const refreshContactDataFail = (msg) => {
  return {
    type: actions.REFRESH_MAP_CONTACT_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - MAP FIELDS Deals DATA

export const fetchMapDealsData = (payload) => {
  return {
    type: actions.FETCH_MAP_DEALS_DATA,
    payload: payload,
  };
};

export const fetchMapDealsDataSuccess = (payload) => {
  return {
    type: actions.FETCH_MAP_DEALS_DATA_SUCCESS,
    payload: payload,
  };
};
export const fetchMapDealsDataFail = (msg) => {
  return {
    type: actions.FETCH_MAP_DEALS_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - MAPPED DEALS DATA

export const mappedDealsData = (payload) => {
  return {
    type: actions.MAPPED_DEALS_DATA,
    payload: payload,
  };
};

export const mappedDealsDataSuccess = (payload, msg) => {
  return {
    type: actions.MAPPED_DEALS_DATA_SUCCESS,
    payload: payload,
  };
};
export const mappedDealsDataFail = (msg) => {
  return {
    type: actions.MAPPED_DEALS_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - refresh Deals DATA

export const refreshDealsData = (payload) => {
  return {
    type: actions.REFRESH_MAP_DEALS_DATA,
    payload: payload,
  };
};

export const refreshDealsDataSuccess = (payload) => {
  return {
    type: actions.REFRESH_MAP_DEALS_DATA_SUCCESS,
    payload: payload,
  };
};
export const refreshDealsDataFail = (msg) => {
  return {
    type: actions.REFRESH_MAP_DEALS_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - UPGRADE SOLUTION INSTANCE

export const upgradeSolutionInstance = (payload) => {
  //alert(JSON.stringify(payload))
  return {
    type: actions.UPGRADE_SOLUTION_INSTANCE,
    payload: payload,
  };
};
export const upgradeSolutionInstanceSuccess = (msg) => {
  return {
    type: actions.UPGRADE_SOLUTION_INSTANCE_SUCCESS,
    msg: msg,
  };
};
export const upgradeSolutionInstanceFail = (msg) => {
  return {
    type: actions.UPGRADE_SOLUTION_INSTANCE_FAIL,
    msg: msg,
  };
};

//edit Solution instance - MAP FIELDS Deals DATA

export const fetchMapProductsData = (payload) => {
  return {
    type: actions.FETCH_MAP_PRODUCT_DATA,
    payload: payload,
  };
};

export const fetchMapProductsDataSuccess = (payload) => {
  return {
    type: actions.FETCH_MAP_PRODUCT_DATA_SUCCESS,
    payload: payload,
  };
};
export const fetchMapProductsDataFail = (msg) => {
  return {
    type: actions.FETCH_MAP_PRODUCT_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - MAPPED DEALS DATA

export const mappedProductData = (payload) => {
  return {
    type: actions.MAPPED_PRODUCT_DATA,
    payload: payload,
  };
};

export const mappedProductDataSuccess = (payload, msg) => {
  return {
    type: actions.MAPPED_PRODUCT_DATA_SUCCESS,
    payload: payload,
  };
};
export const mappedProductDataFail = (msg) => {
  return {
    type: actions.MAPPED_PRODUCT_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - refresh Product list DATA

export const refreshProductData = (payload) => {
  return {
    type: actions.REFRESH_MAP_PRODUCT_DATA,
    payload: payload,
  };
};

export const refreshProductDataSuccess = (payload) => {
  return {
    type: actions.REFRESH_MAP_PRODUCT_DATA_SUCCESS,
    payload: payload,
  };
};
export const refreshProductDataFail = (msg) => {
  return {
    type: actions.REFRESH_MAP_PRODUCT_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - MAP FIELDS Ticket DATA

export const fetchMapTicketData = (payload) => {
  return {
    type: actions.FETCH_MAP_TICKET_DATA,
    payload: payload,
  };
};

export const fetchMapTicketDataSuccess = (payload) => {
  return {
    type: actions.FETCH_MAP_TICKET_DATA_SUCCESS,
    payload: payload,
  };
};
export const fetchMapTicketDataFail = (msg) => {
  return {
    type: actions.FETCH_MAP_TICKET_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - MAPPED TICKET DATA

export const mappedTicketData = (payload) => {
  return {
    type: actions.MAPPED_TICKET_DATA,
    payload: payload,
  };
};

export const mappedTicketDataSuccess = (payload, msg) => {
  return {
    type: actions.MAPPED_TICKET_DATA_SUCCESS,
    payload: payload,
  };
};
export const mappedTicketDataFail = (msg) => {
  return {
    type: actions.MAPPED_TICKET_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - refresh TICKET DATA

export const refreshTicketData = (payload) => {
  return {
    type: actions.REFRESH_MAP_TICKET_DATA,
    payload: payload,
  };
};

export const refreshTicketDataSuccess = (payload) => {
  return {
    type: actions.REFRESH_MAP_TICKET_DATA_SUCCESS,
    payload: payload,
  };
};
export const refreshTicketDataFail = (msg) => {
  return {
    type: actions.REFRESH_MAP_TICKET_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - MAP FIELDS email DATA

export const fetchMapEmailData = (payload) => {
  return {
    type: actions.FETCH_MAP_EMAIL_DATA,
    payload: payload,
  };
};

export const fetchMapEmailDataSuccess = (payload) => {
  return {
    type: actions.FETCH_MAP_EMAIL_DATA_SUCCESS,
    payload: payload,
  };
};
export const fetchMapEmailDataFail = (msg) => {
  return {
    type: actions.FETCH_MAP_EMAIL_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - MAPPED TICKET DATA

export const mappedEmailData = (payload) => {
  return {
    type: actions.MAPPED_EMAIL_DATA,
    payload: payload,
  };
};

export const mappedEmailDataSuccess = (payload, msg) => {
  return {
    type: actions.MAPPED_EMAIL_DATA_SUCCESS,
    payload: payload,
  };
};
export const mappedEmailDataFail = (msg) => {
  return {
    type: actions.MAPPED_EMAIL_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - refresh email DATA

export const refreshEmailData = (payload) => {
  return {
    type: actions.REFRESH_MAP_EMAIL_DATA,
    payload: payload,
  };
};

export const refreshEmailDataSuccess = (payload) => {
  return {
    type: actions.REFRESH_MAP_EMAIL_DATA_SUCCESS,
    payload: payload,
  };
};
export const refreshEmailDataFail = (msg) => {
  return {
    type: actions.REFRESH_MAP_EMAIL_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - MAP FIELDS meeting DATA

export const fetchMapMeetingData = (payload) => {
  return {
    type: actions.FETCH_MAP_MEETING_DATA,
    payload: payload,
  };
};

export const fetchMapMeetingDataSuccess = (payload) => {
  return {
    type: actions.FETCH_MAP_MEETING_DATA_SUCCESS,
    payload: payload,
  };
};
export const fetchMapMeetingDataFail = (msg) => {
  return {
    type: actions.FETCH_MAP_MEETING_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - MAPPED meeting DATA

export const mappedMeetingData = (payload) => {
  return {
    type: actions.MAPPED_MEETING_DATA,
    payload: payload,
  };
};

export const mappedMeetingDataSuccess = (payload, msg) => {
  return {
    type: actions.MAPPED_MEETING_DATA_SUCCESS,
    payload: payload,
  };
};
export const mappedMeetingDataFail = (msg) => {
  return {
    type: actions.MAPPED_MEETING_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - refresh meeting DATA

export const refreshMeetingData = (payload) => {
  return {
    type: actions.REFRESH_MAP_MEETING_DATA,
    payload: payload,
  };
};

export const refreshMeetingDataSuccess = (payload) => {
  return {
    type: actions.REFRESH_MAP_MEETING_DATA_SUCCESS,
    payload: payload,
  };
};
export const refreshMeetingDataFail = (msg) => {
  return {
    type: actions.REFRESH_MAP_MEETING_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - MAP FIELDS leads DATA

export const fetchMapLeadData = (payload) => {
  return {
    type: actions.FETCH_MAP_LEADS_DATA,
    payload: payload,
  };
};

export const fetchMapLeadDataSuccess = (payload) => {
  return {
    type: actions.FETCH_MAP_LEADS_DATA_SUCCESS,
    payload: payload,
  };
};
export const fetchMapLeadDataFail = (msg) => {
  return {
    type: actions.FETCH_MAP_LEADS_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - MAPPED leads DATA

export const mappedLeadData = (payload) => {
  return {
    type: actions.MAPPED_LEADS_DATA,
    payload: payload,
  };
};

export const mappedLeadDataSuccess = (payload, msg) => {
  return {
    type: actions.MAPPED_LEADS_DATA_SUCCESS,
    payload: payload,
  };
};
export const mappedLeadDataFail = (msg) => {
  return {
    type: actions.MAPPED_LEADS_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - refresh leads DATA

export const refreshLeadData = (payload) => {
  return {
    type: actions.REFRESH_MAP_LEADS_DATA,
    payload: payload,
  };
};

export const refreshLeadDataSuccess = (payload) => {
  return {
    type: actions.REFRESH_MAP_LEADS_DATA_SUCCESS,
    payload: payload,
  };
};
export const refreshLeadDataFail = (msg) => {
  return {
    type: actions.REFRESH_MAP_LEADS_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - MAP FIELDS notes DATA

export const fetchMapNotesData = (payload) => {
  return {
    type: actions.FETCH_MAP_NOTES_DATA,
    payload: payload,
  };
};

export const fetchMapNotesDataSuccess = (payload) => {
  return {
    type: actions.FETCH_MAP_NOTES_DATA_SUCCESS,
    payload: payload,
  };
};
export const fetchMapNotesDataFail = (msg) => {
  return {
    type: actions.FETCH_MAP_NOTES_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - MAPPED notes DATA

export const mappedNotesData = (payload) => {
  return {
    type: actions.MAPPED_NOTES_DATA,
    payload: payload,
  };
};

export const mappedNotesDataSuccess = (payload, msg) => {
  return {
    type: actions.MAPPED_NOTES_DATA_SUCCESS,
    payload: payload,
  };
};
export const mappedNotesDataFail = (msg) => {
  return {
    type: actions.MAPPED_NOTES_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - refresh NOTES DATA

export const refreshNotesData = (payload) => {
  return {
    type: actions.REFRESH_MAP_NOTES_DATA,
    payload: payload,
  };
};

export const refreshNotesDataSuccess = (payload) => {
  return {
    type: actions.REFRESH_MAP_NOTES_DATA_SUCCESS,
    payload: payload,
  };
};
export const refreshNotesDataFail = (msg) => {
  return {
    type: actions.REFRESH_MAP_NOTES_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - MAP FIELDS attachments DATA

export const fetchMapAttachmentsData = (payload) => {
  return {
    type: actions.FETCH_MAP_ATTACHMENTS_DATA,
    payload: payload,
  };
};

export const fetchMapAttachmentsDataSuccess = (payload) => {
  return {
    type: actions.FETCH_MAP_ATTACHMENTS_DATA_SUCCESS,
    payload: payload,
  };
};
export const fetchMapAttachmentsDataFail = (msg) => {
  return {
    type: actions.FETCH_MAP_ATTACHMENTS_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - MAPPED notes DATA

export const mappedAttachmentsData = (payload) => {
  return {
    type: actions.MAPPED_ATTACHMENTS_DATA,
    payload: payload,
  };
};

export const mappedAttachmentsDataSuccess = (payload, msg) => {
  return {
    type: actions.MAPPED_ATTACHMENTS_DATA_SUCCESS,
    payload: payload,
  };
};
export const mappedAttachmentsDataFail = (msg) => {
  return {
    type: actions.MAPPED_ATTACHMENTS_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - refresh NOTES DATA

export const refreshAttachmentsData = (payload) => {
  return {
    type: actions.REFRESH_MAP_ATTACHMENTS_DATA,
    payload: payload,
  };
};

export const refreshAttachmentsDataSuccess = (payload) => {
  return {
    type: actions.REFRESH_MAP_ATTACHMENTS_DATA_SUCCESS,
    payload: payload,
  };
};
export const refreshAttachmentsDataFail = (msg) => {
  return {
    type: actions.REFRESH_MAP_ATTACHMENTS_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - fetch map fields tabs data

export const fetchMapFieldTabsList = (payload) => {
  return {
    type: actions.FETCH_MAP_FIELDS_TABS_LIST,
    payload: payload,
  };
};
export const fetchMapFieldTabsListSuccess = (payload) => {
  return {
    type: actions.FETCH_MAP_FIELDS_TABS_LIST_SUCCESS,
    payload: payload,
  };
};
export const fetchMapFieldTabsListFail = (msg) => {
  return {
    type: actions.FETCH_MAP_FIELDS_TABS_LIST_FAIL,
    msg: msg,
  };
};

//edit Solution instance - fetch selected object screen data

export const fetchSelectedObjectList = () => {
  return {
    type: actions.FETCH_SELECTED_OBJECT_LIST,
    //payload:payload
  };
};

export const fetchSelectedObjectListSuccess = (payload) => {
  return {
    type: actions.FETCH_SELECTED_OBJECT_LIST_SUCCESS,
    payload: payload,
  };
};
export const fetchSelectedObjectListFail = (msg) => {
  return {
    type: actions.FETCH_SELECTED_OBJECT_LIST_FAIL,
    msg: msg,
  };
};

//edit Solution instance - MAPPED selected DATA

export const mappedSelectedObjectData = (payload) => {
  return {
    type: actions.MAPPED_SELECTED_OBJECT_DATA,
    payload: payload,
  };
};

export const mappedSelectedObjectDataSuccess = (payload, msg) => {
  return {
    type: actions.MAPPED_SELECTED_OBJECT_DATA_SUCCESS,
    payload: payload,
  };
};
export const mappedSelectedObjectDataFail = (msg) => {
  return {
    type: actions.MAPPED_SELECTED_OBJECT_DATA_FAIL,
    msg: msg,
  };
};

//RESET selected object  STATUS
export const resetSelectedObjectStatus = () => {
  return {
    type: actions.RESET_SELECTED_OBJECT_STATUS,
   
  };
};

//save selected object  data
export const saveSelectedObjectData = (payload) => {
  return {
    type: actions.SAVE_SELECTED_OBJECT_DATA,
    payload: payload,
  };
};


//for fetching info popup status

export const infoPopupStatus = (payload) => {
  return{
      type: actions.INFO_POPUP_STATUS,
      payload:payload
  }
}


//edit Solution instance - MAP FIELDS Engagement DATA

export const fetchMapEngageData = (payload) => {
  return {
    type: actions.FETCH_MAP_ENGAGE_DATA,
    payload: payload,
  };
};

export const fetchMapEngageDataSuccess = (payload) => {
  return {
    type: actions.FETCH_MAP_ENGAGE_DATA_SUCCESS,
    payload: payload,
  };
};
export const fetchMapEngageDataFail = (msg) => {
  return {
    type: actions.FETCH_MAP_ENGAGE_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - MAPPED Engagement DATA

export const mappedEngageData = (payload) => {
  return {
    type: actions.MAPPED_ENGAGE_DATA,
    payload: payload,
  };
};

export const mappedEngageDataSuccess = (payload) => {
  return {
    type: actions.MAPPED_ENGAGE_DATA_SUCCESS,
    payload: payload,
  };
};
export const mappedEngageDataFail = (msg) => {
  return {
    type: actions.MAPPED_ENGAGE_DATA_FAIL,
    msg: msg,
  };
};

//edit Solution instance - refresh Engagement DATA

export const refreshEngageData = (payload) => {
  return {
    type: actions.REFRESH_MAP_ENGAGE_DATA,
    payload: payload,
  };
};

export const refreshEngageDataSuccess = (payload) => {
  return {
    type: actions.REFRESH_MAP_ENGAGE_DATA_SUCCESS,
    payload: payload,
  };
};
export const refreshEngageDataFail = (msg) => {
  return {
    type: actions.REFRESH_MAP_ENGAGE_DATA_FAIL,
    msg: msg,
  };
};

/*reset edit instance initial values */
//reset sales force and hubspot user list
export const resetEditInstanceInitials = () => {
  return {
    type: actions.RESET_EDIT_INSTANCE_INITIAL_VALUES,
  };
};

/**end reset */

//SALESfORCE_RESET_STATUS
export const resetSalesForceStatus = () => {
  return {
    type: actions.SALESfORCE_RESET_STATUS,
  };
};
/**demo migration */

export const demoMigration = (payload) => {
  return {
    type: actions.DEMO_MIGRATION,
    payload: payload,
  };
};

export const demoMigrationSuccess = (payload) => {
  return {
    type: actions.DEMO_MIGRATION_SUCCESS,
    payload: payload,
  };
};
export const demoMigrationFail = (msg) => {
  return {
    type: actions.DEMO_MIGRATION_FAIL,
    msg: msg,
  };
};

//reset demo migration status
export const resetDemoMigrationStatus = () => {
  return {
    type: actions.RESET_DEMO_MIGRATION_STATUS,
  };
};
/**get External ids0 */

export const fetchExternalIds = (payload) => {
  return {
    type: actions.FETCH_EXTERNALIDS,
    payload: payload,
  };
};

export const fetchExternalIdsSuccess = (payload) => {
  return {
    type: actions.FETCH_EXTERNALIDS_SUCCESS,
    payload: payload,
  };
};
export const fetchExternalIdsFail = (msg) => {
  return {
    type: actions.FETCH_EXTERNALIDS_FAIL,
    msg: msg,
  };
};

export const migrationReportData = (payload) => {
  //alert(JSON.stringify(payload))
  return {
    type: actions.MIGRATION_REPORT_DATA,
    payload: payload,
  };
};

export const migrationReportDataSuccess = (payload) => {
  //alert(JSON.stringify(payload))
  return {
    type: actions.MIGRATION_REPORT_DATA_SUCCESS,
    payload: payload,
  };
};

export const migrationReportDataFail = (msg) => {
  return {
    type: actions.MIGRATION_REPORT_DATA_FAIL,
    msg: msg,
  };
};

export const migrationDetails = (payload) => {
  //alert(JSON.stringify(payload))
  return {
    type: actions.MIGRATION_DETAILS_DATA,
    payload: payload,
  };
};

export const migrationDetailsSuccess = (payload) => {
  //alert(JSON.stringify(payload))
  return {
    type: actions.MIGRATION_DETAILS_DATA_SUCCESS,
    payload: payload,
  };
};

export const migrationDetailsFail = (msg) => {
  return {
    type: actions.MIGRATION_DETAILS_DATA_FAIL,
    msg: msg,
  };
};

export const startMigration = (payload) => {
  //alert(JSON.stringify(payload))
  return {
    type: actions.START_MIGRATION,
    payload: payload,
  };
};

export const startMigrationSuccess = (payload) => {
  //alert(JSON.stringify(payload))
  return {
    type: actions.START_MIGRATION_SUCCESS,
    payload: payload,
  };
};

export const startMigrationFail = (msg) => {
  return {
    type: actions.START_MIGRATION_FAIL,
    msg: msg,
  };
};

//remove company mapfield row
export const removeCompanyMapFieldRow = (payload) =>{
   return{
    type:actions.REMOVE_COMPANY_MAPFIELDS_ROW,
    payload:payload
  }
}
//remove company mapfield flag
export const removeCompanyMapFieldFlag = (payload) =>{
  return{
   type:actions.REMOVE_COMPANY_MAPFIELDS_FLAG,
   payload:payload
 }
}

//remove contact mapfield row
export const removeContactMapFieldRow = (payload) =>{
  return{
   type:actions.REMOVE_CONTACT_MAPFIELDS_ROW,
   payload:payload
 }
}
//remove contact mapfield flag
export const removeContactMapFieldFlag = (payload) =>{
 return{
  type:actions.REMOVE_CONTACT_MAPFIELDS_FLAG,
  payload:payload
}
}

//remove deals mapfield row
export const removeDealsMapFieldRow = (payload) =>{
  return{
   type:actions.REMOVE_DEALS_MAPFIELDS_ROW,
   payload:payload
 }
}
//remove deals mapfield flag
export const removeDealsMapFieldFlag = (payload) =>{
 return{
  type:actions.REMOVE_DEALS_MAPFIELDS_FLAG,
  payload:payload
}
}

//remove engagement mapfield row
export const removeEngagementMapFieldRow = (payload) =>{
  return{
   type:actions.REMOVE_ENGAGEMENT_MAPFIELDS_ROW,
   payload:payload
 }
}
//remove engagement mapfield flag
export const removeEngagementMapFieldFlag = (payload) =>{
 return{
  type:actions.REMOVE_ENGAGEMENT_MAPFIELDS_FLAG,
  payload:payload
}
}

//remove TICKET mapfield row
export const removeTicketMapFieldRow = (payload) =>{
  return{
   type:actions.REMOVE_TICKET_MAPFIELDS_ROW,
   payload:payload
 }
}
//remove engagement mapfield flag
export const removeTicketMapFieldFlag = (payload) =>{
 return{
  type:actions.REMOVE_TICKET_MAPFIELDS_FLAG,
  payload:payload
}
}