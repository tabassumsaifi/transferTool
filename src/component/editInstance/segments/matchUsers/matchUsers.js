import React, { useState, useMemo, useEffect, useRef } from "react";
//import data from "./segments/data/mock-data.json";
//import axios from "../../../../axios";
//import "../../../../style.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import RightArrow from "../../../../assets/images/table/right-arrow.png";
import searchIcon from "../../../../assets/images/table/search-icon.png";
import crossIcon from "../../../../assets/images/table/close.png";
import refresh from "../../../../assets/images/table/refresh.png";
import reset from "../../../../assets/images/table/reset.png";
import autoSave from "../../../../assets/images/table/autosave.png";
import nextArrow from "../../../../assets/images/table/next-arrow.png";
import SearchBar from "material-ui-search-bar";
import CommonAlert from "../../../Alert/commonAlert";
import Pagination from "../../../pagination/Pagination";
//table
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
//import { useHistory } from "react-router-dom";
import * as actions from "../../../../store/action/index";
import { useDispatch, useSelector } from "react-redux";
import InstanceMainInfo from "../instanceMainInfo";
import SimpleBackdrop from "../../../../loader/loading";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles({
  table: {
    minWidth: 560,
  },
});

function MatchUsers({ match, instanceId }) {
  const activeStep = useSelector((state) => state.solution.activeStep);
  const hsUserList = useSelector((state) => state.solution.hubspotUserList);
  const sfUserList = useSelector((state) => state.solution.salesForceUserList);
  //const matchUserData = useSelector((state) => state.solution.matchUserData);
  const storeMatchData = useSelector((state) => state.solution.storeMatchData);
  const dropdownData = useSelector((state) => state.solution.saveMatchUserData);
  const [displayFilterData, setDisplayFilterData] = useState([]);
  const dispatch = useDispatch();
  const classes = useStyles();
  //const history = useHistory();
  //console.log("history", history);
  //const [sfData, setSfData] = useState("");
  const [originalRows, setOriginalRows] = useState([]);
  const [hfUsers, setHfUsers] = useState([]);
  const loader = useSelector((state) => state?.mapLoader.mapLoader);
  const Externalids = useSelector((state) => state.solution?.externalIdsList);
  const screenName = "userMap";
  const [externalId, setExternalId] = useState("");
  const salesForceStatus = useSelector(
    (state) => state.solution?.salesForceStatus
  );
  //saga

  useEffect(() => {
    //     axios({
    //   method: 'get',
    //   url: '/api/getSfHsUserList',
    //   params: {
    //     instanceID:match
    //   }
    // }).then((response)=> console.log(response));
    // dispatch(actions.fetchSalesForceUserList(match))
    if (salesForceStatus) {
      dispatch(actions.fetchSalesForceUserList(match));
    }
  }, [salesForceStatus]);

  useEffect(() => {
    //dispatch(actions.fetchHubSpotUserList(match));
  }, []);

  //API call for salesfor
  useEffect(() => {
    //    console.log(solutions)
    if (sfUserList.length) {
      setOriginalRows(sfUserList);
      setDisplayFilterData(sfUserList);
    }
    //    setList()
  }, [sfUserList]);

  useEffect(() => {
    //    console.log(solutions)
    if (hsUserList.length) {
      setHfUsers(hsUserList);
    }
  }, [hsUserList]);
  //console.log("he user list", hsUserList);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  //const [rowsPerPage, setRowsPerPage] = React.useState(2);
  const [PageSize, setPagesize] = useState(5);
  const [firstindex, setfirstindex] = useState("");
  const [lastindex, setlastindex] = useState("");
  //const searchableKeys = ["sfUserEmail"];
  const [results, setResults] = useState("");

  let currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    //console.log(firstPageIndex, lastPageIndex);
    setfirstindex(firstPageIndex);
    setlastindex(lastPageIndex);

    //setDisplayFilterData([...displayFilterData.slice(firstPageIndex, lastPageIndex)])
    return displayFilterData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize, results, displayFilterData]);
  //console.log("results", results);

  //  if(displayFilterData.length === PageSize){
  //    console.log(currentTableData, 'humm')
  //   }

  //serch\
  const filteredResults = (results) => {
    const newResult = originalRows.filter((item) => {
      // searchableKeys.some((key) =>
      //   item[key].toLowerCase().includes(results.toLowerCase())
      // )
      return item.sfUserEmail.toLowerCase().includes(results.toLowerCase());
    });
    setDisplayFilterData(newResult);
    setCurrentPage(1);
    //console.log("newResult", newResult);
  };

  const handleChange = (event) => {
    setPagesize(event.target.value);
    //console.log(PageSize, event.target.value);
    setCurrentPage(1);
  };

  // new Array(filteredResults.length)
  //const [userData, setUserData] = useState([]);
  const userData = storeMatchData;
  const dropdownValue = dropdownData;
  //const [dropdownValue, setDropdownValue] = useState({})
  //console.log("dropdownData", dropdownData);
  //console.log("dropdownValue ", dropdownValue);

  const getItemIndex = (arr, item) => {
    if (Array.isArray(arr) && arr.length) {
      return arr.findIndex((e) => e.sfUserEmail === item);
    }
    return -1;
  };
  //event, value, sfEmail, sfId, instanceId, index, id
  function storeEdit(event, sfEmail, sfId, index, id, hsUserId) {
    const itemIndex = getItemIndex(userData, sfEmail);
    const obj = {
      sfUserEmail: sfEmail,
      hsEmailID: event.target.innerText,
      sfUserId: sfId,
      // instanceID: instanceId,
      hsUserID: hsUserId,
    };
    if (itemIndex === -1) {
      let sendData = [...userData, obj];
      // setUserData(sendData);
      const finalData = sendData.filter((item) => item.hsEmailID !== "")
      dispatch(actions.storeMtachedUserData(finalData));
      return;
    }
    let newArr = [...userData];
    newArr[itemIndex] = obj;
    const myNewArr = newArr.filter((item) => item.hsEmailID !== "");
    //console.log('my NewArr', myNewArr )
    //setUserData(myNewArr);
    dispatch(actions.storeMtachedUserData(myNewArr));
  }
  //console.log('my new value aray', userData )

  const handleRowChange = (
    event,
    value,
    sfEmail,
    sfId,
    instanceId,
    index,
    id
  ) => {
    //alert("Hiiii"+event+' '+sfEmail+' '+sfId+ ' '+instanceId + '----------' + index)
    const obj1 = {};
    // obj1[index] = event.target.value
    //console.log(id, "handle change index");
    obj1[id] = value;
    let obj = { ...dropdownValue, ...obj1 };
    //setDropdownValue(obj)
    dispatch(actions.saveMtachUserData(obj));
    //console.log(obj, 'obj')

    const hsEmailId = event.target.innerText;
    const hsUserId = value?.hsUserID;
    //console.log('zzz', hsEmailId)
    //console.log('yyy', hsUserId)
    storeEdit(event, sfEmail, sfId, index, id, hsUserId);
  };

  const handleRefreshUserList = () => {
    dispatch(actions.refreshMatchUserData(match));
    //dispatch(actions.fetchSalesForceUserList(match));
    // dispatch(actions.fetchHubSpotUserList(match));
  };

  const handleResetUserList = () => {
    let emptyArray = [];
    //setUserData([...emptyArray]);
    dispatch(actions.storeMtachedUserData([...emptyArray]));
    //const obj1 = {};
    //setDropdownValue({})
    dispatch(actions.saveMtachUserData({}));
    dispatch(actions.fetchSalesForceUserList(match));
    //dispatch(actions.fetchHubSpotUserList(match));
  };

  const handleNext = (data, match) => {
    //alert(JSON.stringify(value));
    dispatch(actions.displayLoader());
    if (data.length) {
      //dispatch(actions.hideLoader({status:"200", msg:"succesfully added in redux", alertStatus:true} ));
      // setActiveStep((prevActiveStep) => prevActiveStep + 1);
      dispatch(actions.setEditInstanceActiveStep(activeStep + 1));
      //alert("hieee");
      let objNew = {
        instanceId: match,
        externalId: externalId,
        screenName: screenName,
        arr: userData,
      };
      dispatch(actions.matchUserData(objNew));
      //fetching tabs list
      dispatch(actions.fetchMapFieldTabsList(instanceId));
      // Send a POST request
      // axios({
      //   method: 'post',
      //   url: '/api/dataMapping/config-instance',
      //   data: {
      //     instanceId:match
      //   }
      // }).then((response)=> console.log(response));
    } else {
      dispatch(
        actions.hideLoader({
          status: "400",
          msg: "Please Map atleast one field",
          alertStatus: true,
        })
      );
    }
  };

  const handleBack = () => {
    // setActiveStep((prevActiveStep) => prevActiveStep - 1);
    //alert(JSON.stringify(activeStep));
    dispatch(actions.setEditInstanceActiveStep(activeStep - 1));
    //dispatch(actions.resetSalesForceStatus());
    dispatch(actions.resetSelectedObjectStatus());
  };

  const NoDataDiv = () => {
    return (
      <div className="no__match__found">
        <Typography component="p">No Data to display</Typography>
      </div>
    );
  };
  //console.log("filtered result", filteredResults)
  //console.log("value", value);
  // const handleValue = (index) => {
  //   if (Object.keys(dropdownValue).length) {
  //     return dropdownValue[index];
  //   }
  // };
  const [addClass, setAddClass] = useState(false);

  const onFocusHandle = () => {
    setAddClass(true);
  };
  const onBlurHandle = () => {
    //setAddClass(false)
  };
  const ref = useRef(null);
  const calculation = () => {
    return lastindex > displayFilterData.length
      ? displayFilterData.length
      : lastindex;
  };

  useEffect(() => {
    let newArray = Externalids.filter((item) => item.screenName === screenName);
    setExternalId(newArray[0].externalIdVal);
  }, [externalId]);
  //console.log("externalId", externalId);

  return (
    <>
      <CommonAlert />
      <InstanceMainInfo instanceId={match} />

      {/* end auto complete example */}
      <Paper className="main-paper-container">
        {/* table header */}
        <Grid container spacing={2} className="table-header-wrapper">
          <Grid item xs={12} sm={4} md={6}>
            <div className="table-search-input">
              <SearchBar
                searchIcon={<img src={searchIcon} alt="" />}
                closeIcon={<img src={crossIcon} alt="" />}
                value={results}
                onChange={(value) => {
                  filteredResults(value);
                  setResults(value);
                }}
                placeholder={`find a contact`}
                onCancelSearch={() => {
                  setResults("");
                  setDisplayFilterData(originalRows);
                  setAddClass(false);
                }}
                onBlur={() => {
                  onBlurHandle();
                }}
                onFocus={(e) => {
                  onFocusHandle();
                  //console.log("Focused on input");
                }}
                className={`${addClass ? "search__bar__close" : ""}`}
                ref={ref}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Grid container spacing={2} className="table-controls">
              <Grid item>
                <Button
                  startIcon={<img src={refresh} alt="" />}
                  onClick={(e) => handleRefreshUserList()}
                >
                  Refresh User
                </Button>
              </Grid>
              <Grid item>
                <Button
                  startIcon={<img src={reset} alt="" />}
                  onClick={(e) => handleResetUserList()}
                >
                  Reset
                </Button>
              </Grid>
              <Grid item>
                <Button startIcon={<img src={autoSave} alt="" />}>
                  Autosaved 13.58
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* table part */}
        <Grid
          container
          className="main-table-section scrollable__table__height"
        >
          <Grid item xs={12} sm={12} md={12}>
            {loader && <SimpleBackdrop />}
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableBody>
                  {!currentTableData.length ? NoDataDiv() : ""}
                  {currentTableData.map((item, index) => {
                    let pageIndex = PageSize * (currentPage - 1) + index;
                    //console.log("my index", index);
                    // console.log(
                    //   "PageSize" + PageSize,
                    //   "currentPage" + currentPage,
                    //   "pageIndex" + pageIndex
                    // );
                    return (
                      <TableRow key={`${item.sfUserEmail} ${pageIndex}`}>
                        <TableCell align="left" width="40%">
                          {item.sfUserEmail}
                        </TableCell>
                        <TableCell align="left" width="20%">
                          <img src={RightArrow} alt="" />
                        </TableCell>
                        <TableCell align="left" width="40%" className="match__user__autocomplete">
                          {/* autocomlete example */}
                          <Autocomplete
                            popupIcon={<ExpandMoreIcon />}
                            options={item.dropdown}
                            getOptionLabel={(option) => option.hsEmailID}
                            id="controlled-demo"
                            //value={value}
                            value={
                              Object.keys(dropdownValue).length &&
                              dropdownValue[item.id]
                                ? dropdownValue[item.id]
                                : ""
                            }
                            onChange={(event, value) =>
                              handleRowChange(
                                event,
                                value,
                                item.sfUserEmail,
                                item.sfUserID,
                                item.instanceID,
                                pageIndex,
                                item.id
                              )
                            }
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                variant="outlined"
                                placeholder="Select here "
                                InputLabelProps={{ shrink: false }}
                                autoComplete="off"
                             
                              />
                            )}
                            getOptionSelected={(option, value) => {
                              return option.hsEmailID === value.hsEmailID;
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>

        {/* pagination */}
        {currentTableData.length ? (
        <Grid
          container
          className="table__pagination"
          style={{ marginTop: "30px" }}
        >
          <Grid item xs={12} sm={3} md={3} className="table__content__number">
            <Typography variant="p" component="p">
              Showing <span>{firstindex + 1}</span>-<span>{calculation()}</span>{" "}
              of <span>{displayFilterData.length}</span> Users
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={{ textAlign: "center" }}>
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={displayFilterData.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            md={3}
            style={{ textAlign: "right" }}
            className="rows__per__page"
          >
            <Typography variant="p" component="p">
              Rows per page
              <Select
                value={PageSize}
                onChange={handleChange}
                displayEmpty
                className="selctBox"
                inputProps={{ "aria-label": "Without label" }}
                MenuProps={{
                  getContentAnchorEl: null,
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                  },
                }}
              >
                <MenuItem value="" disabled>
                  Select here...
                </MenuItem>
                <MenuItem value={5}>{5}</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
              </Select>
            </Typography>
          </Grid>
        </Grid>
         ) : '' }
        {/* table bottom footer */}

        <Grid container spacing={3} className="table-bottom-footer">
          <Grid item xs={6} sm={6} md={6}>
            <Button
              variant="outlined"
              color="primary"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              {" "}
              Back
            </Button>
          </Grid>
          <Grid item xs={6} sm={6} md={6} style={{ textAlign: "right" }}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<img src={nextArrow} alt="" />}
              onClick={() => handleNext(userData, match)}
            >
              {" "}
              Next
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* {JSON.stringify(userData, null, 2)} */}
    </>
  );
}

export default MatchUsers;
