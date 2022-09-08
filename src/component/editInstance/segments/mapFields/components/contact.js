import React, { useState, useMemo, useEffect, useRef } from "react";
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
import deletebtn from "../../../../../assets/images/table/delete.png";
import nextArrow from "../../../../../assets/images/table/next-arrow.png";
import SearchBar from "material-ui-search-bar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import infoIcon from "../../../../../assets/images/table/info-icon.png";
import estimation from "../../../../../assets/images/table/estimation-icon.png";
import divide from "../../../../../assets/images/table/divid.png";
import mapped from "../../../../../assets/images/table/mapped.png";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import * as actions from "../../../../../store/action/index";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../../../../pagination/Pagination";
//import axios from "../../../../../axios";
import SimpleBackdrop from "../../../../../loader/loading";
import ConfirmMigration from "../confirmMigration/confirmMigration";
import NotifySection from "./notifyDiv";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Contact({ instanceId }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const mappedContactStatus = useSelector(
  //   (state) => state?.solution?.mappedContactStatus
  // );
  const loader = useSelector((state) => state.mapLoader.mapLoader);
  const selectedTab = useSelector(
    (state) => state?.solution?.mapFieldsSelectedTab
  );
  const activeStep = useSelector((state) => state.solution.activeStep);
  const initialRenderContact = useSelector(
    (state) => state?.solution?.initialRenderContact
  );
  const fetchedContactList = useSelector(
    (state) => state?.solution?.fetchedContactList
  );
  const mapFieldsTabsList = useSelector(
    (state) => state?.solution?.fetchMapFieldTabsList?.migrationObjList
  );
  const removeMapField = useSelector(
    (state) => state.solution?.contactMapFieldFlag
  );
  const labelArrayLength = mapFieldsTabsList.length - 1;
  //console.log("label ArrayLength", labelArrayLength);
  const migrationCondition = selectedTab === labelArrayLength;
  const [companiesList, setCompaniesList] = useState([]);
  const [firstIndexVal, setFirstIndexVal] = useState();
  const [secondIndex, setSecondIndex] = useState();
  const [displayFilterData, setDisplayFilterData] = useState([]);
  const searchableKeys = ["hsContactName"];
  const [results, setResults] = useState("");
  //   console.log("fetchedContactList", fetchedContactList)
  const Externalids = useSelector((state)=>state.solution?.externalIdsList)
  const screenName = "contactMap";
  const [externalId, setExternalId] = useState("");
  //API call
  useEffect(() => {
    // axios({
    //   method: 'get',
    //   url: '/api/dataMapping/getContactsList',
    //   params: {
    //     instanceID:"111122223333444"
    //   }
    // }).then((response)=> console.log(response));
    if (initialRenderContact) {
      dispatch(actions.fetchMapContactData(instanceId));
    }
    //dispatch(actions.fetchMapContactData("111122223333444"));
  }, []);

  useEffect(() => {
    if (fetchedContactList.length) {
      setDisplayFilterData(fetchedContactList);
      setCompaniesList(fetchedContactList);
    }
  }, [fetchedContactList]);
  //console.log("company list", companiesList);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  //const [rowsPerPage, setRowsPerPage] = React.useState(2);
  const [PageSize, setPagesize] = useState(5);
  const [firstindex, setfirstindex] = useState("");
  const [lastindex, setlastindex] = useState("");

  let currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
   // console.log(firstPageIndex, lastPageIndex);
    setfirstindex(firstPageIndex);
    setlastindex(lastPageIndex);

    //setDisplayFilterData([...displayFilterData.slice(firstPageIndex, lastPageIndex)])
    return displayFilterData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize, results, displayFilterData]);
  if (displayFilterData.length === PageSize) {
  //  console.log(currentTableData, "humm");
  }
  //console.log("results", results);
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
  const swapValueHandler = () => {
    //alert(JSON.stringify(companiesList[id].sfCompanyName))
    const updatedList = displayFilterData;
    let fValue = displayFilterData[firstIndexVal].hsContactName;
    let sValue = displayFilterData[secondIndex].hsContactName;
    updatedList[firstIndexVal].hsContactName = sValue;
    updatedList[secondIndex].hsContactName = fValue;
    // console.log(
    //   displayFilterData[firstIndexVal],
    //   displayFilterData[secondIndex]
    // );

  //  console.log("updated array ", updatedList);
    setDisplayFilterData([...updatedList]);
    dispatch(actions.removeContactMapFieldFlag(false));
    //saveMappedCompanyData
    // const td = document.querySelectorAll('td');
    // td.forEach(function (userItem) {
    //   userItem.style.backgroundColor = 'antiquewhite';
    // });
  };

  const handleChange = (event) => {
    setPagesize(event.target.value);
    //console.log(PageSize, event.target.value);
    setCurrentPage(1);
  };
  //console.log("current table data", currentTableData);
  // search component

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

 // console.log("filtered Results", filteredResults);
  //confirm modal
  const [open, setOpen] = React.useState(false);
  const handleModal = () => {
    //alert("hiee")
    setOpen(true);
  };

  //mappedContactData
  const dispatchStoreApi = () => {
    let match = instanceId;
    let obj = {
      instanceId: match,
      externalId:externalId,
      screenName:screenName,
      arr: companiesList,
    };
   // console.log("my object", obj);
    dispatch(actions.mappedContactData(obj));
  };
  const handleNext = () => {
    // alert("hieee")
    // axios({
    //     method: 'post',
    //     url: '/api/dataMapping/storeContactMappedData',
    //     data: {data:companiesList}
    //   }).then((response)=> console.log(response));
    if (migrationCondition) {
      setOpen(true);
      dispatchStoreApi();
    } else {
      dispatchStoreApi();
      dispatch(actions.setMapFieldsSelectedTabs(selectedTab + 1));
    }
  };
  const handleBack = () => {
    if (selectedTab === 0) {
      dispatch(actions.setEditInstanceActiveStep(activeStep - 1));
    } else {
      dispatch(actions.setMapFieldsSelectedTabs(selectedTab - 1));
    }
  };

  const handleRefreshUserList = () => {
    dispatch(actions.refreshContactData(instanceId));
  };
  const handleResetUserList = () => {
    setDisplayFilterData(companiesList);
    dispatch(actions.fetchMapContactData(instanceId));
    dispatch(actions.removeContactMapFieldFlag(true));
  };

 // console.log("comapny list", companiesList);

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
 // console.log("externalId", externalId);

   //Delete
   const handleDelete = (id) => {
    const updatedList = displayFilterData.filter((row) => row.id !== id);
    //console.log('filtered Array', updatedList)
    setDisplayFilterData(updatedList);
    setCompaniesList(updatedList);
    dispatch(actions.removeContactMapFieldRow(id));
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
                setDisplayFilterData(companiesList);
                setAddClass(false);
              }}
              onBlur={() => {
                onBlurHandle();
              }}
              onFocus={(e) => {
                onFocusHandle();
               // console.log("Focused on input");
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
        className="main-table-section"
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
                      <TableCell align="left" width="40%">
                        <div className="web__address__details">
                          <Typography variant="p" component="p">
                            {row.sfContactName}{" "}
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
                        //  console.log("onPointerDown :" + row.id);
                        }}
                        onDragEnd={() => {
                          swapValueHandler();
                          // alert('lkjlkjlkj');
                        }}
                      >
                        <div className="web__address__details">
                          <Typography variant="p" component="p">
                            {row.hsContactName}
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
      {companiesList.length ? (
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
        {companiesList.length ?  <NotifySection /> : ''}

      {/* table bottom footer */}
      <Grid container spacing={3} className="table-bottom-footer">
        <Grid item xs={6} sm={6} md={6}>
          <Button
            variant="outlined"
            color="primary"
            // onClick={() => dispatch(actions.setMapFieldsSelectedTabs(selectedTab - 1))}
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
            //onClick={() => dispatch(actions.setMapFieldsSelectedTabs(selectedTab + 1))}
            onClick={handleNext}
          >
            {migrationCondition ? "Start Migration" : "Next"}
          </Button>
        </Grid>
      </Grid>
      <ConfirmMigration
        setOpen={setOpen}
        open={open}
        handleModal={handleModal}
        instanceId={instanceId}
      />
      {/* {JSON.stringify(companiesList, null, 2)} */}
    </>
  );
}

export default Contact;
