import { takeEvery, all} from "redux-saga/effects";
// import { saveCustomerBasicInfo } from '../actions';
import * as actionTypes from "../action/actionTypes";

import {
  homeLoginPageSaga,
  homeRegisterPageSaga,
  checkUserLoginStatus,
  loggingOutSaga,
  forgotpasswordSaga,
  changeUserPasswordSaga,
} from "./login/login";
import { intiatePaymentCallSaga, paymentPriceTableDataSaga, fetchMigrationObjectListSaga } from "./payment/payment";
import {
  fetchAllSolutionsSaga,
  fetchInstancesSaga,
  deleteInstancesSaga,
  changeStatusInstancesSaga,
  getAllSolutionsSaga,
  fetchFromCRMSaga,
  fetchToCRMSaga,
  fetchCRMSolutionListSaga,
  fetchSalesForceUserListSaga,
  // fetchHubSpotUserListSaga ,
  matchUserDataSaga,
  refreshSalesForceUserListSaga,
  fetchMapFieldCompanyList,
  mappedCompanyDataSaga,
  refreshMapFieldCompanyListSaga,
  fetchMapFieldContactListSaga,
  mappedContactDataSaga,
  refreshMapFieldContactListSaga,
  fetchMapFieldDealsListSaga,
  mappedDealsDataSaga,
  refreshMapFieldDealsListSaga,
  upgradeSolutionInstanceSaga,
  fetchMapFieldProductListSaga,
  mappedProductsDataSaga,
  refreshMapFieldProductListSaga,
  fetchMapFieldTicketListSaga,
  mappedTicketDataSaga,
  refreshMapFieldTicketListSaga,
  fetchMapFieldEmailListSaga,
  mappedEmailDataSaga,
  refreshMapFieldEmailListSaga,
  fetchMapFieldMeetingListSaga,
  mappedMeetingDataSaga,
  refreshMapFieldMeetingListSaga,
  fetchMapFieldLeadListSaga,
  mappedLeadDataSaga,
  refreshMapFieldLeadListSaga,
  fetchMapFieldNotesListSaga,
  mappedNotesDataSaga,
  refreshMapFieldNotesListSaga,
  fetchMapFieldAttachListSaga,
  mappedAttachDataSaga,
  refreshMapFieldAttachListSaga,
  fetchSelectedObjectListSaga,
  mappedSelectedObjectSaga,
  fetchMapFieldTabsListSaga,
  fetchMapFieldEngageListSaga,
  mappedEngageDataSaga,
  refreshMapFieldEngageListSaga,
  demoMigrationSaga,
  fetchExternalIdsSaga,
  migrationReportSaga,
  migrationDetailsSaga,
  startMigrationSaga,
  
} from "./solutions/solutions";
export function* watchSagaLogin() {
  yield all([
    takeEvery(actionTypes.HOME_LOGIN_PAGE, homeLoginPageSaga),
    takeEvery(actionTypes.HOME_REGISTER_PAGE, homeRegisterPageSaga),
    takeEvery(actionTypes.CHECK_USER_LOGIN_STATUS, checkUserLoginStatus),
    takeEvery(actionTypes.LOGGIN_OUT_API, loggingOutSaga),
    takeEvery(actionTypes.FORGOT_PASSWORD_SEND_LINK, forgotpasswordSaga),
    takeEvery(actionTypes.CHANGE_USER_PASSWORD, changeUserPasswordSaga),
    takeEvery(actionTypes.INITIATE_PAYMENT_CALL, intiatePaymentCallSaga),
    takeEvery(actionTypes.FETCH_ALL_SOLUTION, fetchAllSolutionsSaga),
    takeEvery(actionTypes.GET_ALL_SOLUTION, getAllSolutionsSaga),
    takeEvery(actionTypes.FETCH_SOLUTION_INSTANCES, fetchInstancesSaga),
    takeEvery(actionTypes.DELETE_SOLUTION_INSTANCES, deleteInstancesSaga),
    takeEvery(
      actionTypes.CHANGE_STATUS_SOLUTION_INSTANCES,
      changeStatusInstancesSaga
    ),
    takeEvery(actionTypes.FETCH_FROM_CRM_LIST, fetchFromCRMSaga),
    takeEvery(actionTypes.FETCH_TO_CRM_LIST, fetchToCRMSaga),
    takeEvery(actionTypes.FETCH_CRM_SOLUTION_LIST, fetchCRMSolutionListSaga),
    takeEvery(
      actionTypes.FETCH_SALESFORCE_USER_LIST,
      fetchSalesForceUserListSaga
    ),
    //takeEvery(actionTypes.FETCH_HUBSPOT_USER_LIST , fetchHubSpotUserListSaga),
    takeEvery(actionTypes.MATCH_USER_DATA, matchUserDataSaga),
    takeEvery(actionTypes.REFRESH_MATCH_USER_DATA, refreshSalesForceUserListSaga),
    takeEvery(actionTypes.FETCH_MAP_COMPANY_DATA, fetchMapFieldCompanyList),
    takeEvery(actionTypes.MAPPED_COMPANY_DATA, mappedCompanyDataSaga),
    takeEvery(
      actionTypes.REFRESH_MAP_COMPANY_DATA,
      refreshMapFieldCompanyListSaga
    ),
    takeEvery(actionTypes.FETCH_MAP_CONTACT_DATA, fetchMapFieldContactListSaga),
    takeEvery(actionTypes.MAPPED_CONTACT_DATA, mappedContactDataSaga),
    takeEvery(
      actionTypes.REFRESH_MAP_CONTACT_DATA,
      refreshMapFieldContactListSaga
    ),
    takeEvery(actionTypes.FETCH_MAP_DEALS_DATA, fetchMapFieldDealsListSaga),
    takeEvery(actionTypes.MAPPED_DEALS_DATA, mappedDealsDataSaga),
    takeEvery(actionTypes.REFRESH_MAP_DEALS_DATA, refreshMapFieldDealsListSaga),
    takeEvery(
      actionTypes.UPGRADE_SOLUTION_INSTANCE,
      upgradeSolutionInstanceSaga
    ),
    takeEvery(actionTypes.FETCH_MAP_PRODUCT_DATA, fetchMapFieldProductListSaga),
    takeEvery(actionTypes.MAPPED_PRODUCT_DATA, mappedProductsDataSaga),
    takeEvery(
      actionTypes.REFRESH_MAP_PRODUCT_DATA,
      refreshMapFieldProductListSaga
    ),
    takeEvery(actionTypes.FETCH_MAP_TICKET_DATA, fetchMapFieldTicketListSaga),
    takeEvery(actionTypes.MAPPED_TICKET_DATA, mappedTicketDataSaga),
    takeEvery(
      actionTypes.REFRESH_MAP_TICKET_DATA,
      refreshMapFieldTicketListSaga
    ),
    takeEvery(actionTypes.FETCH_MAP_EMAIL_DATA, fetchMapFieldEmailListSaga),
    takeEvery(actionTypes.MAPPED_EMAIL_DATA, mappedEmailDataSaga),
    takeEvery(actionTypes.REFRESH_MAP_EMAIL_DATA, refreshMapFieldEmailListSaga),
    takeEvery(actionTypes.FETCH_MAP_MEETING_DATA, fetchMapFieldMeetingListSaga),
    takeEvery(actionTypes.MAPPED_MEETING_DATA, mappedMeetingDataSaga),
    takeEvery(
      actionTypes.REFRESH_MAP_MEETING_DATA,
      refreshMapFieldMeetingListSaga
    ),
    takeEvery(actionTypes.FETCH_MAP_LEADS_DATA, fetchMapFieldLeadListSaga),
    takeEvery(actionTypes.MAPPED_LEADS_DATA, mappedLeadDataSaga),
    takeEvery(actionTypes.REFRESH_MAP_LEADS_DATA, refreshMapFieldLeadListSaga),
    takeEvery(actionTypes.FETCH_MAP_NOTES_DATA, fetchMapFieldNotesListSaga),
    takeEvery(actionTypes.MAPPED_NOTES_DATA, mappedNotesDataSaga),
    takeEvery(actionTypes.REFRESH_MAP_NOTES_DATA, refreshMapFieldNotesListSaga),
    takeEvery(
      actionTypes.FETCH_MAP_ATTACHMENTS_DATA,
      fetchMapFieldAttachListSaga
    ),
    takeEvery(actionTypes.MAPPED_ATTACHMENTS_DATA, mappedAttachDataSaga),
    takeEvery(
      actionTypes.REFRESH_MAP_ATTACHMENTS_DATA,
      refreshMapFieldAttachListSaga
    ),
    takeEvery(
      actionTypes.FETCH_SELECTED_OBJECT_LIST,
      fetchSelectedObjectListSaga
    ),
    takeEvery(
      actionTypes.MAPPED_SELECTED_OBJECT_DATA,
      mappedSelectedObjectSaga
    ),
    takeEvery(
      actionTypes.FETCH_MAP_FIELDS_TABS_LIST,
      fetchMapFieldTabsListSaga
    ),
    takeEvery(actionTypes.FETCH_MAP_ENGAGE_DATA, fetchMapFieldEngageListSaga),
    takeEvery(actionTypes.MAPPED_ENGAGE_DATA, mappedEngageDataSaga),
    takeEvery(
      actionTypes.REFRESH_MAP_ENGAGE_DATA,
      refreshMapFieldEngageListSaga
    ),
    takeEvery(actionTypes.DEMO_MIGRATION, demoMigrationSaga),
    takeEvery(actionTypes.START_MIGRATION, startMigrationSaga),
    takeEvery(actionTypes.FETCH_EXTERNALIDS, fetchExternalIdsSaga),
    takeEvery(actionTypes.MIGRATION_REPORT_DATA, migrationReportSaga),
    takeEvery(actionTypes.MIGRATION_DETAILS_DATA, migrationDetailsSaga),
    takeEvery(actionTypes.MIGRATION_OBJECT_LIST, fetchMigrationObjectListSaga),
    //payment API
    
    takeEvery(actionTypes.PAYMENT_PRICE_TABLE_DATA, paymentPriceTableDataSaga),
    //fetchMigrationObjectListSaga
  ]);
}
