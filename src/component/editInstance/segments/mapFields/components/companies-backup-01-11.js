import React, { useState, useMemo, useEffect } from "react";
import axios from "../../../../../axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import searchIcon from "../../../../../assets/images/table/search-icon.png";
import crossIcon from "../../../../../assets/images/table/close.png";
import refresh from "../../../../../assets/images/table/refresh.png";
import reset from "../../../../../assets/images/table/reset.png";
import autoSave from "../../../../../assets/images/table/autosave.png";
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
import Pagination from "../../../../pagination/Pagination";
import data from "../../../../data/mock-data.json";
import * as actions from "../../../../../store/action/index";
import { useSelector, useDispatch } from "react-redux";
import SimpleBackdrop from "../../../../../loader/loading";
import ConfirmMigration from "../confirmMigration/confirmMigration";

const useStyles = makeStyles({
  table: {
    minWidth: 560,
  },
});

function Companies() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const mappedCompanyStatus = useSelector(state=> state?.solution?.mappedCompanyStatus)
  const loader = useSelector(state => state.loader.loader)
  const activeStep = useSelector((state) => state.solution.activeStep);
  const initialRender = useSelector(state=>state?.solution?.initialRender)
  const selectedTab = useSelector(
    (state) => state?.solution?.mapFieldsSelectedTab
  );
  const fetchedCompaniesList = useSelector(
    (state) => state.solution?.fetchedCompanyList
  );
  const mappedData = useSelector(state=> state.solution.mappedCompanyData)
  const mapFieldsTabsList = useSelector(
    (state) => state?.solution?.fetchMapFieldTabsList?.migrationObjList
  );
  const labelArrayLength = mapFieldsTabsList.length - 1;
  console.log("label ArrayLength", labelArrayLength)
  const migrationCondition = selectedTab===labelArrayLength
  //data maping sfCompanyName hsCompanyName
  const [companiesList, setCompaniesList] = useState([]);
  const [firstIndexVal, setFirstIndexVal] = useState();
  const [secondIndex, setSecondIndex] = useState();
  const [listTwoNames, setListTwoNames] = useState([
    { id: 1, first_name: "Jessamyn", email: "jespinazo0@chicagotribune.com" },
    { id: 2, first_name: "Isac", email: "itooher1@psu.edu" },
    { id: 3, first_name: "Tabbatha", email: "tproschke2@weibo.com" },
    { id: 4, first_name: "Ninetta", email: "nmabb3@canalblog.com" },
    { id: 5, first_name: "Danni", email: "dwallentin4@comcast.net" },
    { id: 6, first_name: "Neely", email: "npurkins5@mediafire.com" },
    { id: 7, first_name: "Jessika", email: "jkinkaid6@eventbrite.com" },
  ]);

  //API call
  useEffect(() => {
    // axios({
    //   method: 'get',
    //   url: '/api/dataMapping/getCompaniesList',
    //   params: {
    //     instanceID:"111122223333444"
    //   }
    // }).then((response)=> console.log(response));
    if(initialRender){
      dispatch(actions.fetchmapCompanyData("111122223333444"));
    }
    
  }, []);

  useEffect(() => {
    if (fetchedCompaniesList.length) setCompaniesList(fetchedCompaniesList);
  }, [fetchedCompaniesList]);
  console.log("company list", companiesList);

  function onDragStart(event, index) {
    event.dataTransfer.setData("text/plain", event.target.id);
    //event.currentTarget.style.backgroundColor = "yellow";
    console.log("onDragStart" + index);
  }
  const onDragOver = (event, index) => {
    event.preventDefault();
    setSecondIndex(index);
    console.log("onDragEnd" + index);
  };
  const swapValueHandler = () => {
    //alert(JSON.stringify(companiesList[id].sfCompanyName))
    const updatedList = companiesList;
    let fValue = companiesList[firstIndexVal].hsCompanyName;
    let sValue = companiesList[secondIndex].hsCompanyName;
    updatedList[firstIndexVal].hsCompanyName = sValue;
    updatedList[secondIndex].hsCompanyName = fValue;
    console.log(companiesList[firstIndexVal], companiesList[secondIndex]);

    console.log("updated array ", updatedList);
    setCompaniesList([...updatedList]);
    //saveMappedCompanyData
    // const td = document.querySelectorAll('td');
    // td.forEach(function (userItem) {
    //   userItem.style.backgroundColor = 'antiquewhite';
    // });
  
  };
 

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(2);
  const [PageSize, setPagesize] = useState(10);
  const [firstindex, setfirstindex] = useState("");
  const [lastindex, setlastindex] = useState("");
  const searchableKeys = ["hsCompanyName"];
  const [results, setResults] = useState("");

  let currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    console.log(firstPageIndex + 1, lastPageIndex);
    setfirstindex(firstPageIndex);
    setlastindex(lastPageIndex);

    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize, results]);

  const handleChange = (event) => {
    setPagesize(event.target.value);
    console.log(PageSize, event.target.value);
    setCurrentPage(1);
  };

  console.log("current table data", currentTableData);

  const filteredResults = companiesList.filter((item) =>
    searchableKeys.some((key) =>
      item[key].toLowerCase().includes(results.toLowerCase())
    )
  );

  const handleBack = () => {
    if(selectedTab === 0){
      dispatch(actions.setEditInstanceActiveStep(activeStep - 1));
    }
     else{
      dispatch(actions.setMapFieldsSelectedTabs(selectedTab - 1))
     }
     
  };
