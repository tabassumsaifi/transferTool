import { put } from "redux-saga/effects";
import * as actions from "../../action";
import axios from "../../../axios";
// import { useSelector, useDispatch } from "react-redux";

export function* fetchAllSolutionsSaga(action) {
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/solutions", {
      method: "post",
      data: "",
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to fecth solution");

    yield put(
      actions.fetchAllSolutionsSuccess(respData.data.data, respData.data.msg) //"Solution Fetch successfully from the tray.io")
    );
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: true,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.fetchAllSolutionsFail("Unable to fetch response"));
    yield put(actions.hideLoader());
  }
}

//getting list of solution by updated API

export function* getAllSolutionsSaga(action) {
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/getSolutionList", {
      method: "get",
      data: "",
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to fecth solution");
    //alert(JSON.stringify(respData.data.data.solutionsArray))
    yield put(
      actions.getAllSolutionsSuccess(
        respData.data.data.solutionsArray,
        respData.data.msg
      ) //"Solution get successfully from the tray.io")
    );
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: true,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.getAllSolutionsFail("Unable to fetch response"));
    yield put(actions.hideLoader());
  }
}

//end

export function* fetchInstancesSaga(action) {
  yield put(actions.displayLoader());

  try {
    //let respData = yield axios('/api/solutionInstances', {
    let respData = yield axios("api/modifiedSolutionInstances", {
      method: "get",
      // data:''
    });

    //console.log("response data", respData)
    if (respData.data.status !== 200)
      throw new Error("Unable to fecth solution");

    yield put(
      actions.fetchSolutionInstancesSuccess(
        respData.data.data,
        respData.data.msg
      )
    );
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: true,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.fetchSolutionInstancesFail("Unable to fetch response"));
    yield put(
      actions.hideLoader({
        status: "400",
        msg: "Unable to fetch response",
        alertStatus: true,
      })
    );
  }
}

export function* deleteInstancesSaga(action) {
  yield put(actions.displayLoader());
  // alert(action.payload)

  try {
    let respData = yield axios("/api/solutionInstance", {
      method: "DELETE",
      // api/solutionInstance
      // data:''
      params: {
        solutionInstanceId: action.payload,
      },
    });

    if (respData.data.status !== 200) throw new Error("Unable Delete instances");

    yield put(actions.deleteSolutionInstancesSuccess(action.payload));
    yield put(actions.hideLoader());
  } catch (e) {
    console.log(e);
    yield put(actions.deleteSolutionInstancesFail("delete to fetch response"));
    yield put(actions.hideLoader());
  }
}

export function* changeStatusInstancesSaga(action) {
  //alert( JSON.stringify(action.payload))
  yield put(actions.displayLoader());
  // alert( JSON.stringify(action.payload))

  try {
    let respData = yield axios(
      `/api/solutionInstance?solutionInstanceId=${action.payload.id}`,
      {
        method: "PATCH",
        // api/solutionInstance
        // data:''
        // params: {
        //     solutionInstanceId: action.payload.id
        //   },
        headers: {
          "content-type": "application/json",
        },
        data: JSON.stringify({
          status: action.payload.status,
        }),
        //   data:action.payload.status
      }
    );
    //console('status print', action.payload.status);

    if (respData.data.status !== 200)
      throw new Error("Unable to modify instance enable status");

    yield put(actions.changeStatusSolutionInstancesSuccess(action.payload.id));
    //wehook trigger
    if (action.payload.status === false) {
      let hookData = yield axios(`/api/triggerWebhook`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        data: JSON.stringify({
          instance: action.payload.id,
        }),
        //   data:action.payload.status
      });
      //alert("hook triggered");
      //console.log("hook data", hookData.data);
    }

    yield put(actions.hideLoader());
  } catch (e) {
    console.log(e);
    yield put(
      actions.changeStatusSolutionInstancesFail("delete to fetch response")
    );
    yield put(actions.hideLoader());
  }
}

//Fetch From CRM list

