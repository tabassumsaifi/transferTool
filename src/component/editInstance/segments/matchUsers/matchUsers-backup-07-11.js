import React, { useState, useMemo, useEffect, useRef } from "react";
//import data from "./segments/data/mock-data.json";
import axios from "../../../../axios";
//import "../../../../style.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import salesForce from "../../../../assets/images/sales-force.png";
import rightArrow from "../../../../assets/images/right-arrow.png";
import hubSpot from "../../../../assets/images/hub-spot.png";
import RightArrow from "../../../../assets/images/table/right-arrow.png";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
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
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";

import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { useHistory } from "react-router-dom";
import * as actions from "../../../../store/action/index";
import { useDispatch, useSelector } from "react-redux";
import InstanceMainInfo from "../instanceMainInfo";
import SimpleBackdrop from "../../../../loader/loading";


const useStyles = makeStyles({
  table: {
    minWidth: 560,
  },
});

function MatchUsers({ match, instanceId }) {
  const activeStep = useSelector((state) => state.solution.activeStep);
  const hsUserList = useSelector((state) => state.solution.hubspotUserList);
  const sfUserList = useSelector((state) => state.solution.salesForceUserList);
  const matchUserData = useSelector((state) => state.solution.matchUserData);
  const storeMatchData = useSelector((state) => state.solution.storeMatchData);
  const dropdownData = useSelector(state => state.solution.saveMatchUserData)
  const [displayFilterData, setDisplayFilterData] = useState([])
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  console.log("history", history);  
  const [sfData, setSfData] = useState("");
  const [originalRows, setOriginalRows] = useState([]);
  const [hfUsers, setHfUsers] = useState([]);
  const loader = useSelector(state => state.loader.loader)
  console.log('matched data', matchUserData)
  //saga

  useEffect(() => {
    dispatch(actions.fetchSalesForceUserList(match));
  }, []);

  useEffect(() => {
    dispatch(actions.fetchHubSpotUserList(match));
  }, []);

  //API call for salesfor
  useEffect(() => {
    //    console.log(solutions)
    if (sfUserList.length) {
      setOriginalRows(sfUserList);
      setDisplayFilterData(sfUserList)
    }
    //    setList()
  }, [sfUserList]);

  useEffect(() => {
    //    console.log(solutions)
    if (hsUserList.length) {
      setHfUsers(hsUserList);
    }
  }, [hsUserList]);
  console.log("he user list", hsUserList)

 //pagination
 const [currentPage, setCurrentPage] = useState(1);
 const [rowsPerPage, setRowsPerPage] = React.useState(2);
 const [PageSize, setPagesize] = useState(2);
 const [firstindex, setfirstindex] = useState("");
 const [lastindex, setlastindex] = useState("");
 const searchableKeys = ["sfUserEmail"];
 const [results, setResults] = useState("");

 let currentTableData = useMemo(() => {
   const firstPageIndex = (currentPage - 1) * PageSize;
   const lastPageIndex = firstPageIndex + PageSize;
   console.log(firstPageIndex, lastPageIndex);
   setfirstindex(firstPageIndex); 
   setlastindex(lastPageIndex);
  
   //setDisplayFilterData([...displayFilterData.slice(firstPageIndex, lastPageIndex)])
   return displayFilterData.slice(firstPageIndex, lastPageIndex);
   
 }, [currentPage, PageSize, results, displayFilterData]);
 console.log("results", results)

 if(displayFilterData.length === PageSize){
   console.log(currentTableData, 'humm')
  }

  //serch\
  const filteredResults = (results) => {      
    const newResult = originalRows.filter((item) =>
    searchableKeys.some((key) =>
      item[key].toLowerCase().includes(results.toLowerCase())
    ))
    setDisplayFilterData(newResult)
    setCurrentPage(1)
    console.log('newResult', newResult)
    
  }

  const handleChange = (event) => {
    setPagesize(event.target.value);
    console.log(PageSize, event.target.value);
    setCurrentPage(1);
  };

  // new Array(filteredResults.length)
    //const [value, setValue] = useState(storeMatchData);
    const value = storeMatchData
    const dropdownValue = dropdownData
    // const [dropdownValue, //setDropdownValue] = useState(dropdownData)
    console.log("dropdownData", dropdownData)
    console.log("dropdownValue ", dropdownValue)
  const getItemIndex = (arr, item) => {
    if (Array.isArray(arr) && arr.length) {
      return arr.findIndex((e) => e.sfUserEmail === item);
    }
    return -1;
  };
  function storeEdit(event, sfEmail, sfId, instanceId, hsUserID) {
    const itemIndex = getItemIndex(value, sfEmail);
    const obj = {
      sfUserEmail: sfEmail,
      hsEmailID: event.target.value,
      sfUserId: sfId,
      // instanceID: instanceId,
      hsUserID: hsUserID,
    };
    if (itemIndex === -1) {
      //setValue([...value, obj]);
      dispatch(actions.storeMtachedUserData([...value, obj]))
      return;
    }
    const newArr = [...value];
    newArr[itemIndex] = obj;
    //setValue(newArr);
    dispatch(actions.storeMtachedUserData(newArr))
  }

  const handleRowChange = (event, sfEmail, sfId, instanceId, index) => {
    //alert("Hiiii"+event+' '+sfEmail+' '+sfId+ ' '+instanceId + '----------' + index)
    const obj1 = {}
    // obj1[index] = event.target.value
    console.log(index, 'handle change index')
    obj1[index] = event.target.value
    let obj = {...dropdownValue, ...obj1}
    // //setDropdownValue(obj)
    dispatch(actions.saveMtachUserData(obj))
    

    console.log("target value", event.target);
    console.log("my id", sfEmail);
    // console.log(event.target.value);

    let newval = event.target.value;
    let newArr = hfUsers.filter((item) => {
      return item.hsEmailID === newval;
    });

    console.log(newArr);

    storeEdit(event, sfEmail, sfId, instanceId, newArr[0].hsUserID);
  };

  console.log("value", value);

  

  // const [data, setData] = useState(originalRows);

  // const [searched, setSearched] = useState("");

  // console.log("test data", data);
  // const requestSearch = (searchedVal) => {
  //   const filteredRows = originalRows.filter((row) => {
  //     return row.sfUserEmail.toLowerCase().includes(searchedVal.toLowerCase());
  //   });
  //   setData(filteredRows);
  // };

  // const cancelSearch = () => {
  //   setSearched("");
  //   requestSearch(searched);
  // };

  
  const selectInputRef = useRef();
  
  const handleRefreshUserList = () => {    
    
    dispatch(actions.fetchSalesForceUserList(match));
    dispatch(actions.fetchHubSpotUserList(match));
  };

  const handleResetUserList = () => {
    let emptyArray = [];
    //setValue([...emptyArray]);
    dispatch(actions.storeMtachedUserData([...emptyArray]))
    const obj1 = {}
    //setDropdownValue({})
    dispatch(actions.saveMtachUserData({}))
    dispatch(actions.fetchSalesForceUserList(match));
    dispatch(actions.fetchHubSpotUserList(match));
  }

  const handleNext = (data, match) => {
   //alert(JSON.stringify(value));
    dispatch(actions.displayLoader());
    if (data.length) {
      //dispatch(actions.hideLoader({status:"200", msg:"succesfully added in redux", alertStatus:true} ));
      // setActiveStep((prevActiveStep) => prevActiveStep + 1);
      dispatch(actions.setEditInstanceActiveStep(activeStep + 1));
      //alert("hieee");
      let objNew = {
        instanceId:match,
        arr:value,
      }
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
  };

  const NoDataDiv = ()=>{
    return(
      <div className="no__match__found">
         <Typography  component="p" >No Match found</Typography>
      </div>
    )
  }
//console.log("filtered result", filteredResults)
console.log("value", value)
const handleValue = (index) =>{
  if(Object.keys(dropdownValue).length){
    return dropdownValue[index]

  }
}
const [addClass,  setAddClass] = useState(false)


const onFocusHandle = () =>{
  setAddClass(true)

}
const onBlurHandle = () =>{
  //setAddClass(false)
}
const ref = useRef(null);



  return (
    <>
      <CommonAlert  />
      <InstanceMainInfo instanceId={match} />
      <Paper className="main-paper-container">
        {/* table header */}
        <Grid container spacing={2} className="table-header-wrapper">
          <Grid item xs={12} sm={4} md={6}>
            <div className="table-search-input">
              <SearchBar
                searchIcon={<img src={searchIcon} />}
                closeIcon={<img src={crossIcon} />}
                value={results}
                onChange={(value) => 
                  {
                    filteredResults(value)
                    setResults(value)}
                  }
                placeholder={`find a contact`}
                onCancelSearch={() => 
                 { 
                  setResults("")
                  setDisplayFilterData(originalRows)
                  setAddClass(false)
                }                 
                }
                onBlur={()=>{onBlurHandle()}}
            onFocus={(e) => {
              onFocusHandle();
              console.log('Focused on input');
            }}
            className={`${addClass? 'search__bar__close': ''}`}
            ref={ref}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Grid
              container
              spacing={2}
              style={{ justifyContent: "right" }}
              className="table-controls"
            >
              <Grid item>
                <Button
                  startIcon={<img src={refresh} />}
                  onClick={(e) => handleRefreshUserList()}
                >
                  Refresh User
                </Button>
              </Grid>
              <Grid item>
                <Button startIcon={<img src={reset}/> }
                onClick={(e) => handleResetUserList()}
                >Reset</Button>
              </Grid>
              <Grid item>
                <Button startIcon={<img src={autoSave} />}>
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
          {loader&&<SimpleBackdrop />}
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableBody>
                {!currentTableData.length ? NoDataDiv() : ''}
                  {currentTableData.map((item, index) => {
                    let pageIndex = PageSize *(currentPage-1)+index;
                    console.log("my index", index)
                    console.log("PageSize"+PageSize, "currentPage"+currentPage, "pageIndex"+pageIndex);
                    return (
                      <TableRow key={`${item.sfUserEmail} ${pageIndex}`}>
                        <TableCell align="left" width="40%">
                          {item.sfUserEmail}
                        </TableCell>
                        <TableCell align="left" width="20%">
                          <img src={RightArrow} />
                        </TableCell>
                        <TableCell align="left" width="40%">
                          <FormControl
                            variant="outlined"
                            className="map-user-select"
                          >
                            {/* {console.log("value inside lool"+ JSON.stringify(Array.isArray(value) && value.length ?value[index]:[]))} */}
                            
                            {/* {JSON.stringify(Object.keys(dropdownValue).length, null, 2)} */}
                            
                            {/* {JSON.stringify(dropdownValue.index, null, 2)} */}
                            <Select
                              //ref={selectInputRef}
                              // labelId="demo-simple-select-placeholder-label-label"
                              //  id={index+1}
                              // value={value ? value?.value : ""}
                              // value={
                              //   Array.isArray(value) &&
                              //   value.length &&
                              //   value[index]
                              //     ? value[index].hsEmailID
                              //     : ""
                              // }
                              value = {Object.keys(dropdownValue).length&&dropdownValue[pageIndex] ? dropdownValue[pageIndex] : ''}
                              // value={handleValue(index)}
                              onChange={(event) =>
                                handleRowChange(
                                  event,
                                  item.sfUserEmail,
                                  item.sfUserID,
                                  item.instanceID,
                                  pageIndex
                                )
                              }
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
                              <MenuItem  value = "" disabled>
                                Select here...
                              </MenuItem>

                              {hfUsers.map((element) => {
                                return (
                                  <MenuItem
                                    className="selectItem-list"
                                    value={element.hsEmailID}
                                    // key={pageIndex}
                                    name={element.hsEmailID}
                                  >
                                    {element.hsEmailID}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </FormControl>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
         
         
          </Grid>
        </Grid>

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
              endIcon={<img src={nextArrow} />}
              onClick={() => handleNext(value, match)}
            >
              {" "}
              Next
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          className="table__pagination"
        >
          <Grid item xs={12} sm={3} md={3} className="table__content__number">
          <Typography variant="p" component="p" >Showing <span>{firstindex + 1}</span>-<span>{lastindex}</span> of <span>{displayFilterData.length}</span> Users</Typography>
          
              </Grid>
            <Grid item xs={12} sm={3} md={6} style={{textAlign:"center"}}>
            <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={displayFilterData.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
              </Grid>
              <Grid item xs={12} sm={3} md={3} style={{textAlign:"right"}} className="rows__per__page">
              <Typography variant="p" component="p" >Rows per page 
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
            <MenuItem value="" disabled>Select here...</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select></Typography>
              </Grid>
          </Grid>
      </Paper>

      {JSON.stringify(value, null, 2)}


    </>
  );
}

export default MatchUsers;
