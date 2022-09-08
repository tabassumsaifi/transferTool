import * as actionType from "../../action//actionTypes";
import { updateObject } from "../../../common/redux/index";


const initialState = {
  solutionList: {},
  instances: [],
  stopMigrationStatus:false,
  status: "",
  popUrl: null,
  msg: "",
  loader: false,
  fetchedSolutionList: {},
  selecedObject: { from: "", to: "" },
  selectedTabValue: 0,
  FromCRMList: [],
  ToCRMList: [],
  CRMSolutionList: [],
  configureInstance: false,
  tabsObject: {
    tabOne: true,
    tabTwo: false,
    tabThree: false,
  },
  progressBarInitialValue: 33.3,
  salesForceUserList: [],
  hubspotUserList: [],
  matchUserData: [],
  storeMatchData:[],
  activeStep: 0,
  initialRenderMatchUsers: true,
  saveMatchUserData: {},  
  mapFieldsSelectedTab: 0,
  fetchedCompanyList: [],
  mappedCompanyData: [],
  saveMappedCompanyData: {},
  initialRender: true,
  mappedCompanyStatus: "",
  fetchedContactList: [],
  mappedContactData: [],
  initialRenderContact: true,
  mappedContactStatus: "",
  fetchedDealsList: [],
  mappedDealsData: {},
  initialRenderDeals: true,
  mappedDealsStatus: "",
  fetchedProductList: [],
  mappedProductData: {},
  initialRenderProduct: true,
  fetchedTicketList: [],
  mappedTicketData: {},
  initialRenderTicket: true,
  fetchedEmailList: [],
  mappedEmailData: {},
  initialRenderEmail: true,
  fetchedMeetingList: [],
  mappedMeetingData: {},
  initialRenderMeeting: true,
  fetchedLeadList: [],
  mappedLeadData: {},
  initialRenderLead: true,
  fetchedNotesList: [],
  mappedNotesData: {},
  initialRenderNotes: true,
  fetchedAttachmentsList: [],
  mappedAttachmentsData: {},
  initialRenderAttachments: true,
  fetchedSelectedObjectList: [],
  mappedSelectedObject: [],
  intialRenderSelectedObject: true,
  saveSelectedObjectData: [],
  selectedObjectStatus: false,
  infoPopupStatus:false,
  fetchMapFieldTabsList: [],
  fetchedEngageList: [],
  mappedEngageData: {},
  initialRenderEngage: true,
  salesForceStatus: true,
  demoMigrationData:false,
  demoMigrationStatus: false,
  externalIdsList:[],
  migrationData: [],
  startMigrationStatus:false,
  CompanyMapFieldFlag: true,
  contactMapFieldFlag: true,
  dealsMapFieldFlag: true,
  engagementMapFieldFlag: true,
  ticketMapFieldFlag: true,
  
  
};

const fetchAllSolutionsSuccess = (state, action) => {
  return updateObject(state, {
    solutionList: action.data,
    status: "200",
    msg: action.msg,
  });
};

const fetchAllSolutionsFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
  });
};

//getting solution list with new API
const getAllSolutionsSuccess = (state, action) => {
  return updateObject(state, {
    fetchedSolutionList: action.data,
    status: "200",
    msg: action.msg,
  });
};
const getAllSolutionsFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
  });
};

const fetchSolutionInstancesSuccess = (state, action) => {
  return updateObject(state, {
    instances: action.payload,
    status: "200",
    msg: "Suceesfull fetch",
  });
};

const fetchSolutionInstancesFail = (state, action) => {
  return updateObject(state, {
    // instances:action.payload,
    status: "400",
    msg: action.msg,
  });
};

const deleteSolutionInstancesSuccess = (state, action) => {
  //action.payload
  // let newData =
  // let newList = state.instances.solutionInstances.edges.filter((node) => node.node.id != action.payload)
  // state.instances.solutionInstances.edges = newList;
  // newList = state.instances
  let newList = state.instances.filter(
    (node) => node.instanceId !== action.payload
  );
  state.instances = newList;
  newList = state.instances;
  return updateObject(state, {
    instances: [...newList],
    status: 200,
    msg: "Delete successfull",
  });
};

const deleteSolutionInstancesFail = (state, action) => {
  return updateObject(state, {
    status: 400,
    msg: "Not able to delete",
  });
};

const resetSolutionStatus = (state, action) => {
  return updateObject(state, {
    status: "",
    msg: "",
  });
};
const setSelectedTabValue = (state, action) => {
  return updateObject(state, {
    selectedTabValue: action.payload,
  });
};

const changeStatusSolutionInstancesSuccess = (state, action) => {
  //alert(JSON.stringify(state.instances))
  // let newList = state.instances.solutionInstances.edges.map((node) =>{

  //     if(node.node.id == action.payload){
  //         console.log(node.node.id==action.payload)
  //         node.node.enabled = !node.node.enabled
  //     }
  //     return node
  // })
  // console.log(newList)
  // state.instances.solutionInstances.edges = newList;
  // newList = state.instances

  let newList = state.instances.map((node) => {
    if (node.instanceId === action.payload) {
      //console.log(node.id==action.payload)
      node.enabled = !node.enabled;
    }
    return node;
  });
  console.log('reducer new list',newList);
  state.instances = newList;
  newList = state.instances;
  return updateObject(state, {
    instances: [...newList],
    status: 200,
    msg: "Solution Status change  successfull",
    stopMigrationStatus:true,
  });
};
const changeStatusSolutionInstancesFail = (state, action) => {
  return updateObject(state, {
    status: 400,
    msg: "Solution Status No Changed  ",
    stopMigrationStatus:false,
  });
};

// const configeInstanceSolutionSuccess = (state, action) => {
//   return updateObject(state, {
//     status: 200,
//   });
// };

//save selected object
const saveSelectedObject = (state, action) => {
  // let newObj = {from:action.payload}
  //alert(JSON.stringify(action.payload))
  return updateObject(state, {
    selecedObject: { ...state.selecedObject, ...action.payload },
  });
};

const setIntialState = (state, action) => {
  return updateObject(state, {
    instances: null,
    status: "",
    msg: "",
    selecedObject: initialState.selecedObject,
  });
};

// Fetch From CRM List
const fetchFromCrmListSuccess = (state, action) => {
  return updateObject(state, {
    FromCRMList: action.data,
    status: "200",
    msg: action.msg,
  });
};

const fetchFromCrmListFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
  });
};

// Fetch To CRM List
const fetchToCrmListSuccess = (state, action) => {
  return updateObject(state, {
    ToCRMList: action.data,
    status: "200",
    msg: action.msg,
  });
};

const fetchToCrmListFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
  });
};

// Fetch CRM solution List
const fetchCrmSolutionListSuccess = (state, action) => {
  //alert(JSON.stringify(state.CRMSolutionList))
  //alert(JSON.stringify(obj))
  return updateObject(state, {
    CRMSolutionList: [action.data],
    status: "200",
    msg: action.msg,
  });
};

const fetchCrmSolutionListFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
  });
};

const resetSelectedCRMObject = (state, action) => {
  return updateObject(state, {
    selecedObject: { from: "", to: "" },
    tabsObject: initialState.tabsObject,
    ToCRMList: [],
    FromCRMList: [],
  });
};

const setConfigInstance = (state, action) => {
  return updateObject(state, {
    configureInstance: action.payload,
  });
};

//managing tabs values in object

const setTabsValue = (state, action) => {
  return updateObject(state, {
    tabsObject: { ...state.tabsObject, ...action.payload },
  });
};


// new migration progress bar 
const newMigrationProgressBar = (state, action) => {
  return updateObject(state, {
    progressBarInitialValue: action.payload,
  });
};




// Fetch salesforce user list
const fetchSalesForceUserListSuccess = (state, action) => {
  //alert(JSON.stringify(state.CRMSolutionList))
  //alert(JSON.stringify(obj))
  return updateObject(state, {
    salesForceUserList: action.payload,
    status: "200",
    msg: action.msg,
    salesForceStatus:false
  });
};

const fetchSalesForceUserListFail = (state, action) => {
  return updateObject(state, {
    msg: "invalid instanceId",
    status: "400",
    salesForceStatus:true
  });
};
//reset status resetSalesForceStatus
// const resetSalesForceStatus = (state, action) => {
//   //alert(JSON.stringify(state.CRMSolutionList))
//   //alert(JSON.stringify(obj))
//   return updateObject(state, {
//     salesForceStatus:false
//   });
// };



// Fetch hub spot user list
const fetchHubSpotUserListSuccess = (state, action) => {
  //alert(JSON.stringify(state.CRMSolutionList))
  //alert(JSON.stringify(obj))
  return updateObject(state, {
    hubspotUserList: action.payload,
    status: "200",
    msg: action.msg,
  });
};

const fetchHubSpotUserListFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
  });
};

//reset hubspot and salesforce user list

const resetSfHsUserList = (state, action) => {
  return updateObject(state, {
    hubspotUserList: [],
    salesForceUserList: [],
  });
};

// match hub spot user list
const matchUserDataSuccess = (state, action) => {
  //alert(JSON.stringify(state.CRMSolutionList))
  //alert(JSON.stringify(action.msg))
  return updateObject(state, {
    matchUserData: action.payload,
    status: "200",
    msg: action.msg,
  });
};

const matchUserDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
  });
};

// refresh match user data
const refreshMatchUserDataSuccess = (state, action) => {
  //alert(JSON.stringify(state.fetchedCompanyList))
  //alert(JSON.stringify(obj))
  let availableIds = state.salesForceUserList.map((record) => record.id);
  console.log("available Ids", availableIds);

  let refreshList = action.payload.filter(
    (record) => !availableIds.includes(record.id)
  );
  console.log("refresh List", refreshList);
  let updatedUsersList = [...state.salesForceUserList, ...refreshList];
  console.log("updated match user list", updatedUsersList);

  return updateObject(state, {
    salesForceUserList: updatedUsersList,
    status: "200",
    msg: action.msg,
    salesForceStatus: false,
  });

};

const refreshMatchUserDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    salesForceStatus: true,
  });
};

//setEditInstanceActiveStep
const setEditInstanceActiveStep = (state, action) => {
  return updateObject(state, {
    activeStep: action.payload,
  });
};
//saveMtachUserData
const saveMtachUserData = (state, action) => {
  //alert(JSON.stringify (action.payload))
  return updateObject(state, {
    saveMatchUserData: action.payload,
  });
};

//storeMatchData
const storeMtachedUserData = (state, action) => {
  //alert(JSON.stringify (action.payload))
  return updateObject(state, {
    storeMatchData:action.payload,
  });
};

const setMapFieldsSelectedTabs = (state, action) => {
  //alert(JSON.stringify (action.payload))
  return updateObject(state, {
    mapFieldsSelectedTab: action.payload,
  });
};

// Fetch company data list on map fields list
const fetchmapCompanyDataSuccess = (state, action) => {
  //alert(JSON.stringify(state.fetchedCompanyList))
  //alert(JSON.stringify(obj))
  return updateObject(state, {
    fetchedCompanyList: action.payload,
    status: "200",
    msg: action.msg,
    initialRender: false,
  });
};

const fetchmapCompanyDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRender: true,
  });
};

// mapped company data
const mappedCompanyDataSuccess = (state, action) => {
  //alert(JSON.stringify(state.CRMSolutionList))
  //alert(JSON.stringify(action.msg))
  return updateObject(state, {
    mappedCompanyData: action.payload,
    status: "200",
    mappedCompanyStatus: "200",
    msg: action.msg,
    initialRender: false,
  });
};

const mappedCompanyDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    mappedCompanyStatus: "400",
    initialRender: false,
  });
};

//save Mapped Company Data
const saveMappedCompanyData = (state, action) => {
  //alert(JSON.stringify (action.payload))
  return updateObject(state, {
    saveMappedCompanyData: [action.payload],
  });
};

// refresh company data
const refreshCompanyDataSuccess = (state, action) => {
  //alert(JSON.stringify(state.fetchedCompanyList))
  //alert(JSON.stringify(obj))
  let availableIds = state.fetchedCompanyList.map((record) => record.id);
  console.log("available Ids", availableIds);

  let refreshList = action.payload.filter(
    (record) => !availableIds.includes(record.id)
  );
  console.log("refresh List", refreshList);
  let updatedCompanyList = [...state.fetchedCompanyList, ...refreshList];
  console.log("updated CompanyList", updatedCompanyList);

  return updateObject(state, {
    fetchedCompanyList: updatedCompanyList,
    status: "200",
    msg: action.msg,
    initialRender: false,
  });
};

const refreshCompanyDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRender: false,
  });
};

// Fetch contact data list on map fields list
const fetchMapContactDataSuccess = (state, action) => {
  //alert(JSON.stringify(action.payload))
  return updateObject(state, {
    fetchedContactList: action.payload,
    status: "200",
    msg: action.msg,
    initialRenderContact: false,
  });
};

const fetchMapContactDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderContact: true,
  });
};
// mapped contact data
const mappedContactDataSuccess = (state, action) => {
  return updateObject(state, {
    mappedContactData: action.payload,
    status: "200",
    mappedContactStatus: "200",
    msg: action.msg,
    initialRenderContact: false,
  });
};

const mappedContactDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    mappedContactStatus: "400",
    initialRenderContact: false,
  });
};

// refresh contact data
const refreshContactDataSuccess = (state, action) => {
  //alert(JSON.stringify(state.fetchedCompanyList))
  //alert(JSON.stringify(obj))
  let availableIds = state.fetchedContactList.map((record) => record.id);
  console.log("available Ids", availableIds);

  let refreshList = action.payload.filter(
    (record) => !availableIds.includes(record.id)
  );
  console.log("refresh List", refreshList);
  let updatedContactList = [...state.fetchedContactList, ...refreshList];
  console.log("updated CompanyList", updatedContactList);

  return updateObject(state, {
    fetchedContactList: updatedContactList,
    status: "200",
    msg: action.msg,
    initialRenderContact: false,
  });
};

const refreshContactDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderContact: false,
  });
};

// Fetch deals data list on map fields list
const fetchMapDealsDataSuccess = (state, action) => {
  //alert(JSON.stringify(action.payload))
  return updateObject(state, {
    fetchedDealsList: action.payload,
    status: "200",
    msg: action.msg,
    initialRenderDeals: false,
  });
};

const fetchMapDealsDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderDeals: true,
  });
};

// mapped deals data
const mappedDealsDataSuccess = (state, action) => {
  //alert(JSON.stringify(action.status))
  return updateObject(state, {
    mappedDealsData: action.payload,
    status: "200",
    mappedDealsStatus: "200",
    msg: action.msg,
    initialRenderDeals: false,
  });
};

const mappedDealsDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    mappedDealsStatus: "400",
    initialRenderDeals: false,
  });
};

// refresh Deals data
const refreshDealsDataSuccess = (state, action) => {
  //alert(JSON.stringify(state.fetchedCompanyList))
  //alert(JSON.stringify(obj))
  let availableIds = state.fetchedDealsList.map((record) => record.id);
  console.log("available Ids", availableIds);

  let refreshList = action.payload.filter(
    (record) => !availableIds.includes(record.id)
  );
  console.log("refresh List", refreshList);
  let updatedContactList = [...state.fetchedDealsList, ...refreshList];
  console.log("updated CompanyList", updatedContactList);

  return updateObject(state, {
    fetchedDealsList: updatedContactList,
    status: "200",
    msg: action.msg,
    initialRenderDeals: false,
  });
};

const refreshDealsDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderDeals: false,
  });
};

// Fetch product data list on map fields list
const fetchMapProductsDataSuccess = (state, action) => {
  //alert(JSON.stringify(action.payload))
  return updateObject(state, {
    fetchedProductList: action.payload,
    status: "200",
    msg: action.msg,
    initialRenderProduct: false,
  });
};

const fetchMapProductsDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderProduct: true,
  });
};

// mapped PRODUCT data
const mappedProductDataSuccess = (state, action) => {
  //alert(JSON.stringify(action.status))
  return updateObject(state, {
    mappedProductData: action.payload,
    status: "200",
    msg: action.msg,
    initialRenderProduct: false,
  });
};

const mappedProductDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderProduct: false,
  });
};

//refreshProductDataSuccess

// refresh product data
const refreshProductDataSuccess = (state, action) => {
  //alert(JSON.stringify(state.fetchedCompanyList))
  //alert(JSON.stringify(obj))
  let availableIds = state.fetchedProductList.map((record) => record.id);
  console.log("available Ids", availableIds);

  let refreshList = action.payload.filter(
    (record) => !availableIds.includes(record.id)
  );
  console.log("refresh List", refreshList);
  let updatedContactList = [...state.fetchedProductList, ...refreshList];
  console.log("updated CompanyList", updatedContactList);

  return updateObject(state, {
    fetchedProductList: updatedContactList,
    status: "200",
    msg: action.msg,
    initialRenderProduct: false,
  });
};

const refreshProductDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderDeals: false,
  });
};

//fetchMapTicketDataSuccess

// Fetch ticket data list on map fields list
const fetchMapTicketDataSuccess = (state, action) => {
  //alert(JSON.stringify(action.payload))
  return updateObject(state, {
    fetchedTicketList: action.payload,
    status: "200",
    msg: action.msg,
    initialRenderTicket: false,
  });
};

const fetchMapTicketDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderTicket: true,
  });
};

// mapped ticket data
const mappedTicketDataSuccess = (state, action) => {
  //alert(JSON.stringify(action.status))
  return updateObject(state, {
    mappedTicketData: action.payload,
    status: "200",
    msg: action.msg,
    initialRenderTicket: false,
  });
};

const mappedTicketDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderTicket: false,
  });
};

// refresh ticket data
const refreshTicketDataSuccess = (state, action) => {
  //alert(JSON.stringify(state.fetchedCompanyList))
  //alert(JSON.stringify(obj))
  let availableIds = state.fetchedTicketList.map((record) => record.id);
  console.log("available Ids", availableIds);

  let refreshList = action.payload.filter(
    (record) => !availableIds.includes(record.id)
  );
  console.log("refresh List", refreshList);
  let updatedContactList = [...state.fetchedTicketList, ...refreshList];
  console.log("updated CompanyList", updatedContactList);

  return updateObject(state, {
    fetchedTicketList: updatedContactList,
    status: "200",
    msg: action.msg,
    initialRenderTicket: false,
  });
};

const refreshTicketDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderTicket: false,
  });
};

// Fetch Email data list on map fields list
const fetchMapEmailDataSuccess = (state, action) => {
  //alert(JSON.stringify(action.payload))
  return updateObject(state, {
    fetchedEmailList: action.payload,
    status: "200",
    msg: action.msg,
    initialRenderEmail: false,
  });
};

const fetchMapEmailDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderEmail: true,
  });
};

// mapped Email data
const mappedEmailDataSuccess = (state, action) => {
  //alert(JSON.stringify(action.status))
  return updateObject(state, {
    mappedEmailData: action.payload,
    status: "200",
    msg: action.msg,
    initialRenderEmail: false,
  });
};

const mappedEmailDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderEmail: false,
  });
};

//refreshEmailDataSuccess
const refreshEmailDataSuccess = (state, action) => {
  //alert(JSON.stringify(state.fetchedCompanyList))
  //alert(JSON.stringify(obj))
  let availableIds = state.fetchedEmailList.map((record) => record.id);
  console.log("available Ids", availableIds);

  let refreshList = action.payload.filter(
    (record) => !availableIds.includes(record.id)
  );
  console.log("refresh List", refreshList);
  let updatedContactList = [...state.fetchedEmailList, ...refreshList];
  console.log("updated CompanyList", updatedContactList);

  return updateObject(state, {
    fetchedEmailList: updatedContactList,
    status: "200",
    msg: action.msg,
    initialRenderEmail: false,
  });
};

const refreshEmailDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderEmail: false,
  });
};

// Fetch Meeting data list on map fields list
const fetchMapMeetingDataSuccess = (state, action) => {
  //alert(JSON.stringify(action.payload))
  return updateObject(state, {
    fetchedMeetingList: action.payload,
    status: "200",
    msg: action.msg,
    initialRenderMeeting: false,
  });
};

const fetchMapMeetingDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderMeeting: true,
  });
};

// mapped Email data
const mappedMeetingDataSuccess = (state, action) => {
  //alert(JSON.stringify(action.status))
  return updateObject(state, {
    mappedMeetingData: action.payload,
    status: "200",
    msg: action.msg,
    initialRenderMeeting: false,
  });
};

const mappedMeetingDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderMeeting: false,
  });
};

//refresh meeting data
const refreshMeetingDataSuccess = (state, action) => {
  //alert(JSON.stringify(state.fetchedCompanyList))
  //alert(JSON.stringify(obj))
  let availableIds = state.fetchedMeetingList.map((record) => record.id);
  console.log("available Ids", availableIds);

  let refreshList = action.payload.filter(
    (record) => !availableIds.includes(record.id)
  );
  console.log("refresh List", refreshList);
  let updatedContactList = [...state.fetchedMeetingList, ...refreshList];
  console.log("updated CompanyList", updatedContactList);

  return updateObject(state, {
    fetchedMeetingList: updatedContactList,
    status: "200",
    msg: action.msg,
    initialRenderMeeting: false,
  });
};

const refreshMeetingDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderMeeting: false,
  });
};

// Fetch leads data list on map fields list
const fetchMapLeadDataSuccess = (state, action) => {
  //alert(JSON.stringify(action.payload))
  return updateObject(state, {
    fetchedLeadList: action.payload,
    status: "200",
    msg: action.msg,
    initialRenderLead: false,
  });
};

const fetchMapLeadDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderLead: true,
  });
};

// mapped leads data
const mappedLeadDataSuccess = (state, action) => {
  //alert(JSON.stringify(action.status))
  return updateObject(state, {
    mappedLeadData: action.payload,
    status: "200",
    msg: action.msg,
    initialRenderLead: false,
  });
};

const mappedLeadDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderLead: false,
  });
};

//refresh leads data
const refreshLeadDataSuccess = (state, action) => {
  //alert(JSON.stringify(state.fetchedCompanyList))
  //alert(JSON.stringify(obj))
  let availableIds = state.fetchedLeadList.map((record) => record.id);
  console.log("available Ids", availableIds);

  let refreshList = action.payload.filter(
    (record) => !availableIds.includes(record.id)
  );
  console.log("refresh List", refreshList);
  let updatedContactList = [...state.fetchedLeadList, ...refreshList];
  console.log("updated CompanyList", updatedContactList);

  return updateObject(state, {
    fetchedLeadList: updatedContactList,
    status: "200",
    msg: action.msg,
    initialRenderLead: false,
  });
};

const refreshLeadDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderLead: false,
  });
};

// Fetch NOTES data list on map fields list
const fetchMapNotesDataSuccess = (state, action) => {
  //alert(JSON.stringify(action.payload))
  return updateObject(state, {
    fetchedNotesList: action.payload,
    status: "200",
    msg: action.msg,
    initialRenderNotes: false,
  });
};

const fetchMapNotesDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderNotes: true,
  });
};

// mapped NOTES data
const mappedNotesDataSuccess = (state, action) => {
  //alert(JSON.stringify(action.status))
  return updateObject(state, {
    mappedNotesData: action.payload,
    status: "200",
    msg: action.msg,
    initialRenderNotes: false,
  });
};

const mappedNotesDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderNotes: false,
  });
};

//refresh NOTES data
const refreshNotesDataSuccess = (state, action) => {
  //alert(JSON.stringify(state.fetchedCompanyList))
  //alert(JSON.stringify(obj))
  let availableIds = state.fetchedNotesList.map((record) => record.id);
  console.log("available Ids", availableIds);

  let refreshList = action.payload.filter(
    (record) => !availableIds.includes(record.id)
  );
  console.log("refresh List", refreshList);
  let updatedContactList = [...state.fetchedNotesList, ...refreshList];
  console.log("updated CompanyList", updatedContactList);

  return updateObject(state, {
    fetchedNotesList: updatedContactList,
    status: "200",
    msg: action.msg,
    initialRenderNotes: false,
  });
};

const refreshNotesDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderNotes: false,
  });
};

//fetchMapAttachmentsDataSuccess

// Fetch NOTES data list on map fields list
const fetchMapAttachmentsDataSuccess = (state, action) => {
  //alert(JSON.stringify(action.payload))
  return updateObject(state, {
    fetchedAttachmentsList: action.payload,
    status: "200",
    msg: action.msg,
    initialRenderAttachments: false,
  });
};

const fetchMapAttachmentsDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderAttachments: true,
  });
};

// mapped Attachments data
const mappedAttachmentsDataSuccess = (state, action) => {
  //alert(JSON.stringify(action.status))
  return updateObject(state, {
    mappedAttachmentsData: action.payload,
    status: "200",
    msg: action.msg,
    initialRenderAttachments: false,
  });
};

const mappedAttachmentsDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderAttachments: false,
  });
};

//refresh initialRenderAttachments data
const refreshAttachmentsDataSuccess = (state, action) => {
  //alert(JSON.stringify(state.fetchedCompanyList))
  //alert(JSON.stringify(obj))
  let availableIds = state.fetchedAttachmentsList.map((record) => record.id);
  console.log("available Ids", availableIds);

  let refreshList = action.payload.filter(
    (record) => !availableIds.includes(record.id)
  );
  console.log("refresh List", refreshList);
  let updatedContactList = [...state.fetchedAttachmentsList, ...refreshList];
  console.log("updated CompanyList", updatedContactList);

  return updateObject(state, {
    fetchedAttachmentsList: updatedContactList,
    status: "200",
    msg: action.msg,
    initialRenderAttachments: false,
  });
};

const refreshAttachmentsDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderAttachments: false,
  });
};

//fetch SelectedObject List

const fetchSelectedObjectListSuccess = (state, action) => {
  return updateObject(state, {
    fetchedSelectedObjectList: action.payload,
    status: "200",
    msg: action.msg,
    intialRenderSelectedObject: false,
    
  });
};

const fetchSelectedObjectListFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    intialRenderSelectedObject: true,
    
  });
};

//mappedSelectedObjectDataSuccess
// mapped selected object data
const mappedSelectedObjectDataSuccess = (state, action) => {
  //alert(JSON.stringify(action.payload))
  return updateObject(state, {
    mappedSelectedObject: action.payload,
    status: "200",
    msg: action.msg,
    intialRenderSelectedObject: false,
    selectedObjectStatus:true,
    infoPopupStatus:false
  });
};

const mappedSelectedObjectDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    intialRenderSelectedObject: false,
    selectedObjectStatus:false,
    infoPopupStatus:true

  });
};
const infoPopupStatus = (state, action) =>{
  console.log(action.payload)
  return updateObject(state, {
    infoPopupStatus:false
  })
}

//reset status selected object
const resetSelectedObjectStatus = (state, action) => {
  //alert(JSON.stringify(state.CRMSolutionList))
  //alert(JSON.stringify(obj))
  return updateObject(state, {
    selectedObjectStatus:false
  });
};

//save selected object list screen
const saveSelectedObjectData = (state, action) => {
  // let newObj = {from:action.payload}
  //alert(JSON.stringify(action.payload))
  return updateObject(state, {
    saveSelectedObjectData: action.payload,
  });
};