export function* fetchFromCRMSaga(action) {
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("api/getSolutionFromOrTo", {
      method: "get",
      params: {
        flag: "from",
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to fecth From CRM list");

    yield put(
      actions.fetchFromCrmListSuccess(respData.data.data, respData.data.msg) //"Solution Fetch successfully from the tray.io")
    );
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.fetchFromCrmListFail("Unable to fecth From CRM list"));
    yield put(actions.hideLoader());
  }
}

//Fetch To CRM list

export function* fetchToCRMSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("api/getSolutionFromOrTo", {
      method: "get",
      params: {
        flag: action.payload,
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to fecth To CRM list");

    yield put(
      actions.fetchToCrmListSuccess(respData.data.data, respData.data.msg) //"Solution Fetch successfully from the tray.io")
    );
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.fetchToCrmListFail("Unable to fecth To CRM list"));
    yield put(actions.hideLoader());
  }
}

//Fetch CRM Solution  list

// async function renderFunction(data) {
//         // let imageObjectURL;
//         // data.map(async (element)=>{
//         // let response = await axios(`${element.fromImgLink}`)
//         //      console.log("mmm", response)
//         //    let imageBlob = await response.blob()
//         //     imageObjectURL = URL.createObjectURL(imageBlob);
//         //     console.log("URL----->>>",imageObjectURL);
//         //     element.image = imageObjectURL;
//         // });
//         var imageObjectURL
//         data.forEach(async (element,index)=>{
//             await fetch(`${element.fromImgLink}`)
//             .then(response => response.blob())
//             .then(imageBlob => {
//             // Then create a local URL for that image and print it
//             const imageObjectURL = URL.createObjectURL(imageBlob);
//             console.log("URL----->>> saga",imageObjectURL);
//             element.image = imageObjectURL;
//         });
//         if(index==data.length){
//             console.log("data length", data.length)
//               return data
//         }
//     })

// }

export function* fetchCRMSolutionListSaga(action) {
  //alert(JSON.stringify(action))
  //console.log("solution actions", action)
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/getSolutionDetails/", {
      method: "post",
      data: { from: action.payload.from, to: action.payload.to },
    });

    //console.log("hhh", respData.data.data);
    // let modifyResponse = yield renderFunction([respData.data.data]);
    //     console.log('mmm', modifyResponse)

    if (respData.data.status !== 200)
      throw new Error("Unable to fecth CRM Solution list");

    yield put(
      actions.fetchCrmSolutionListSuccess(respData.data.data, respData.data.msg) //"Solution Fetch successfully from the tray.io")
    );
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: true,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(
      actions.fetchCrmSolutionListFail("Unable to fecth CRM Solution list")
    );
    yield put(actions.hideLoader());
  }
}

//Fetch salesforce user list

// export function* fetchHubSpotUserListSaga(action) {
//   //alert(JSON.stringify(action.payload))
//   yield put(actions.displayLoader());

//   try {
//     let respData = yield axios("/api/getHsUserList", {
//       method: "get",
//       params: {
//         instanceID: action.payload,
//       },
//     });

//     if (respData.data.status != 200)
//       throw new Error("Unable to fecth HubSpot user list");

//     yield put(
//       actions.fetchHubSpotUserListSuccess(respData.data.data, respData.data.msg) //"Solution Fetch successfully from the tray.io")
//     );
//     // let newData = yield put(

//     //  // actions.fetchSalesForceUserList(action.payload) //"Solution Fetch successfully from the tray.io")
//     //  axios("/api/getSfUserList", {
//     //   method: "get",
//     //   params: {
//     //     instanceID: action.payload,
//     //   },
//     // })
//     // );
//     let newData = yield axios("/api/getSfUserList", {
//       method: "get",
//       params: {
//         instanceID: action.payload,
//       },
//     });
//     console.log('new data', newData.data.data)
//     let temp = newData.data.data
//     let hsData = respData.data.data
//     console.log("hs Data", hsData)
//     const newHsData = hsData.map((item)=>{
//       let newObj = {
//         "hsEmailId":item.hsEmailID,
//         "hsUserID": item.hsUserID
//       }
//       //newObj.push({"hsEmailId":item.hsEmailID})
//       return newObj
//       //console.log(item.hsEmailID)
//     })
//     console.log("newHsData", newHsData)
//     let obj = []
//     console.log('my temp', temp)
//     for(let i=0; i<temp.length; i++){
//       console.log('hddd', hsData[i].hsEmailID)
//       console.log('hell', temp[i].sfUserEmail)
//        obj.push({
//          id:temp[i]._id,
//          selectedItem:null,
//          sfUserEmail:temp[i].sfUserEmail,
//          sfUserID:temp[i].sfUserID,
//         dropdown:newHsData
//       })

//     }
//     console.log("obj", obj)
//     yield put(
//       actions.fetchSalesForceUserListSuccess(obj, newData.data.msg) //"Solution Fetch successfully from the tray.io")
//     );

//     yield put(
//       actions.hideLoader({
//         status: "200",
//         msg: respData.data.msg,
//         alertStatus: false,
//       })
//     );
//   } catch (e) {
//     console.log(e);
//     yield put(actions.fetchHubSpotUserListFail("Unable to fecth HubSpot user list"));
//     yield put(actions.hideLoader());
//   }
// }
//Fetch salesforce user list

