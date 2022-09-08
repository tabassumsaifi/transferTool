import React, { useState, useMemo, useEffect, useRef } from "react";
//import axios from "../../../../../axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
//import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import searchIcon from "../../../../../assets/images/table/search-icon.png";
import crossIcon from "../../../../../assets/images/table/close.png";
import refresh from "../../../../../assets/images/table/refresh.png";
import autoSave from "../../../../../assets/images/table/autosave.png";
import nextArrow from "../../../../../assets/images/table/next-arrow.png";
import deletebtn from "../../../../../assets/images/table/delete.png";
import SearchBar from "material-ui-search-bar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import infoIcon from "../../../../../assets/images/table/info-icon.png";
import estimation from "../../../../../assets/images/table/estimation-icon.png";
import divide from "../../../../../assets/images/table/divid.png";
import mapped from "../../../../../assets/images/table/mapped.png";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Pagination from "../../../../pagination/Pagination";
import * as actions from "../../../../../store/action/index";
import { useSelector, useDispatch } from "react-redux";
import SimpleBackdrop from "../../../../../loader/loading";
import ConfirmMigration from "../confirmMigration/confirmMigration";
import NotifySection from "./notifyDiv";

const useStyles = makeStyles({
  table: {
    minWidth: 560,
  },
});