//fetch map field tab list
const fetchMapFieldTabsListSuccess = (state, action) => {
  //alert(JSON.stringify(action.status))
  return updateObject(state, {
    fetchMapFieldTabsList: action.payload,
    status: "200",
    msg: action.msg,
    //intialRenderSelectedObject:false,
  });
};

const fetchMapFieldTabsListFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    //intialRenderSelectedObject:false
  });
};


// Fetch Engage data list on map fields list
const fetchMapEngageDataSuccess = (state, action) => {
  //alert(JSON.stringify(action.payload))
  return updateObject(state, {
    fetchedEngageList: action.payload,
    status: "200",
    msg: action.msg,
    initialRenderEngage: false,
  });
};

const fetchMapEngageDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderEngage: true,
  });
};

// mapped Engage data
const mappedEngageDataSuccess = (state, action) => {
  //alert(JSON.stringify(action.status))
  return updateObject(state, {
    mappedEngageData: action.payload,
    status: "200",
    msg: action.msg,
    initialRenderEngage: false,
  });
};

const mappedEngageDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderEngage: false,
  });
};

//refresh Engage data
const refreshEngageDataSuccess = (state, action) => {
  //alert(JSON.stringify(state.fetchedCompanyList))
  //alert(JSON.stringify(obj))
  let availableIds = state.fetchedEngageList.map((record) => record.id);
  console.log("available Ids", availableIds);

  let refreshList = action.payload.filter(
    (record) => !availableIds.includes(record.id)
  );
  console.log("refresh List", refreshList);
  let updatedContactList = [...state.fetchedEngageList, ...refreshList];
  console.log("updated CompanyList", updatedContactList);

  return updateObject(state, {
    fetchedEngageList: updatedContactList,
    status: "200",
    msg: action.msg,
    initialRenderEngage: false,
  });
};

const refreshEngageDataFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    initialRenderEngage: false,
  });
};

//demo migration

const demoMigrationSuccess = (state, action) => {
  //alert(JSON.stringify(action.payload))
  //alert(JSON.stringify(action))

  return updateObject(state, {
    demoMigrationData: action.payload,
    status: "200",
    msg: action.msg,
    demoMigrationStatus:true
    
  });
};

const demoMigrationFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    demoMigrationStatus:false
   
  });
};

//start migration

const startMigrationSuccess = (state, action) => {
  //alert(JSON.stringify(action.payload))
  //alert(JSON.stringify(action))

  return updateObject(state, {
    startMigrationData: action.payload,
    status: "200",
    msg: action.msg,
    startMigrationStatus:true
    
  });
};

const startMigrationFail = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    status: "400",
    startMigrationStatus:false
   
  });
};

const resetDemoMigrationStatus = (state, action) =>{
  return updateObject(state, {
    demoMigrationStatus:false
  })
}
/**fetch external ids */
const fetchExternalIdsSuccess = (state, action) =>{
return updateObject(state,{
    externalIdsList: action.payload,
    status: "200",
    msg: action.msg,

})
}

const fetchExternalIdsFail = (state, action) =>{
return updateObject(state,{
  msg: action.msg,
  status: "400",

})
}

/**migration report */

const migrationReportDataSuccess = (state, action) =>{
//alert(JSON.stringify(action.payload))
  return updateObject(state,{
    migrationData:action.payload,
    status: "200",
    msg: action.msg,

  })
}
const migrationReportDataFail = (state, action) =>{
  return updateObject(state,{
    msg: action.msg,
    status: "400",

  })

}
/**end migration report */

/**migration details */

const migrationDetailsSuccess = (state, action) =>{
  //alert(JSON.stringify(action.payload))
    return updateObject(state,{
      migrationDetail:action.payload,
      status: "200",
      msg: action.msg,
  
    })
  }
  const migrationDetailsFail = (state, action) =>{
    return updateObject(state,{
      msg: action.msg,
      status: "400",
  
    })
  
  }
  /**end migration Details */

  /**Remove mapfield row - company  */
  const removeCompanyMapFieldRow = (state, action) =>{
    //console.log('id is', action.payload)
    const id = action.payload
    const companyList = state.fetchedCompanyList
    //console.log("companyList", companyList);
    const updatedList = companyList.filter((row)=>row.id !== id)
    //console.log('filtered Array', updatedList)
    return updateObject(state, {
      fetchedCompanyList: updatedList,
     });
  }

const removeCompanyMapFieldFlag = (state, action) => {
  return updateObject(state, {
    CompanyMapFieldFlag: action.payload
  })
}
  /**end remove company */

    /**Remove mapfield row - contact  */
    const removeContactMapFieldRow = (state, action) =>{
      //console.log('id is', action.payload)
      const id = action.payload
      const contactList = state.fetchedContactList
      //console.log("companyList", companyList);
      const updatedList = contactList.filter((row)=>row.id !== id)
      //console.log('filtered Array', updatedList)
      return updateObject(state, {
        fetchedContactList: updatedList,
       });
    }
  
  const removeContactMapFieldFlag = (state, action) => {
    return updateObject(state, {
      contactMapFieldFlag: action.payload
    })
  }
    /**end remove contact */


    /**Remove mapfield row - deals  */
    const removeDealsMapFieldRow = (state, action) =>{
      //console.log('id is', action.payload)
      const id = action.payload
      const dealstList = state.fetchedDealsList
      //console.log("companyList", companyList);
      const updatedList = dealstList.filter((row)=>row.id !== id)
      //console.log('filtered Array', updatedList)
      return updateObject(state, {
        fetchedDealsList: updatedList,
       });
    }
  
  const removeDealsMapFieldFlag = (state, action) => {
    return updateObject(state, {
      dealsMapFieldFlag: action.payload
    })
  }
    /**end remove deals */


    /**Remove mapfield row - ENGAGEMENT  */
    const removeEngagementMapFieldRow = (state, action) =>{
      //console.log('id is', action.payload)
      const id = action.payload
      const engagementList = state.fetchedEngageList
      //console.log("companyList", companyList);
      const updatedList = engagementList.filter((row)=>row.id !== id)
      //console.log('filtered Array', updatedList)
      return updateObject(state, {
        fetchedEngageList: updatedList,
       });
    }
  
  const removeEngagementMapFieldFlag = (state, action) => {
    return updateObject(state, {
      engagementMapFieldFlag: action.payload
    })
  }
    /**end remove ENGAGEMENT */

    /**Remove mapfield row - ENGAGEMENT  */
    const removeTicketMapFieldRow = (state, action) =>{
      //console.log('id is', action.payload)
      const id = action.payload
      const ticketList = state.fetchedTicketList
      //console.log("companyList", companyList);
      const updatedList = ticketList.filter((row)=>row.id !== id)
      //console.log('filtered Array', updatedList)
      return updateObject(state, {
        fetchedTicketList: updatedList,
       });
    }
  
  const removeTicketMapFieldFlag = (state, action) => {
    return updateObject(state, {
      ticketMapFieldFlag: action.payload
    })
  }
    /**end remove ENGAGEMENT */