//new fetch api
export function* fetchSalesForceUserListSaga(action) {
  //alert(JSON.stringify(action.payload))
  // yield put(actions.displayLoader());
  yield put(actions.displayMappingLoader());

  try {
    let respData = yield axios("/api/getSfHsUserList", {
      method: "get",
      params: {
        instanceID: action.payload,
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to fecth SalesForce user list");

    yield put(
      actions.fetchSalesForceUserListSuccess(
        respData.data.data,
        respData.data.msg
      ) //"Solution Fetch successfully from the tray.io")
    );
    // yield put(
    //   actions.hideLoader({
    //     status: "200",
    //     msg: respData.data.msg,
    //     alertStatus: false,
    //   })
    // );
    yield put(
      actions.hideMappingLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(
      actions.fetchSalesForceUserListFail(
        "Unable to fecth SalesForce user list"
      )
    );
    //yield put(actions.hideLoader());
    yield put(
      actions.hideMappingLoader({
        status: "200",
        msg: "Unable to fecth SalesForce user list",
        alertStatus: false,
      })
    );
  }
}
//end new fetch api

// export function* fetchSalesForceUserListSaga(action) {
//   //alert("hiee")
//   //alert(JSON.stringify(action.payload))
//   yield put(actions.displayLoader());

//   try {
//     let respData = yield axios("/api/getSfUserList", {
//       method: "get",
//       params: {
//         instanceID: action.payload,
//       },
//     });

//     if (respData.data.status != 200)
//       throw new Error("Unable to fecth SalesForce user list");

//     yield put(
//       actions.fetchSalesForceUserListSuccess(respData.data.data, respData.data.msg) //"Solution Fetch successfully from the tray.io")
//     );
//     let temp = respData.data.data
//     let obj = []
//     console.log('my temp', temp)
//     for(let i=0; i<temp.length; i++){
//       console.log('hell', temp[i].sfUserEmail)
//        obj.push({sfUserEmail:temp[i].sfUserEmail,
//                 dropdown:[{hsEmailID:""}]
//       })

//     }
//     console.log("obj", obj)
//     yield put(
//       actions.hideLoader({
//         status: "200",
//         msg: respData.data.msg,
//         alertStatus: false,
//       })
//     );
//   } catch (e) {
//     console.log(e);
//     yield put(actions.fetchSalesForceUserListFail("Unable to fecth SalesForce user list"));
//     yield put(actions.hideLoader());
//   }
// }

//store matched user data

export function* matchUserDataSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/dataMapping/storeScreenMappedData", {
      method: "post",
      // params: {
      //   instanceID: action.payload,
      // },
      data: { data: action.payload },
    });
    //alert(JSON.stringify(action.payload.instanceId))
    if (respData.data.status !== 200) throw new Error("Unable to store Data");

    yield put(
      actions.matchUserDataSuccess(respData.data.data, respData.data.msg) //"Adding data to the Api and redux")
    );
    //yield put(actions.upgradeSolutionInstance(action.payload.instanceId, action.payload.externalId));
    yield put(actions.upgradeSolutionInstance(
      {
      instanceId:action.payload.instanceId,
       externalId:action.payload.externalId,
       screenName:action.payload.screenName,
      }
       ));
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.matchUserDataFail("Unable to store Data"));
    yield put(actions.hideLoader());
  }
}
//refresh match users data
export function* refreshSalesForceUserListSaga(action) {
  //alert(JSON.stringify(action.payload))
  // yield put(actions.displayLoader());
  yield put(actions.displayMappingLoader());

  try {
    let respData = yield axios("/api/getSfHsUserList", {
      method: "get",
      params: {
        instanceID: action.payload,
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to fecth SalesForce user list");

    yield put(
      actions.refreshMatchUserDataSuccess(
        respData.data.data,
        respData.data.msg
      ) //"Solution Fetch successfully from the tray.io")
    );
    yield put(
      actions.hideMappingLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(
      actions.refreshMatchUserDataFail(
        "Unable to fecth SalesForce user list"
      )
    );
     yield put(
      actions.hideMappingLoader({
        status: "200",
        msg: "Unable to fecth SalesForce user list",
        alertStatus: false,
      })
    );
  }
}


//end refresh match users data


//Fetch MAP FIELD COMPANY list

export function* fetchMapFieldCompanyList(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayMappingLoader());

  try {
    let respData = yield axios("/api/dataMapping/getCompaniesList", {
      method: "get",
      params: {
        instanceID: action.payload,
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to fecth the Company Data list");

    yield put(
      actions.fetchmapCompanyDataSuccess(respData.data.data, respData.data.msg)
    );
    yield put(
      actions.hideMappingLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(
      actions.fetchmapCompanyDataFail("Unable to fecth SalesForce user list")
    );
    yield put(actions.hideMappingLoader());
  }
}

//store mapped company data

export function* mappedCompanyDataSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayMappingLoader());

  try {
    let respData = yield axios("/api/dataMapping/storeScreenMappedData", {
      method: "post",
      // params: {
      //   instanceID: action.payload,
      // },
      data: { data: action.payload },
    });
    //alert(JSON.stringify(action.payload.instanceId))
    if (respData.data.status !== 200) throw new Error("Unable to store Data");

    yield put(
      actions.mappedCompanyDataSuccess(respData.data.data, respData.data.msg) //"Adding data to the Api and redux")
    );
    //alert("going to call upgarde")
    //upgradeSolutionInstanceSuccess
    //yield put(actions.upgradeSolutionInstance(action.payload.instanceId));
    yield put(actions.upgradeSolutionInstance({
      instanceId:action.payload.instanceId,
       externalId:action.payload.externalId,
       screenName:action.payload.screenName,
      }));
    yield put(
      actions.hideMappingLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.mappedCompanyDataFail("Unable to store Data"));
    yield put(actions.hideMappingLoader());
  }
}

//refresh map FIELD COMPANY list

export function* refreshMapFieldCompanyListSaga(action) {
  // alert("hello")
  // alert(JSON.stringify(action.payload))
  yield put(actions.displayMappingLoader());

  try {
    let respData = yield axios("/api/dataMapping/getCompaniesList", {
      method: "get",
      params: {
        instanceID: action.payload,
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to fecth the Company Data list");

    yield put(
      actions.refreshCompanyDataSuccess(respData.data.data, respData.data.msg)
    );
    yield put(
      actions.hideMappingLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(
      actions.refreshCompanyDataFail("Unable to fecth SalesForce user list")
    );
    yield put(actions.hideMappingLoader());
  }
}

//Fetch MAP FIELD contact list

export function* fetchMapFieldContactListSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayMappingLoader());

  try {
    let respData = yield axios("/api/dataMapping/getContactsList", {
      method: "get",
      params: {
        instanceID: action.payload,
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to fecth the Contact Data list");

    yield put(
      actions.fetchMapContactDataSuccess(respData.data.data, respData.data.msg)
    );
    yield put(
      actions.hideMappingLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(
      actions.fetchMapContactDataFail("Unable to fecth the Contact Data list")
    );
    yield put(actions.hideMappingLoader());
  }
}

//store mapped contact data

export function* mappedContactDataSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayMappingLoader());

  try {
    let respData = yield axios("/api/dataMapping/storeScreenMappedData", {
      method: "post",
      // params: {
      //   instanceID: action.payload,
      // },
      data: { data: action.payload },
    });

    if (respData.data.status !== 200) throw new Error("Unable to store Data");

    yield put(
      actions.mappedContactDataSuccess(respData.data.data, respData.data.msg) //"Adding data to the Api and redux")
    );
    //yield put(actions.upgradeSolutionInstance(respData.data.data.instanceId));
    yield put(actions.upgradeSolutionInstance({
      instanceId:action.payload.instanceId,
       externalId:action.payload.externalId,
       screenName:action.payload.screenName
      }));
    yield put(
      actions.hideMappingLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.mappedContactDataFail("Unable to store Data"));
    yield put(actions.hideMappingLoader());
  }
}

//refresh map FIELD contact list

export function* refreshMapFieldContactListSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayMappingLoader());

  try {
    let respData = yield axios("/api/dataMapping/getContactsList", {
      method: "get",
      params: {
        instanceID: action.payload,
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to fecth the Contact Data list");

    yield put(
      actions.refreshContactDataSuccess(respData.data.data, respData.data.msg)
    );
    yield put(
      actions.hideMappingLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(
      actions.refreshContactDataFail("Unable to fecth the Contact Data list")
    );
    yield put(actions.hideMappingLoader());
  }
}

//Fetch MAP FIELD Deals list

export function* fetchMapFieldDealsListSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayMappingLoader());

  try {
    let respData = yield axios("/api/dataMapping/getDealsList", {
      method: "get",
      params: {
        instanceID: action.payload,
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to fecth the Deals Data list");

    yield put(
      actions.fetchMapDealsDataSuccess(respData.data.data, respData.data.msg)
    );
    yield put(
      actions.hideMappingLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(
      actions.fetchMapDealsDataFail("Unable to fecth the Deals Data list")
    );
    yield put(actions.hideMappingLoader());
  }
}

//store mapped Deals data

export function* mappedDealsDataSaga(action) {
  //alert(JSON.stringify(action.payload.instanceId))
  yield put(actions.displayMappingLoader());

  try {
    let respData = yield axios("/api/dataMapping/storeScreenMappedData", {
      method: "post",
      // params: {
      //   instanceID: action.payload,
      // },
      data: { data: action.payload },
    });
    //alert(respData.data.status)
    if (respData.data.status !== 200) throw new Error("Unable to store Data");

    yield put(
      actions.mappedDealsDataSuccess(
        respData.data.data,
        respData.data.msg,
        respData.data.status
      ) //"Adding data to the Api and redux")
    );
    //yield put(actions.upgradeSolutionInstance(respData.data.data.instanceId));
    yield put(actions.upgradeSolutionInstance({
      instanceId:action.payload.instanceId,
       externalId:action.payload.externalId,
       screenName:action.payload.screenName
      }));
    yield put(
      actions.hideMappingLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.mappedDealsDataFail("Unable to store Data"));
    yield put(actions.hideMappingLoader());
  }
}

//refresh map FIELD contact list

export function* refreshMapFieldDealsListSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayMappingLoader());

  try {
    let respData = yield axios("/api/dataMapping/getDealsList", {
      method: "get",
      params: {
        instanceID: action.payload,
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to fecth the Deals Data list");

    yield put(
      actions.refreshDealsDataSuccess(respData.data.data, respData.data.msg)
    );
    yield put(
      actions.hideMappingLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(
      actions.refreshDealsDataFail("Unable to fecth the Deals Data list")
    );
    yield put(actions.hideMappingLoader());
  }
}

//EDIT INSTANCE UPGRADE USER
export function* upgradeSolutionInstanceSaga(action) {
  //alert("hello")
  //alert(JSON.stringify(action.payload))
  try {
    const respData = yield axios("/api/dataMapping/config-instance", {
      method: "post",
      data: {
        instanceId: action.payload.instanceId,
        externalId:action.payload.externalId,
        screenName:action.payload.screenName,
      },
    });
    if (respData.data.status !== 200) throw new Error("Upgrade Fail");
    yield put(actions.upgradeSolutionInstanceSuccess(respData.data));
  } catch (e) {
    yield put(
      actions.upgradeSolutionInstanceFail(
        "Unable to upgrade the solution instance "
      )
    );
    yield put(actions.hideLoader());
  }
}

//Fetch MAP FIELD product list

export function* fetchMapFieldProductListSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/dataMapping/getProductsList", {
      method: "get",
      params: {
        instanceID: action.payload,
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to fecth the Product Data list");

    yield put(
      actions.fetchMapProductsDataSuccess(respData.data.data, respData.data.msg)
    );
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(
      actions.fetchMapProductsDataFail("Unable to fecth the Product Data list")
    );
    yield put(actions.hideLoader());
  }
}

//store mapped product data

export function* mappedProductsDataSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/dataMapping/storeProductMappedData", {
      method: "post",
      // params: {
      //   instanceID: action.payload,
      // },
      data: { data: action.payload },
    });
    //alert(respData.data.status)
    if (respData.data.status !== 200) throw new Error("Unable to store Data");

    yield put(
      actions.mappedProductDataSuccess(
        respData.data.data,
        respData.data.msg,
        respData.data.status
      ) //"Adding data to the Api and redux")
    );
    yield put(actions.upgradeSolutionInstance(respData.data.data.instanceId));
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.mappedProductDataFail("Unable to store Data"));
    yield put(actions.hideLoader());
  }
}

//refresh MAP FIELD product list

export function* refreshMapFieldProductListSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/dataMapping/getProductsList", {
      method: "get",
      params: {
        instanceID: action.payload,
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to refresh the Product Data list");

    yield put(
      actions.refreshProductDataSuccess(respData.data.data, respData.data.msg)
    );
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(
      actions.refreshProductDataFail("Unable to refresh the Product Data list")
    );
    yield put(actions.hideLoader());
  }
}

//Fetch MAP FIELD product list

export function* fetchMapFieldTicketListSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayMappingLoader());

  try {
    let respData = yield axios("/api/dataMapping/getTicketsList", {
      method: "get",
      params: {
        instanceID: action.payload,
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to fetch the Product Data list");

    yield put(
      actions.fetchMapTicketDataSuccess(respData.data.data, respData.data.msg)
    );
    yield put(
      actions.hideMappingLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(
      actions.fetchMapTicketDataFail("Unable to fetch the Product Data list")
    );
    yield put(actions.hideMappingLoader());
  }
}

//store mapped ticket data

export function* mappedTicketDataSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayMappingLoader());

  try {
    let respData = yield axios("/api/dataMapping/storeScreenMappedData", {
      method: "post",
      // params: {
      //   instanceID: action.payload,
      // },
      data: { data: action.payload },
    });
    //alert(respData.data.status)
    if (respData.data.status !== 200) throw new Error("Unable to store Data");

    yield put(
      actions.mappedTicketDataSuccess(
        respData.data.data,
        respData.data.msg,
        respData.data.status
      ) //"Adding data to the Api and redux")
    );
    //yield put(actions.upgradeSolutionInstance(respData.data.data.instanceId));
    yield put(actions.upgradeSolutionInstance({
      instanceId:action.payload.instanceId,
       externalId:action.payload.externalId,
       screenName:action.payload.screenName
      }));
    yield put(
      actions.hideMappingLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.mappedTicketDataFail("Unable to store Data"));
    yield put(actions.hideMappingLoader());
  }
}

//REFRESH MAP FIELD TICKET list

export function* refreshMapFieldTicketListSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayMappingLoader());

  try {
    let respData = yield axios("/api/dataMapping/getTicketsList", {
      method: "get",
      params: {
        instanceID: action.payload,
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to refresh the Ticket list");

    yield put(
      actions.refreshTicketDataSuccess(respData.data.data, respData.data.msg)
    );
    yield put(
      actions.hideMappingLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(
      actions.refreshTicketDataFail("Unable to refresh the Ticket list")
    );
    yield put(actions.hideMappingLoader());
  }
}

//Fetch MAP FIELD email list

export function* fetchMapFieldEmailListSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/dataMapping/getEmailsList", {
      method: "get",
      params: {
        instanceID: action.payload,
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to fetch the Email list");

    yield put(
      actions.fetchMapEmailDataSuccess(respData.data.data, respData.data.msg)
    );
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.fetchMapEmailDataFail("Unable to fetch the Email list"));
    yield put(actions.hideLoader());
  }
}

//store mapped Email data

export function* mappedEmailDataSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/dataMapping/storeEmailMappedData", {
      method: "post",
      // params: {
      //   instanceID: action.payload,
      // },
      data: { data: action.payload },
    });
    //alert(respData.data.status)
    if (respData.data.status !== 200) throw new Error("Unable to store Data");

    yield put(
      actions.mappedEmailDataSuccess(
        respData.data.data,
        respData.data.msg,
        respData.data.status
      ) //"Adding data to the Api and redux")
    );
    yield put(actions.upgradeSolutionInstance(respData.data.data.instanceId));
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.mappedEmailDataFail("Unable to store Data"));
    yield put(actions.hideLoader());
  }
}

//refresh MAP FIELD email list

export function* refreshMapFieldEmailListSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/dataMapping/getEmailsList", {
      method: "get",
      params: {
        instanceID: action.payload,
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to refresh the Email list");

    yield put(
      actions.refreshEmailDataSuccess(respData.data.data, respData.data.msg)
    );
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.refreshEmailDataFail("Unable to refresh the Email list"));
    yield put(actions.hideLoader());
  }
}

//Fetch MAP FIELD Meeting list

export function* fetchMapFieldMeetingListSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/dataMapping/getMeetingsList", {
      method: "get",
      params: {
        instanceID: action.payload,
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to fetch the Meeting list");

    yield put(
      actions.fetchMapMeetingDataSuccess(respData.data.data, respData.data.msg)
    );
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(
      actions.fetchMapMeetingDataFail("Unable to fetch the Email list")
    );
    yield put(actions.hideLoader());
  }
}