function Engagements({ instanceId }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const mappedCompanyStatus = useSelector(
  //   (state) => state?.solution?.mappedCompanyStatus
  // );
  const loader = useSelector((state) => state.mapLoader.mapLoader);
  const activeStep = useSelector((state) => state.solution.activeStep);
  const initialRenderEngage = useSelector(
    (state) => state?.solution?.initialRenderEngage
  );
  const selectedTab = useSelector(
    (state) => state?.solution?.mapFieldsSelectedTab
  );
  const fetchedEngageList = useSelector(
    (state) => state.solution?.fetchedEngageList
  );
  const mapFieldsTabsList = useSelector(
    (state) => state?.solution?.fetchMapFieldTabsList?.migrationObjList
  );
  const labelArrayLength = mapFieldsTabsList.length - 1;
  // console.log("label ArrayLength", labelArrayLength);
  const migrationCondition = selectedTab === labelArrayLength;
  //data maping sfCompanyName hsEngagementName
  const [engagementList, setEngagementList] = useState([]);
  const [firstIndexVal, setFirstIndexVal] = useState();
  const [secondIndex, setSecondIndex] = useState();
  const [displayFilterData, setDisplayFilterData] = useState([]);
  // const [listTwoNames, setListTwoNames] = useState([
  //   { id: 1, first_name: "Jessamyn", email: "jespinazo0@chicagotribune.com" },
  //   { id: 2, first_name: "Isac", email: "itooher1@psu.edu" },
  //   { id: 3, first_name: "Tabbatha", email: "tproschke2@weibo.com" },
  //   { id: 4, first_name: "Ninetta", email: "nmabb3@canalblog.com" },
  //   { id: 5, first_name: "Danni", email: "dwallentin4@comcast.net" },
  //   { id: 6, first_name: "Neely", email: "npurkins5@mediafire.com" },
  //   { id: 7, first_name: "Jessika", email: "jkinkaid6@eventbrite.com" },
  // ]);
  const Externalids = useSelector((state) => state.solution?.externalIdsList);
  const screenName = "engagemntsMap";
  const [externalId, setExternalId] = useState("");
  const removeMapField = useSelector(
    (state) => state.solution?.engagementMapFieldFlag
  );
  //API call
  useEffect(() => {
    // axios({
    //   method: 'get',
    //   url: '/api/dataMapping/getEngagementsList',
    //   params: {
    //     instanceID:instanceId
    //   }
    // }).then((response)=> console.log(response));
    if (initialRenderEngage) {
      dispatch(actions.fetchMapEngageData(instanceId));
    }
  }, []);

  useEffect(() => {
    if (fetchedEngageList.length) {
      setDisplayFilterData(fetchedEngageList);
      setEngagementList(fetchedEngageList);
    }
  }, [fetchedEngageList]);
  //console.log("company list", engagementList);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  //const [rowsPerPage, setRowsPerPage] = React.useState(2);
  const [PageSize, setPagesize] = useState(10);
  const [firstindex, setfirstindex] = useState("");
  const [lastindex, setlastindex] = useState("");
  const searchableKeys = ["hsEngagementName"];
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

  if (displayFilterData.length === PageSize) {
    //console.log(currentTableData, "humm");
  }

  function onDragStart(event, index) {
    event.dataTransfer.setData("text/plain", event.target.id);
    //event.currentTarget.style.backgroundColor = "yellow";
    //console.log("onDragStart" + index);
  }
  const onDragOver = (event, index) => {
    event.preventDefault();
    setSecondIndex(index);
    //console.log("onDragEnd" + index);
  };
  const swapValueHandler = () => {
    //alert(JSON.stringify(engagementList[id].sfCompanyName))
    const updatedList = displayFilterData;
    let fValue = displayFilterData[firstIndexVal].hsEngagementName;
    let sValue = displayFilterData[secondIndex].hsEngagementName;
    updatedList[firstIndexVal].hsEngagementName = sValue;
    updatedList[secondIndex].hsEngagementName = fValue;
    // console.log(
    //   displayFilterData[firstIndexVal],
    //   displayFilterData[secondIndex]
    // );

    //console.log("updated array ", updatedList);
    displayFilterData([...updatedList]);
    dispatch(actions.removeEngagementMapFieldFlag(false));
    //saveMappedCompanyData
    // const td = document.querySelectorAll('td');
    // td.forEach(function (userItem) {
    //   userItem.style.backgroundColor = 'antiquewhite';
    // });
  };

  const handleChange = (event) => {
    setPagesize(event.target.value);
    // console.log(PageSize, event.target.value);
    setCurrentPage(1);
  };

  // console.log("current table data", currentTableData);

  //fillter component
  const filteredResults = (results) => {
    const newResult = engagementList.filter((item) =>
      searchableKeys.some((key) =>
        item[key].toLowerCase().includes(results.toLowerCase())
      )
    );
    setDisplayFilterData(newResult);
    setCurrentPage(1);
    //console.log ("newResult", newResult);
  };

  const handleBack = () => {
    if (selectedTab === 0) {
      dispatch(actions.setEditInstanceActiveStep(activeStep - 1));
    } else {
      dispatch(actions.setMapFieldsSelectedTabs(selectedTab - 1));
    }
  };
  const dispatchStoreApi = () => {
    let match = instanceId;
    let obj = {
      instanceId: match,
      externalId: externalId,
      screenName: screenName,
      arr: engagementList,
    };
    // console.log("my object", obj);
    dispatch(actions.mappedEngageData(obj));
  };
  const handleNext = () => {
    if (migrationCondition) {
      setOpen(true);
      dispatchStoreApi();
    } else {
      dispatchStoreApi();
      dispatch(actions.setMapFieldsSelectedTabs(selectedTab + 1));
    }
  };
  const handleRefreshUserList = () => {
    dispatch(actions.refreshEngageData(instanceId));
  };
  const handleResetUserList = () => {
    // let emptyArray = [];
    setDisplayFilterData(engagementList);
    //dispatch(actions.mappedEngageData(engagementList))
    //setdummy({})
    dispatch(actions.fetchMapEngageData(instanceId));
    dispatch(actions.removeEngagementMapFieldFlag(true));
  };
  const [open, setOpen] = React.useState(false);
  const handleModal = () => {
    //alert("hiee")
    setOpen(true);
  };
  const [addClass, setAddClass] = useState(false);

  const onFocusHandle = () => {
    setAddClass(true);
  };
  const onBlurHandle = () => {
    //setAddClass(false)
  };
  const ref = useRef(null);
  const NoDataDiv = () => {
    return (
      <div className="no__match__found">
        <Typography component="p">No Data to display</Typography>
      </div>
    );
  };

  useEffect(() => {
    let newArray = Externalids.filter((item) => item.screenName === screenName);
    setExternalId(newArray[0].externalIdVal);
  }, [externalId]);
  //console.log("externalId", externalId);


   //Delete
   const handleDelete = (id) => {
    const updatedList = displayFilterData.filter((row) => row.id !== id);
    //console.log('filtered Array', updatedList)
    setDisplayFilterData(updatedList);
    setEngagementList(updatedList);
    dispatch(actions.removeEngagementMapFieldRow(id));
  };
  //end delete

  //calculation of show per pages
  const calculation = () => {
    return lastindex > displayFilterData.length
      ? displayFilterData.length
      : lastindex;
  };
 

  return (
    <>
      {/* table header */}
      <Grid container spacing={2} className="table-header-wrapper">
        <Grid item xs={12} sm={3} md={4}>
          <div className="table-search-input">
            <SearchBar
              searchIcon={<img src={searchIcon} alt="" />}
              closeIcon={<img src={crossIcon} alt="" />}
              value={results}
              onChange={(value) => {
                filteredResults(value);
                setResults(value);
              }}
              placeholder={`find a field`}
              onCancelSearch={() => {
                setResults("");
                setDisplayFilterData(engagementList);
                setAddClass(false);
              }}
              onBlur={() => {
                onBlurHandle();
              }}
              onFocus={(e) => {
                onFocusHandle();
                console.log("Focused on input");
              }}
              className={`${addClass ? "search__bar__close" : ""}`}
              ref={ref}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={9} md={8}>
          <Grid
            container
            spacing={2}
            // style={{ justifyContent: "right" }}
            className="table-controls"
          >
            <Grid item>
              <Button
                startIcon={<img src={refresh} alt="" />}
                onClick={(e) => handleRefreshUserList()}
              >
                Refresh fields
              </Button>
            </Grid>
            <Grid item>
              <Button
                startIcon={<img src={mapped} alt="" />}
                onClick={(e) => handleResetUserList()}
              >
                Reset fields
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
      <Grid container className="main-table-section">
        <Grid item xs={12} sm={12} md={12}>
          {loader && <SimpleBackdrop />}
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
                {!currentTableData.length ? NoDataDiv() : ""}
                {currentTableData.map((row, index) => {
                  let pageIndex = PageSize * (currentPage - 1) + index;
                  // console.log(
                  //   "PageSize" + PageSize,
                  //   "currentPage" + currentPage,
                  //   "pageIndex" + pageIndex
                  // );
                  return (
                    <TableRow key={index}>
                      <TableCell align="left" width="40%">
                        <div className="web__address__details">
                          <Typography variant="p" component="p">
                            {row.sfEngagementName}{" "}
                            <span>
                              <img src={infoIcon} alt="" />
                            </span>
                          </Typography>
                          <Typography variant="span" component="span">
                            Usage: 3%{" "}
                            <span>
                              <img src={estimation} alt="" />
                            </span>
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell align="left" width="20%">
                        <div className="web__actions">
                          <Typography variant="span" component="span">
                            <img src={divide} alt="" />
                          </Typography>
                          <Typography variant="span" component="span">
                            <img src={mapped} alt="" />
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell
                        align="left"
                        width="40%"
                        draggable="true"
                        key={index}
                        id={`lione${row.id}`}
                        onDrag={(event) => onDragStart(event, pageIndex)}
                        onDragOver={(event) => onDragOver(event, pageIndex)}
                        onPointerDown={(event) => {
                          setFirstIndexVal(pageIndex);
                          // console.log("onPointerDown :" + row.id);
                        }}
                        onDragEnd={() => {
                          swapValueHandler();
                          // alert('lkjlkjlkj');
                        }}
                      >
                        <div className="web__address__details">
                          <Typography variant="p" component="p">
                            {row.hsEngagementName}
                            <span>
                              <img src={infoIcon} alt="" />
                            </span>
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell align="left" width="5%">
                        {removeMapField ? (
                          <Button
                            variant="outlined"
                            color="secondary"
                            endIcon={<img src={deletebtn} />}
                            onClick={() => handleDelete(row.id)}
                            className="Remove__button"
                          >
                            Remove
                          </Button>
                        ) : (
                          ""
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      {/* pagination  */}
      {engagementList.length ? (
        <Grid container className="table__pagination">
          <Grid item xs={12} sm={3} md={3} className="table__content__number">
            <Typography variant="p" component="p">
              Showing <span>{firstindex + 1}</span>-<span>{calculation()}</span> of{" "}
              <span>{displayFilterData.length}</span> Users
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={{ textAlign: "center" }}>
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={
                displayFilterData.length <= PageSize
                  ? 2
                  : displayFilterData.length
              }
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
      ) : (
        ""
      )}
       {/* bottom notify section */}
       {engagementList.length ? <NotifySection /> : ''}

      {/* table bottom footer */}
      <ConfirmMigration
        setOpen={setOpen}
        open={open}
        handleModal={handleModal}
        instanceId={instanceId}
      />

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
            onClick={handleNext}
          >
            {" "}
            {migrationCondition ? "Start Migration" : "Next"}
          </Button>
        </Grid>
        {/* <Grid item xs={6} sm={6} md={6} style={{ textAlign: "right" }}>
          <Button
            variant="contained"
            color="primary"
            endIcon={<img src={nextArrow} />}           
            onClick={handleModal}
          >
            {" "}
            {
              selectedTab===labelArrayLength ? '' : 'Next modal'
            }
            
          </Button>
       
       
        
        </Grid>
      */}
      </Grid>

      {/* {JSON.stringify(displayFilterData, null, 2)} */}
      {/* { JSON.stringify(mappedData, null, 2)} */}
    </>
  );
}

export default Engagements;