/**Reset edit instance inital values */
const resetEditInstanceInitials = (state, action) =>{
  return updateObject(state,{
    activeStep: 0,
    mapFieldsSelectedTab:0,
    saveSelectedObjectData: [],
    saveMatchUserData:[],
    matchUserData:[],
    storeMatchData:[],
    initialRender: true,
  initialRenderContact: true,
  initialRenderDeals: true, 
  initialRenderProduct: true,
  initialRenderTicket: true,  
  initialRenderEmail: true,
  initialRenderMeeting: true, 
  initialRenderLead: true,
  initialRenderNotes: true, 
  initialRenderAttachments: true, 
  intialRenderSelectedObject: true,  
  initialRenderEngage: true,
  salesForceUserList:[],
  salesForceStatus:true,
  demoMigrationStatus:false,
  stopMigrationStatus:false,
  externalIdsList:[],
  demoMigrationData:false,
  migrationDetail: [],
  migrationData: [],
  startMigrationStatus:false,
  CompanyMapFieldFlag: true,
  contactMapFieldFlag: true,  
  dealsMapFieldFlag: true,
  engagementMapFieldFlag:true,
  ticketMapFieldFlag: true,
  selectedObjectStatus: false,
  infoPopupStatus:false,

  })

}



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_ALL_SOLUTION_SUCCESS:
      return fetchAllSolutionsSuccess(state, action);
    case actionType.FETCH_ALL_SOLUTION_FAIL:
      return fetchAllSolutionsFail(state, action);
    // case actionType.FETCH_ALL_SOLUTION_FAIL:
    //     return fetchAllSolutionsFail(state,action)

    //updated API for getting solution list

    case actionType.GET_ALL_SOLUTION_SUCCESS:
      return getAllSolutionsSuccess(state, action);
    case actionType.GET_ALL_SOLUTION_FAIL:
      return getAllSolutionsFail(state, action);

    //solution instances
    case actionType.FETCH_SOLUTION_INSTANCES_SUCCESS:
      return fetchSolutionInstancesSuccess(state, action);
    case actionType.FETCH_SOLUTION_INSTANCES_FAIL:
      return fetchSolutionInstancesFail(state, action);

    case actionType.DELETE_SOLUTION_INSTANCES_SUCCESS:
      return deleteSolutionInstancesSuccess(state, action);
    case actionType.DELETE_SOLUTION_INSTANCES_FAIL:
      return deleteSolutionInstancesFail(state, action);

    case actionType.RESET_SOLUTION_STATUS:
      return resetSolutionStatus(state, action);

    case actionType.CHANGE_STATUS_SOLUTION_INSTANCES_SUCCESS:
      return changeStatusSolutionInstancesSuccess(state, action);
    case actionType.CHANGE_STATUS_SOLUTION_INSTANCES_FAIL:
      return changeStatusSolutionInstancesFail(state, action);
    // case actionType.CONFIGE_INSTANCE_SOLUTION_SUCCESS:
    //     return configeInstanceSolutionSuccess(state, action)
    // case actionType.CONFIGE_INSTANCE_SOLUTION_FAIL:
    //     return configeInstanceSolutionFail(state, action)

    //save selected object
    case actionType.SAVE_SELECTEDOJECT:
      return saveSelectedObject(state, action);

    case actionType.SET_INITLA_STATE_FOR_SOLUTION:
      return setIntialState(state, action);

    case actionType.SET_SELECTED_TAB_VALUE:
      return setSelectedTabValue(state, action);
    //From CRM list data fetchFromCrmListSuccess
    case actionType.FETCH_FROM_CRM_LIST_SUCCESS:
      return fetchFromCrmListSuccess(state, action);
    case actionType.FETCH_FROM_CRM_LIST_FAIL:
      return fetchFromCrmListFail(state, action);

    //From CRM list data fetchFromCrmListSuccess
    case actionType.FETCH_TO_CRM_LIST_SUCCESS:
      return fetchToCrmListSuccess(state, action);
    case actionType.FETCH_TO_CRM_LIST_FAIL:
      return fetchToCrmListFail(state, action);

    //to show complete CRM solution list
    case actionType.FETCH_CRM_SOLUTION_LIST_SUCCESS:
      return fetchCrmSolutionListSuccess(state, action);
    case actionType.FETCH_CRM_SOLUTION_LIST_FAIL:
      return fetchCrmSolutionListFail(state, action);

    case actionType.RESET_SELECTED_CRM_OBJECT:
      return resetSelectedCRMObject(state, action);

    case actionType.SET_CONFIG_INSTANCE:
      return setConfigInstance(state, action);

    case actionType.SET_TABS_VALUE:
      return setTabsValue(state, action);

    //new migration progress bar
      case actionType.NEW_MIGRATION_PROGRESS_BAR:
        return newMigrationProgressBar(state, action);

    //fetch salesforce user list
    case actionType.FETCH_SALESFORCE_USER_LIST_SUCCESS:
      return fetchSalesForceUserListSuccess(state, action);
    case actionType.FETCH_SALESFORCE_USER_LIST_FAIL:
      return fetchSalesForceUserListFail(state, action);

    //fetch HUB SPOT user list
    case actionType.FETCH_HUBSPOT_USER_LIST_SUCCESS:
      return fetchHubSpotUserListSuccess(state, action);
    case actionType.FETCH_HUBSPOT_USER_LIST_FAIL:
      return fetchHubSpotUserListFail(state, action);

    //reset salesforce and hubspot user list

    case actionType.RESET_SF_HF_USER_LIST:
      return resetSfHsUserList(state, action);

    //match user data
    case actionType.MATCH_USER_DATA_SUCCESS:
      return matchUserDataSuccess(state, action);
    case actionType.MATCH_USER_DATA_FAIL:
      return matchUserDataFail(state, action);
    
    //refresh match user data
    case actionType.REFRESH_MATCH_USER_DATA_SUCCESS:
      return refreshMatchUserDataSuccess(state, action);
    case actionType.REFRESH_MATCH_USER_DATA_FAIL:
      return refreshMatchUserDataFail(state, action);

    //set edit instance active step
    case actionType.EDIT_ISTANCE_SET_ACTIVE_STEP:
      return setEditInstanceActiveStep(state, action);

    //saveMtachUserData
    //save user data
    case actionType.SAVE_MATCH_USER_DATA:
      return saveMtachUserData(state, action);
    //storeMtachedUserData
    case actionType.STORE_MATCHED_USERS_DATA:
      return storeMtachedUserData(state, action);

    //setMapFieldsSelectedTabs
    case actionType.SET_MAP_FIELDS_SELECTED_TABS:
      return setMapFieldsSelectedTabs(state, action);

    //fetch company map field list
    case actionType.FETCH_MAP_COMPANY_DATA_SUCCESS:
      return fetchmapCompanyDataSuccess(state, action);
    case actionType.FETCH_MAP_COMPANY_DATA_FAIL:
      return fetchmapCompanyDataFail(state, action);

    //mapped company data
    case actionType.MAPPED_COMPANY_DATA_SUCCESS:
      return mappedCompanyDataSuccess(state, action);
    case actionType.MAPPED_COMPANY_DATA_FAIL:
      return mappedCompanyDataFail(state, action);

    //save user data
    case actionType.SAVE_MAPPED_COMPANY_DATA:
      return saveMappedCompanyData(state, action);

    //refresh company map field list
    case actionType.REFRESH_MAP_COMPANY_DATA_SUCCESS:
      return refreshCompanyDataSuccess(state, action);
    case actionType.REFRESH_MAP_COMPANY_DATA_FAIL:
      return refreshCompanyDataFail(state, action);

    //fetch company map field list
    case actionType.FETCH_MAP_CONTACT_DATA_SUCCESS:
      return fetchMapContactDataSuccess(state, action);
    case actionType.FETCH_MAP_CONTACT_DATA_FAIL:
      return fetchMapContactDataFail(state, action);

    //mapped CONTACT  data
    case actionType.MAPPED_CONTACT_DATA_SUCCESS:
      return mappedContactDataSuccess(state, action);
    case actionType.MAPPED_CONTACT_DATA_FAIL:
      return mappedContactDataFail(state, action);
    //
    //refresh company map field list
    case actionType.REFRESH_MAP_CONTACT_DATA_SUCCESS:
      return refreshContactDataSuccess(state, action);
    case actionType.REFRESH_MAP_CONTACT_DATA_FAIL:
      return refreshContactDataFail(state, action);

    //fetch deals map field list
    case actionType.FETCH_MAP_DEALS_DATA_SUCCESS:
      return fetchMapDealsDataSuccess(state, action);
    case actionType.FETCH_MAP_DEALS_DATA_FAIL:
      return fetchMapDealsDataFail(state, action);

    //mapped deals  data
    case actionType.MAPPED_DEALS_DATA_SUCCESS:
      return mappedDealsDataSuccess(state, action);
    case actionType.MAPPED_DEALS_DATA_FAIL:
      return mappedDealsDataFail(state, action);

    //refresh deals map field list
    case actionType.REFRESH_MAP_DEALS_DATA_SUCCESS:
      return refreshDealsDataSuccess(state, action);
    case actionType.REFRESH_MAP_DEALS_DATA_FAIL:
      return refreshDealsDataFail(state, action);

    //fetch product data list
    case actionType.FETCH_MAP_PRODUCT_DATA_SUCCESS:
      return fetchMapProductsDataSuccess(state, action);
    case actionType.FETCH_MAP_PRODUCT_DATA_FAIL:
      return fetchMapProductsDataFail(state, action);

    //mapped Product  data
    case actionType.MAPPED_PRODUCT_DATA_SUCCESS:
      return mappedProductDataSuccess(state, action);
    case actionType.MAPPED_PRODUCT_DATA_FAIL:
      return mappedProductDataFail(state, action);

    //refresh Product  data
    case actionType.REFRESH_MAP_PRODUCT_DATA_SUCCESS:
      return refreshProductDataSuccess(state, action);
    case actionType.REFRESH_MAP_PRODUCT_DATA_FAIL:
      return refreshProductDataFail(state, action);

    //fetch ticket data list
    case actionType.FETCH_MAP_TICKET_DATA_SUCCESS:
      return fetchMapTicketDataSuccess(state, action);
    case actionType.FETCH_MAP_TICKET_DATA_FAIL:
      return fetchMapTicketDataFail(state, action);

    //mapped ticket  data
    case actionType.MAPPED_TICKET_DATA_SUCCESS:
      return mappedTicketDataSuccess(state, action);
    case actionType.MAPPED_TICKET_DATA_FAIL:
      return mappedTicketDataFail(state, action);

    //refresh ticket  data
    case actionType.REFRESH_MAP_TICKET_DATA_SUCCESS:
      return refreshTicketDataSuccess(state, action);
    case actionType.REFRESH_MAP_TICKET_DATA_FAIL:
      return refreshTicketDataFail(state, action);

    //fetch Email data list
    case actionType.FETCH_MAP_EMAIL_DATA_SUCCESS:
      return fetchMapEmailDataSuccess(state, action);
    case actionType.FETCH_MAP_EMAIL_DATA_FAIL:
      return fetchMapEmailDataFail(state, action);

    //mapped email  data
    case actionType.MAPPED_EMAIL_DATA_SUCCESS:
      return mappedEmailDataSuccess(state, action);
    case actionType.MAPPED_EMAIL_DATA_FAIL:
      return mappedEmailDataFail(state, action);

    //refresh email  data
    case actionType.REFRESH_MAP_EMAIL_DATA_SUCCESS:
      return refreshEmailDataSuccess(state, action);
    case actionType.REFRESH_MAP_EMAIL_DATA_FAIL:
      return refreshEmailDataFail(state, action);

    //fetch meeting data list
    case actionType.FETCH_MAP_MEETING_DATA_SUCCESS:
      return fetchMapMeetingDataSuccess(state, action);
    case actionType.FETCH_MAP_MEETING_DATA_FAIL:
      return fetchMapMeetingDataFail(state, action);

    //mapped meeting  data
    case actionType.MAPPED_MEETING_DATA_SUCCESS:
      return mappedMeetingDataSuccess(state, action);
    case actionType.MAPPED_MEETING_DATA_FAIL:
      return mappedMeetingDataFail(state, action);

    //refresh meeting  data
    case actionType.REFRESH_MAP_MEETING_DATA_SUCCESS:
      return refreshMeetingDataSuccess(state, action);
    case actionType.REFRESH_MAP_MEETING_DATA_FAIL:
      return refreshMeetingDataFail(state, action);

    //fetch leads data list
    case actionType.FETCH_MAP_LEADS_DATA_SUCCESS:
      return fetchMapLeadDataSuccess(state, action);
    case actionType.FETCH_MAP_LEADS_DATA_FAIL:
      return fetchMapLeadDataFail(state, action);

    //mapped leads data
    case actionType.MAPPED_LEADS_DATA_SUCCESS:
      return mappedLeadDataSuccess(state, action);
    case actionType.MAPPED_LEADS_DATA_FAIL:
      return mappedLeadDataFail(state, action);

    //refresh leads data
    case actionType.REFRESH_MAP_LEADS_DATA_SUCCESS:
      return refreshLeadDataSuccess(state, action);
    case actionType.REFRESH_MAP_LEADS_DATA_FAIL:
      return refreshLeadDataFail(state, action);

    //fetch notes data list
    case actionType.FETCH_MAP_NOTES_DATA_SUCCESS:
      return fetchMapNotesDataSuccess(state, action);
    case actionType.FETCH_MAP_NOTES_DATA_FAIL:
      return fetchMapNotesDataFail(state, action);

    //mapped notes data
    case actionType.MAPPED_NOTES_DATA_SUCCESS:
      return mappedNotesDataSuccess(state, action);
    case actionType.MAPPED_NOTES_DATA_FAIL:
      return mappedNotesDataFail(state, action);

    //refresh notes data
    case actionType.REFRESH_MAP_NOTES_DATA_SUCCESS:
      return refreshNotesDataSuccess(state, action);
    case actionType.REFRESH_MAP_NOTES_DATA_FAIL:
      return refreshNotesDataFail(state, action);

    //fetch attachment data list
    case actionType.FETCH_MAP_ATTACHMENTS_DATA_SUCCESS:
      return fetchMapAttachmentsDataSuccess(state, action);
    case actionType.FETCH_MAP_ATTACHMENTS_DATA_FAIL:
      return fetchMapAttachmentsDataFail(state, action);

    //mapped attachment data
    case actionType.MAPPED_ATTACHMENTS_DATA_SUCCESS:
      return mappedAttachmentsDataSuccess(state, action);
    case actionType.MAPPED_ATTACHMENTS_DATA_FAIL:
      return mappedAttachmentsDataFail(state, action);

    //refresh attachment data
    case actionType.REFRESH_MAP_ATTACHMENTS_DATA_SUCCESS:
      return refreshAttachmentsDataSuccess(state, action);
    case actionType.REFRESH_MAP_ATTACHMENTS_DATA_FAIL:
      return refreshAttachmentsDataFail(state, action);

    //  fetch selceted object list
    case actionType.FETCH_SELECTED_OBJECT_LIST_SUCCESS:
      return fetchSelectedObjectListSuccess(state, action);
    case actionType.FETCH_SELECTED_OBJECT_LIST_FAIL:
      return fetchSelectedObjectListFail(state, action);

    //mapped selceted object data
    case actionType.MAPPED_SELECTED_OBJECT_DATA_SUCCESS:
      return mappedSelectedObjectDataSuccess(state, action);
    case actionType.MAPPED_SELECTED_OBJECT_DATA_FAIL:
      return mappedSelectedObjectDataFail(state, action);

      case actionType.INFO_POPUP_STATUS:
        return infoPopupStatus(state, action);
    
    //mapped selceted object data
       case actionType.RESET_SELECTED_OBJECT_STATUS:
        return resetSelectedObjectStatus(state, action); 

    //save selected object data
    case actionType.SAVE_SELECTED_OBJECT_DATA:
      return saveSelectedObjectData(state, action);

    //fetch map fields tabs list data
    case actionType.FETCH_MAP_FIELDS_TABS_LIST_SUCCESS:
      return fetchMapFieldTabsListSuccess(state, action);
    case actionType.FETCH_MAP_FIELDS_TABS_LIST_FAIL:
      return fetchMapFieldTabsListFail(state, action);

    //fetch Engagement data list
    case actionType.FETCH_MAP_ENGAGE_DATA_SUCCESS:
      return fetchMapEngageDataSuccess(state, action);
    case actionType.FETCH_MAP_ENGAGE_DATA_FAIL:
      return fetchMapEngageDataFail(state, action);

    //mapped Engagement data
    case actionType.MAPPED_ENGAGE_DATA_SUCCESS:
      return mappedEngageDataSuccess(state, action);
    case actionType.MAPPED_ENGAGE_DATA_FAIL:
      return mappedEngageDataFail(state, action);

    //refresh Engagement data
    case actionType.REFRESH_MAP_ENGAGE_DATA_SUCCESS:
      return refreshEngageDataSuccess(state, action);
    case actionType.REFRESH_MAP_ENGAGE_DATA_FAIL:
      return refreshEngageDataFail(state, action);
    case actionType.RESET_EDIT_INSTANCE_INITIAL_VALUES:
      return resetEditInstanceInitials(state, action);
      //resetSalesForceStatus
    // case actionType.SALESfORCE_RESET_STATUS:
    //     return resetSalesForceStatus(state, action);

    //demo migration
    case actionType.DEMO_MIGRATION_SUCCESS:
      return demoMigrationSuccess(state, action);
    case actionType.DEMO_MIGRATION_FAIL:
      return demoMigrationFail(state, action);

    //start migration
    case actionType.START_MIGRATION_SUCCESS:
      return startMigrationSuccess(state, action);
    case actionType.START_MIGRATION_FAIL:
      return startMigrationFail(state, action);

    //reset demo migration status
    case actionType.RESET_DEMO_MIGRATION_STATUS:
      return resetDemoMigrationStatus(state, action);

    //fetch externa ids 
    case actionType.FETCH_EXTERNALIDS_SUCCESS:
      return fetchExternalIdsSuccess(state, action);
    case actionType.FETCH_EXTERNALIDS_FAIL:
      return fetchExternalIdsFail(state, action);

    //Migration report data
    case actionType.MIGRATION_REPORT_DATA_SUCCESS:
      return migrationReportDataSuccess(state, action);
    case actionType.MIGRATION_REPORT_DATA_FAIL:
      return migrationReportDataFail(state, action);

    //Migration detail data
    case actionType.MIGRATION_DETAILS_DATA_SUCCESS:
      return migrationDetailsSuccess(state, action);
    case actionType.MIGRATION_DETAILS_DATA_FAIL:
      return migrationDetailsFail(state, action);  

    // Remove mapField row - company
    case actionType.REMOVE_COMPANY_MAPFIELDS_ROW:
      return removeCompanyMapFieldRow(state, action)

    // Remove mapField row - company
    case actionType.REMOVE_COMPANY_MAPFIELDS_FLAG:
      return removeCompanyMapFieldFlag(state, action)

    // Remove mapField row -contact
    case actionType.REMOVE_CONTACT_MAPFIELDS_ROW:
      return removeContactMapFieldRow(state, action)

    // Remove mapField row - contact
    case actionType.REMOVE_CONTACT_MAPFIELDS_FLAG:
      return removeContactMapFieldFlag(state, action)

    // Remove mapField row -deals
    case actionType.REMOVE_DEALS_MAPFIELDS_ROW:
      return removeDealsMapFieldRow(state, action)

    // Remove mapField row - deals
    case actionType.REMOVE_DEALS_MAPFIELDS_FLAG:
      return removeDealsMapFieldFlag(state, action)

    // Remove mapField row -engagement
    case actionType.REMOVE_ENGAGEMENT_MAPFIELDS_ROW:
      return removeEngagementMapFieldRow(state, action)

    // Remove mapField row - engagement
    case actionType.REMOVE_ENGAGEMENT_MAPFIELDS_FLAG:
      return removeEngagementMapFieldFlag(state, action)

    // Remove mapField row - ticket
    case actionType.REMOVE_TICKET_MAPFIELDS_ROW:
      return removeTicketMapFieldRow(state, action)

    // Remove mapField row - ticket
    case actionType.REMOVE_TICKET_MAPFIELDS_FLAG:
      return removeTicketMapFieldFlag(state, action)

    default:
      return state;
  }
};

//setTabsValue

export default reducer;