//store mapped Email data

export function* mappedMeetingDataSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/dataMapping/storeMeetingsMappedData", {
      method: "post",
      // params: {
      //   instanceID: action.payload,
      // },
      data: { data: action.payload },
    });
    //alert(respData.data.status)
    if (respData.data.status !== 200) throw new Error("Unable to store Data");

    yield put(
      actions.mappedMeetingDataSuccess(
        respData.data.data,
        respData.data.msg,
        respData.data.status
      ) //"Adding data to the Api and redux")
    );
    yield put(actions.upgradeSolutionInstance(respData.data.data.instanceId));
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.mappedMeetingDataFail("Unable to store Data"));
    yield put(actions.hideLoader());
  }
}

//refresh MAP FIELD Meeting list

export function* refreshMapFieldMeetingListSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/dataMapping/getMeetingsList", {
      method: "get",
      params: {
        instanceID: action.payload,
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to refresh the Meeting list");

    yield put(
      actions.refreshMeetingDataSuccess(respData.data.data, respData.data.msg)
    );
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(
      actions.refreshMeetingDataFail("Unable to refresh the Email list")
    );
    yield put(actions.hideLoader());
  }
}

//Fetch MAP FIELD Leads list

export function* fetchMapFieldLeadListSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/dataMapping/getLeadsList", {
      method: "get",
      params: {
        instanceID: action.payload,
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to fetch the Leads list");

    yield put(
      actions.fetchMapLeadDataSuccess(respData.data.data, respData.data.msg)
    );
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.fetchMapLeadDataFail("Unable to fetch the Leads list"));
    yield put(actions.hideLoader());
  }
}

