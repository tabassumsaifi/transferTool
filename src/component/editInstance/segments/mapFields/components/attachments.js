import React, {useState, useEffect} from 'react'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import searchIcon from "../../../../../assets/images/table/search-icon.png";
import crossIcon from "../../../../../assets/images/table/close.png";
import refresh from "../../../../../assets/images/table/refresh.png";
import autoSave from "../../../../../assets/images/table/autosave.png";
import nextArrow from "../../../../../assets/images/table/next-arrow.png";
import SearchBar from "material-ui-search-bar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import infoIcon from '../../../../../assets/images/table/info-icon.png'
import estimation from '../../../../../assets/images/table/estimation-icon.png'
import divide from '../../../../../assets/images/table/divid.png'
import mapped from '../../../../../assets/images/table/mapped.png'
import * as actions from '../../../../../store/action/index'
import {useSelector, useDispatch} from 'react-redux'
import SimpleBackdrop from "../../../../../loader/loading";
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

function Attachments() {
    const classes = useStyles();
    const dispatch = useDispatch();   
    const loader = useSelector(state => state.loader.loader)
    const selectedTab = useSelector(state=> state?.solution?.mapFieldsSelectedTab) 
    const initialRenderAttachments = useSelector(state=>state?.solution?.initialRenderAttachments) 
    const fetchedAttachmentsList = useSelector(state=>state?.solution?.fetchedAttachmentsList)    
    const [attachmentList, setAttachmentList] = useState([]);
    const [firstIndexVal, setFirstIndexVal] = useState();
  const [secondIndex, setSecondIndex] = useState();
//   console.log("fetchedAttachmentsList", fetchedAttachmentsList)
 //API call
 useEffect(() => {
    // axios({
    //   method: 'get',
    //   url: '/api/dataMapping/getattachmentList',
    //   params: {
    //     instanceID:"ABCDEFG123456"
    //   }
    // }).then((response)=> console.log(response));
    if(initialRenderAttachments){  
        dispatch(actions.fetchMapAttachmentsData("ABCDEFG123456"));
    }
    //dispatch(actions.fetchMapMeetingData("111122223333444"));
    
  }, []);

  useEffect(() => {
    if (fetchedAttachmentsList.length) setAttachmentList(fetchedAttachmentsList);
  }, [fetchedAttachmentsList]);
  console.log("company list", attachmentList);

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
    //alert(JSON.stringify(attachmentList[id].sfCompanyName))
    const updatedList = attachmentList;
    let fValue = attachmentList[firstIndexVal].hsID;
    let sValue = attachmentList[secondIndex].hsID;
    updatedList[firstIndexVal].hsID = sValue;
    updatedList[secondIndex].hsID = fValue;
    console.log(attachmentList[firstIndexVal], attachmentList[secondIndex]);

    console.log("updated array ", updatedList);
    setAttachmentList([...updatedList]);
    //saveMappedCompanyData
    // const td = document.querySelectorAll('td');
    // td.forEach(function (userItem) {
    //   userItem.style.backgroundColor = 'antiquewhite';
    // });
  
  };







    //pagination
//     const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = React.useState(2);
//   const [PageSize, setPagesize] = useState(10);
//   const [firstindex, setfirstindex] = useState("");
//   const [lastindex, setlastindex] = useState("");

//   const currentTableData = useMemo(() => {
//     const firstPageIndex = (currentPage - 1) * PageSize;
//     const lastPageIndex = firstPageIndex + PageSize;
//     console.log(firstPageIndex + 1, lastPageIndex);
//     setfirstindex(firstPageIndex);
//     setlastindex(lastPageIndex);

//     return data.slice(firstPageIndex, lastPageIndex);
//   }, [currentPage, PageSize]);
//   const handleChange = (event) => {
//     setPagesize(event.target.value);
//     console.log(PageSize, event.target.value);
//     setCurrentPage(1);
//   };
// search component
const searchableKeys = ["hsID"];
    const [results, setResults] = useState("");
    const filteredResults = attachmentList.filter((item) =>
    searchableKeys.some((key) =>
      item[key].toLowerCase().includes(results.toLowerCase())
    )
  );

console.log("filtered Results", filteredResults)
//mappedContactData
const handleNext = () => {
    //alert("hieee")
    // axios({
    //     method: 'post',
    //     url: '/api/dataMapping/storeContactMappedData',
    //     data: {data:attachmentList}
    //   }).then((response)=> console.log(response));
    let match = "ABCDEFG123456";
    let obj = {
      instanceId: match,
      arr: attachmentList,
    };
    console.log("my object", obj);
      
     dispatch(actions.mappedAttachmentsData(obj))
    dispatch(actions.setMapFieldsSelectedTabs(selectedTab + 1))
  }

  const handleRefreshUserList = () => {    
    dispatch(actions.refreshAttachmentsData("ABCDEFG123456"));
  };
  const handleResetUserList = () => {
    setAttachmentList(fetchedAttachmentsList);
    dispatch(actions.fetchMapAttachmentsData("ABCDEFG123456"));
  }

console.log('comapny list', attachmentList)

    return (
        <>
        {/* table header */}
        <Grid container spacing={2} className="table-header-wrapper">
          <Grid item xs={12} sm={3} md={4}>
            <div className="table-search-input">
              <SearchBar
                searchIcon={<img src={searchIcon} alt="mapped"/>}
                closeIcon={<img src={crossIcon} alt="mapped" />}
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
              // style={{ justifyContent: "right" }}
              className="table-controls"
            >
              <Grid item>
                <Button
                  startIcon={<img src={refresh} alt="refresh" />}
                  onClick={(e) => handleRefreshUserList()}
                >
                  Refresh User
                </Button>
              </Grid>
              <Grid item>
                <Button startIcon={<img src={mapped} alt="mapped" />}
                  onClick={(e) => handleResetUserList()}
                >Unmapped fields</Button>
              </Grid>
              <Grid item>
                <Button startIcon={<img src={autoSave} alt="autoSave" />}>
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
                            {row.sfID}{" "}
                            <span>
                              <img src={infoIcon} alt="infoIcon" />
                            </span>
                          </Typography>
                          <Typography variant="span" component="span">
                            Usage: 3%{" "}
                            <span>
                              <img src={estimation} alt="estimation" />
                            </span>
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell align="left" width="20%">
                        <div className="web__actions">
                          <Typography variant="span" component="span">
                            <img src={divide} alt="divide" />
                          </Typography>
                          <Typography variant="span" component="span">
                            <img src={mapped} alt="mapped" />
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
                            {row.hsID}
                            <span>
                              <img src={infoIcon} alt="mapped" />
                            </span>
                          </Typography>
                        </div>
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
              onClick={() => dispatch(actions.setMapFieldsSelectedTabs(selectedTab - 1))}
            >
              {" "}
              Back
            </Button>
          </Grid>
          <Grid item xs={6} sm={6} md={6} style={{ textAlign: "right" }}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<img src={nextArrow} alt="mapped" />}
               //onClick={() => dispatch(actions.setMapFieldsSelectedTabs(selectedTab + 1))}
               onClick={handleNext}
            >
              {" "}
              Next
            </Button>
          </Grid>
        </Grid>
        {JSON.stringify(attachmentList, null, 2)}
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
    )
}

export default Attachments
