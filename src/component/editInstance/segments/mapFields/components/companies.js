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
//import SearchTableBar from "./searchBar";
//alert for mapping field
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles({
  table: {
    minWidth: 560,
  },
});

function Companies({ instanceId }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const mappedCompanyStatus = useSelector(
  //   (state) => state?.solution?.mappedCompanyStatus
  // );
  const loader = useSelector((state) => state.mapLoader.mapLoader);
  const activeStep = useSelector((state) => state.solution.activeStep);
  const initialRender = useSelector((state) => state?.solution?.initialRender);
  const selectedTab = useSelector(
    (state) => state?.solution?.mapFieldsSelectedTab
  );
  const fetchedCompaniesList = useSelector(
    (state) => state.solution?.fetchedCompanyList
  );
  //const mappedData = useSelector((state) => state.solution.mappedCompanyData);
  const mapFieldsTabsList = useSelector(
    (state) => state?.solution?.fetchMapFieldTabsList?.migrationObjList
  );
  const labelArrayLength = mapFieldsTabsList.length - 1;
  //console.log("label ArrayLength", labelArrayLength);
  const migrationCondition = selectedTab === labelArrayLength;
  //data maping sfCompanyName hsCompanyName
  const [companiesList, setCompaniesList] = useState([]);
  const [firstIndexVal, setFirstIndexVal] = useState();
  const [secondIndex, setSecondIndex] = useState();
  // const [listTwoNames, setListTwoNames] = useState([
  //   { id: 1, first_name: "Jessamyn", email: "jespinazo0@chicagotribune.com" },
  //   { id: 2, first_name: "Isac", email: "itooher1@psu.edu" },
  //   { id: 3, first_name: "Tabbatha", email: "tproschke2@weibo.com" },
  //   { id: 4, first_name: "Ninetta", email: "nmabb3@canalblog.com" },
  //   { id: 5, first_name: "Danni", email: "dwallentin4@comcast.net" },
  //   { id: 6, first_name: "Neely", email: "npurkins5@mediafire.com" },
  //   { id: 7, first_name: "Jessika", email: "jkinkaid6@eventbrite.com" },
  // ]);
  const [displayFilterData, setDisplayFilterData] = useState([]);
  const Externalids = useSelector((state) => state.solution?.externalIdsList);
  const screenName = "companyMap";
  const [externalId, setExternalId] = useState("");
  //const [removeMapField, setRemoveMapField] = useState(true);
  const removeMapField = useSelector(
    (state) => state.solution?.CompanyMapFieldFlag
  );

  //API call
  useEffect(() => {
    // axios({
    //   method: 'get',
    //   url: '/api/dataMapping/getCompaniesList',
    //   params: {
    //     instanceID:instanceId
    //   }
    // }).then((response)=> console.log(response));
    if (initialRender) {
      dispatch(actions.fetchmapCompanyData(instanceId));
    }
  }, []);

  useEffect(() => {
    if (fetchedCompaniesList.length) {
      setDisplayFilterData(fetchedCompaniesList);
      setCompaniesList(fetchedCompaniesList);
    }
  }, [fetchedCompaniesList]);
  // console.log("company list", companiesList);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  //const [rowsPerPage, setRowsPerPage] = React.useState(2);
  const [PageSize, setPagesize] = useState(5);
  const [firstindex, setfirstindex] = useState("");
  const [lastindex, setlastindex] = useState("");
  const searchableKeys = ["hsCompanyName"];
  const [results, setResults] = useState("");

  let currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    // console.log(firstPageIndex, lastPageIndex);
    setfirstindex(firstPageIndex);
    setlastindex(lastPageIndex);

    //setDisplayFilterData([...displayFilterData.slice(firstPageIndex, lastPageIndex)])
    return displayFilterData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize, results, displayFilterData, companiesList]);
  // console.log("results", results);

  if (displayFilterData.length === PageSize) {
    // console.log(currentTableData, "humm");
  }

  function onDragStart(event, index) {
    event.dataTransfer.setData("text/plain", event.target.id);
    //event.currentTarget.style.backgroundColor = "yellow";
    // console.log("onDragStart" + index);
  }
  const onDragOver = (event, index) => {
    event.preventDefault();
    setSecondIndex(index);
    // console.log("onDragEnd" + index);
  };
  const [valueState, setValueState] = useState([]);
  const getItemIndex = (arr, item) => {
    if (Array.isArray(arr) && arr.length) {
      return arr.findIndex((e) => e.sfAccountName === item);
    }
    return -1;
  };
  function storeEdit(sfValue, fValue) {
    const itemIndex = getItemIndex(valueState, sfValue);

    const obj = {
      sfAccountName: sfValue,
      hsname: fValue,
    };
    if (itemIndex === -1) {
      setValueState([...valueState, obj]);
      //dispatch(actions.storeMtachedUserData([...value, obj]));
      return;
    }
    const newArr = [...valueState];
    newArr[itemIndex] = obj;
    setValueState(newArr);
    //dispatch(actions.storeMtachedUserData(newArr));
  }
  //console.log("valueState", valueState);
  const swapValueHandler = ({ sfName, id }) => {
    //alert(JSON.stringify(companiesList[id].sfCompanyName))
    const updatedList = displayFilterData;
    let fValue = displayFilterData[firstIndexVal].hsCompanyName;
    let sValue = displayFilterData[secondIndex].hsCompanyName;
    updatedList[firstIndexVal].hsCompanyName = sValue;
    updatedList[secondIndex].hsCompanyName = fValue;
    // console.log(
    //   displayFilterData[firstIndexVal],
    //   displayFilterData[secondIndex]
    // );

    //console.log("updated array ", updatedList);

    setDisplayFilterData([...updatedList]);
    dispatch(actions.removeCompanyMapFieldFlag(false));

    //new changes
    let sfValue = updatedList[secondIndex].sfAccountName;
    storeEdit(sfValue, fValue);

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

  const filteredResults = (results) => {
    const newResult = companiesList.filter((item) =>
      searchableKeys.some((key) =>
        item[key].toLowerCase().includes(results.toLowerCase())
      )
    );
    setDisplayFilterData(newResult);
    setCurrentPage(1);
    // console.log("newResult", newResult);
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
      arr: companiesList,
    };
    // console.log("my object", obj);
    dispatch(actions.mappedCompanyData(obj));
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
    dispatch(actions.refreshCompanyData(instanceId));
    // dispatch(actions.removeCompanyMapFieldFlag(true))
  };
  const handleResetUserList = () => {
    // let emptyArray = [];
    setDisplayFilterData(companiesList);
    //dispatch(actions.mappedCompanyData(companiesList))
    //setdummy({})
    dispatch(actions.fetchmapCompanyData(instanceId));
    dispatch(actions.removeCompanyMapFieldFlag(true));
  };
  const [open, setOpen] = React.useState(false);
  const handleModal = () => {
    // alert("hiee")
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
    setCompaniesList(updatedList);
    dispatch(actions.removeCompanyMapFieldRow(id));
  };
  //end delete

  //calculation of show per pages
  const calculation = () => {
    return lastindex > displayFilterData.length
      ? displayFilterData.length
      : lastindex;
  };
  //alert for mapping field
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const [openAlert, setOpenAlert] = React.useState(false);

  useEffect(() => {
    //setOpenAlert(true);
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  console.log("removeMapField", removeMapField);
  return (
    <>
      {/* table header */}
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleClose}
        className="mapField__alert"
      >
        <Alert onClose={handleClose} severity="info">
          Once you start the mapping, you can not remove fields!!!
        </Alert>
      </Snackbar>
      {/* end */}
      <Grid container spacing={2} className="table-header-wrapper">
        <Grid item xs={12} sm={3} md={4}>
          <div className="table-search-input">
            {/* <SearchTableBar /> */}
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
                setDisplayFilterData(companiesList);
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
      <Grid
        container
        className="main-table-section "
        // className="main-table-section
        // scrollable__table__height
        // "
      >
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
                      <TableCell align="left" width="37%">
                        <div className="web__address__details">
                          <Typography variant="p" component="p">
                            {row.sfAccountName}{" "}
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
                        width="37%"
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
                          swapValueHandler(row.sfAccountName, row.id);
                          // alert('lkjlkjlkj');
                        }}
                      >
                        <div className="web__address__details">
                          <Typography variant="p" component="p">
                            {row.hsCompanyName}
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
      <ConfirmMigration
        setOpen={setOpen}
        open={open}
        handleModal={handleModal}
        instanceId={instanceId}
      />

      {/* pagination  */}
      {companiesList.length ? (
        <Grid container className="table__pagination">
          <Grid item xs={12} sm={3} md={3} className="table__content__number">
            <Typography component="p">
              Showing <span>{firstindex + 1}</span>-<span>{calculation()}</span>{" "}
              of <span>{displayFilterData.length}</span> Users
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
                <MenuItem value=" " disabled>
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
 {companiesList.length ?  <NotifySection /> : ''}
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

      {/* {JSON.stringify(displayFilterData, null, 2)}  */}
      {/* {JSON.stringify(valueState, null, 2)}  */}
    </>
  );
}

export default Companies;