//store mapped Email data

export function* mappedLeadDataSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/dataMapping/storeleadsMappedData", {
      method: "post",
      // params: {
      //   instanceID: action.payload,
      // },
      data: { data: action.payload },
    });
    //alert(respData.data.status)
    if (respData.data.status !== 200) throw new Error("Unable to Lead Data");

    yield put(
      actions.mappedLeadDataSuccess(
        respData.data.data,
        respData.data.msg,
        respData.data.status
      ) //"Adding data to the Api and redux")
    );
    yield put(actions.upgradeSolutionInstance(respData.data.data.instanceId));
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.mappedLeadDataFail("Unable to store Data"));
    yield put(actions.hideLoader());
  }
}

//refresh MAP FIELD Leads list

export function* refreshMapFieldLeadListSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/dataMapping/getLeadsList", {
      method: "get",
      params: {
        instanceID: action.payload,
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to refresh the Leads list");

    yield put(
      actions.refreshLeadDataSuccess(respData.data.data, respData.data.msg)
    );
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.refreshLeadDataFail("Unable to refresh the Leads list"));
    yield put(actions.hideLoader());
  }
}

//Fetch MAP FIELD notes list

export function* fetchMapFieldNotesListSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/dataMapping/getNotesList", {
      method: "get",
      params: {
        instanceID: action.payload,
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to fetch the Notes list");

    yield put(
      actions.fetchMapNotesDataSuccess(respData.data.data, respData.data.msg)
    );
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.fetchMapNotesDataFail("Unable to fetch the Notes list"));
    yield put(actions.hideLoader());
  }
}