const dispatchStoreApi = () =>{
  let match = "111122223333444";
  let obj = {
    instanceId: match,
    arr: companiesList,
  };
  console.log("my object", obj);
  dispatch(actions.mappedCompanyData(obj))
}
  const handleNext = () => {
    if(migrationCondition){
      setOpen(true)
      dispatchStoreApi();
    }
    else{
      dispatchStoreApi();
      dispatch(actions.setMapFieldsSelectedTabs(selectedTab + 1))
    }


    
  }
  const handleRefreshUserList = () => {    
    dispatch(actions.refreshCompanyData("111122223333444"));
  };
  const handleResetUserList = () => {
    // let emptyArray = [];
    setCompaniesList(fetchedCompaniesList);
    //dispatch(actions.mappedCompanyData(companiesList))
    //setdummy({})
    dispatch(actions.fetchmapCompanyData("111122223333444"));
  }
const [open, setOpen] = React.useState(false);
const handleModal = () =>{
  alert("hiee")
  setOpen(true)
}
  return (
    <>
      {/* table header */}
      <Grid container spacing={2} className="table-header-wrapper">
      <Grid item xs={12} sm={3} md={4}>
          <div className="table-search-input">
            <SearchBar
              searchIcon={<img src={searchIcon} />}
              closeIcon={<img src={crossIcon} />}
              value={results}
              onChange={(value) => setResults(value)}
              placeholder={`find a contact`}
              onCancelSearch={() => setResults("")}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={9} md={8}>
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
              <Button startIcon={<img src={mapped} />}
              onClick={(e) => handleResetUserList()}
              >Unmapped fields</Button>
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
        className="main-table-section
           scrollable__table__height
           "
      >
        <Grid item xs={12} sm={12} md={12}>
        {loader&&<SimpleBackdrop />}
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
                {filteredResults.map((row, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell align="left" width="40%">
                        <div className="web__address__details">
                          <Typography variant="p" component="p">
                            {row.sfAccountName}{" "}
                            <span>
                              <img src={infoIcon} />
                            </span>
                          </Typography>
                          <Typography variant="span" component="span">
                            Usage: 3%{" "}
                            <span>
                              <img src={estimation} />
                            </span>
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell align="left" width="20%">
                        <div className="web__actions">
                          <Typography variant="span" component="span">
                            <img src={divide} />
                          </Typography>
                          <Typography variant="span" component="span">
                            <img src={mapped} />
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell
                        align="left"
                        width="40%"
                        draggable="true"
                        key={index}
                        id={`lione${row.id}`}
                        onDrag={(event) => onDragStart(event, row.id)}
                        onDragOver={(event) => onDragOver(event, index)}
                        onPointerDown={(event) => {
                          setFirstIndexVal(index);
                          console.log("onPointerDown :" + row.id);
                        }}
                        onDragEnd={() => {
                          swapValueHandler();
                          // alert('lkjlkjlkj');
                        }}
                      >
                        <div className="web__address__details">
                          <Typography variant="p" component="p">
                            {row.hsCompanyName}
                            <span>
                              <img src={infoIcon} />
                            </span>
                          </Typography>
                        </div>
                      </TableCell>
                      {/* <TableCell>
                        <Button variant="outlined"
                 color="secondary"
                endIcon={<img src={nextArrow} />} 
                className="Remove__button"
                >Remove</Button>
                      </TableCell> */}
                    </TableRow>
                  );
                })}
               
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      {/* table bottom footer */}
      <ConfirmMigration setOpen={setOpen} open={open} handleModal={handleModal} />

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
            onClick={handleNext}
          >
            {" "}
            {
              migrationCondition ? 'Start Migration' : 'Next'
            }
            
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
      
      {JSON.stringify(companiesList, null, 2)}
      {/* { JSON.stringify(mappedData, null, 2)} */}
      {/* <Grid
          container
          className="table__pagination"
        >
          <Grid item xs={12} sm={3} md={3} className="table__content__number">
          <Typography variant="p" component="p" >Showing <span>{firstindex + 1}</span>-<span>{lastindex}</span> of <span>{data.length}</span> Users</Typography>
          
              </Grid>
            <Grid item xs={12} sm={3} md={6} style={{textAlign:"center"}}>
            <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
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
 */}
    </>
  );
}

export default Companies;