//store mapped Notes data

export function* mappedNotesDataSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/dataMapping/storeNotesMappedData", {
      method: "post",
      // params: {
      //   instanceID: action.payload,
      // },
      data: { data: action.payload },
    });
    //alert(respData.data.status)
    if (respData.data.status !== 200) throw new Error("Unable to Notes Data");

    yield put(
      actions.mappedNotesDataSuccess(
        respData.data.data,
        respData.data.msg,
        respData.data.status
      ) //"Adding data to the Api and redux")
    );
    yield put(actions.upgradeSolutionInstance(respData.data.data.instanceId));
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.mappedNotesDataFail("Unable to store Data"));
    yield put(actions.hideLoader());
  }
}

export function* refreshMapFieldNotesListSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/dataMapping/getNotesList", {
      method: "get",
      params: {
        instanceID: action.payload,
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to refresh the Notes list");

    yield put(
      actions.fetchMapNotesDataSuccess(respData.data.data, respData.data.msg)
    );
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(
      actions.fetchMapNotesDataFail("Unable to refresh the Notes list")
    );
    yield put(actions.hideLoader());
  }
}

//Fetch MAP FIELD attachments list

export function* fetchMapFieldAttachListSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/dataMapping/getLeadsList", {
      method: "get",
      params: {
        instanceID: action.payload,
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to fetch the Attachments list");

    yield put(
      actions.fetchMapAttachmentsDataSuccess(
        respData.data.data,
        respData.data.msg
      )
    );
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(
      actions.fetchMapAttachmentsDataFail(
        "Unable to fetch the Attachments list"
      )
    );
    yield put(actions.hideLoader());
  }
}

//store mapped attachments data

export function* mappedAttachDataSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/dataMapping/storeleadsMappedData", {
      method: "post",
      // params: {
      //   instanceID: action.payload,
      // },
      data: { data: action.payload },
    });
    //alert(respData.data.status)
    if (respData.data.status !== 200)
      throw new Error("Unable to store Attachments Data");

    yield put(
      actions.mappedAttachmentsDataSuccess(
        respData.data.data,
        respData.data.msg,
        respData.data.status
      ) //"Adding data to the Api and redux")
    );
    yield put(actions.upgradeSolutionInstance(respData.data.data.instanceId));
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.mappedAttachmentsDataFail("Unable to store Data"));
    yield put(actions.hideLoader());
  }
}

export function* refreshMapFieldAttachListSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/dataMapping/getLeadsList", {
      method: "get",
      params: {
        instanceID: action.payload,
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to refresh the Attachments list");

    yield put(
      actions.refreshAttachmentsDataSuccess(
        respData.data.data,
        respData.data.msg
      )
    );
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(
      actions.refreshAttachmentsDataFail(
        "Unable to refresh the Attachments list"
      )
    );
    yield put(actions.hideLoader());
  }
}

//selcted object screen list
export function* fetchSelectedObjectListSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/getMigrationObjectsList", {
      method: "get",
      // params: {
      //   instanceID: action.payload,
      // },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to fetch the list");

    yield put(
      actions.fetchSelectedObjectListSuccess(
        respData.data.data,
        respData.data.msg
      )
    );
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.fetchSelectedObjectListFail("Unable to fetch the list"));
    yield put(actions.hideLoader());
  }
}

//store mapped Selected object data

export function* mappedSelectedObjectSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/getPropertiesAndCounts", {
      method: "post",
      // params: {
      //   instanceID: action.payload,
      // },
      data: { data: action.payload },
    });
    //alert(JSON.stringify(respData.data))
    if (respData.data.status !== 200)
      throw new Error("Unable to store Data");

    yield put(
      actions.mappedSelectedObjectDataSuccess(
        respData.data.data,
        respData.data.msg,
        respData.data.status
      ) //"Adding data to the Api and redux")
    );
    // yield put(actions.upgradeSolutionInstance(action.payload.instanceId));
   //yield put(actions.fetchSalesForceUserList(action.payload.instanceId));
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.mappedSelectedObjectDataFail("Unable to store Data"));
    yield put(actions.hideLoader());
  }
}

//map field screen tabs list
export function* fetchMapFieldTabsListSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/dataMapping/getTabsList", {
      method: "get",
      params: {
        instanceID: action.payload,
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to fetch the list");

    yield put(
      actions.fetchMapFieldTabsListSuccess(
        respData.data.data,
        respData.data.msg
      )
    );
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.fetchMapFieldTabsListFail("Unable to fetch the list"));
    yield put(actions.hideLoader());
  }
}

//Fetch MAP FIELD Engagements list

export function* fetchMapFieldEngageListSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayMappingLoader());

  try {
    let respData = yield axios("/api/dataMapping/getEngagementsList", {
      method: "get",
      params: {
        instanceID: action.payload,
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to fetch the Engagements list");

    yield put(
      actions.fetchMapEngageDataSuccess(respData.data.data, respData.data.msg)
    );
    yield put(
      actions.hideMappingLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.fetchMapEngageDataFail("Unable to fetch the list"));
    yield put(actions.hideMappingLoader());
  }
}

//store mapped Engagements data

export function* mappedEngageDataSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayMappingLoader());

  try {
    let respData = yield axios("/api/dataMapping/storeScreenMappedData", {
      method: "post",
      // params: {
      //   instanceID: action.payload,
      // },
      data: { data: action.payload },
    });
    //alert(respData.data.status)
    if (respData.data.status !== 200)
      throw new Error("Unable to Engagements Data");

    yield put(
      actions.mappedEngageDataSuccess(
        respData.data.data,
        respData.data.msg,
        respData.data.status
      ) //"Adding data to the Api and redux")
    );
    //yield put(actions.upgradeSolutionInstance(respData.data.data.instanceId));
    yield put(actions.upgradeSolutionInstance({
      instanceId:action.payload.instanceId,
       externalId:action.payload.externalId,
       screenName:action.payload.screenName
      }));
    yield put(
      actions.hideMappingLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.mappedEngageDataFail("Unable to store Data"));
    yield put(actions.hideMappingLoader());
  }
}

export function* refreshMapFieldEngageListSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayMappingLoader());

  try {
    let respData = yield axios("/api/dataMapping/getEngagementsList", {
      method: "get",
      params: {
        instanceID: action.payload,
      },
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to refresh the list");

    yield put(
      actions.refreshEngageDataSuccess(respData.data.data, respData.data.msg)
    );
    yield put(
      actions.hideMappingLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.refreshEngageDataFail("Unable to refresh the list"));
    yield put(actions.hideMappingLoader());
  }
}

//demo migration

export function* demoMigrationSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayMappingLoader());

  try {
    let respData = yield axios("/api/startDemoMigration", {
      method: "post",
      // params: {
      //   instanceID: action.payload,
      // },
      data: { data: action.payload },
    });
    //alert(respData.data.status)
    if (respData.data.status !== 200)
      throw new Error("Unable to Engagements Data");
    //alert(respData.data.sampleMigrationComplete)
    yield put(
      actions.demoMigrationSuccess(
        // respData.data.data,
        // respData.data.msg,
        // respData.data.status,
        // respData.data.sampleMigrationComplete,
        respData.data.sampleMigrationComplete

      ) //"Adding data to the Api and redux")
    );
    //yield put(actions.upgradeSolutionInstance(respData.data.data.instanceId));
    yield put(
      actions.hideMappingLoader({
        status: "200",
        msg: respData.data.msg,
        alertStatus: false,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.demoMigrationFail("Unable to store Data"));
    yield put(actions.hideMappingLoader());
  }
}

//start migration

export function* startMigrationSaga(action) {
  //alert(JSON.stringify(action.payload))
  yield put(actions.displayPaymentLoader());

  try {
    let respData = yield axios("/api/startDemoMigration", {
      method: "post",
      // params: {
      //   instanceID: action.payload,
      // },
      data: { data: action.payload },
    });
    //alert(respData.data.status)
    if (respData.data.status !== 200)
      throw new Error("Unable to Engagements Data");
    //alert(respData.data.sampleMigrationComplete)
    yield put(
      actions.startMigrationSuccess(
        // respData.data.data,
        // respData.data.msg,
        // respData.data.status,
        // respData.data.sampleMigrationComplete,
        // respData.data.sampleMigrationComplete
        "Migartion Started"

      ) //"Adding data to the Api and redux")
    );
    //yield put(actions.upgradeSolutionInstance(respData.data.data.instanceId));
    yield put(
      actions.hidePaymentLoader({
        status: "200",
        msg: "Migration Hook working successfuly",
        alertStatus: true,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.startMigrationFail("Unable to store Data"));
    yield put(actions.hidePaymentLoader({
      status: "400",
      msg: "Migration Hook is not working currently, please try again",
      alertStatus: true,
  
  }));
  }
}


//getting list of external ids

export function* fetchExternalIdsSaga(action) {
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/getExternalIdList", {
      method: "get",
      data: "",
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to fecth solution");
    //alert(JSON.stringify(respData.data.data))
    yield put(
      actions.fetchExternalIdsSuccess(
        respData.data.data,
        respData.data.msg
      ) 
    );
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        //alertStatus: true,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.fetchExternalIdsFail("Unable to fetch response"));
    yield put(actions.hideLoader());
  }
}

//end

/**Migration report  */
export function* migrationReportSaga(action) {
//alert(action.payload)
  yield put(actions.displayLoader());

  try {
    let respData = yield axios("/api/getViewReport", {
      method: "get",
      params: { instanceId: action.payload },
     
    });

    if (respData.data.status !== 200)
      throw new Error("Unable to fecth the Records");
    //alert(JSON.stringify(respData.data.data))
    yield put(
      actions.migrationReportDataSuccess(
        respData.data.data,
        respData.data.msg
      ) 
    );
    yield put(
      actions.hideLoader({
        status: "200",
        msg: respData.data.msg,
        //alertStatus: true,
      })
    );
  } catch (e) {
    console.log(e);
    yield put(actions.migrationReportDataFail("Unable to fetch response"));
    yield put(actions.hideLoader());
  }
}

/**end migration report */

/**Migration report  */
export function* migrationDetailsSaga(action) {
  //alert(action.payload)
    yield put(actions.displayLoader());
  
    try {
      let respData = yield axios("/api/getMigrationDetails", {
        method: "get",
        params: { instanceId: action.payload },
       
      });
  
      if (respData.data.status !== 200)
        throw new Error("Unable to fecth the Data");
      //alert(JSON.stringify(respData.data.data))
      yield put(
        actions.migrationDetailsSuccess(
          respData.data.data,
          respData.data.msg
        ) 
      );
      yield put(
        actions.hideLoader({
          status: "200",
          msg: respData.data.msg,
          //alertStatus: true,
        })
      );
    } catch (e) {
      console.log(e);
      yield put(actions.migrationDetailsFail("Unable to fetch response"));
      yield put(actions.hideLoader());
    }
  }
  
  /**end migration report */
