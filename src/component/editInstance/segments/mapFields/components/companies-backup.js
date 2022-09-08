import React, {useState, useMemo, useEffect} from 'react'
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
import infoIcon from '../../../../../assets/images/table/info-icon.png'
import estimation from '../../../../../assets/images/table/estimation-icon.png'
import divide from '../../../../../assets/images/table/divid.png'
import mapped from '../../../../../assets/images/table/mapped.png'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Pagination from '../../../../pagination/Pagination'
import data from '../../../../data/mock-data.json'
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

function Companies() {
    const classes = useStyles();
    //pagination
    const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(2);
  const [PageSize, setPagesize] = useState(10);
  const [firstindex, setfirstindex] = useState("");
  const [lastindex, setlastindex] = useState("");
  const searchableKeys = ["first_name"];
  const [results, setResults] = useState("");

  let currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    console.log(firstPageIndex + 1, lastPageIndex);
    setfirstindex(firstPageIndex);
    setlastindex(lastPageIndex);

    return(
      data.slice(firstPageIndex, lastPageIndex)
    )
  }, [currentPage, PageSize, results]);

  const handleChange = (event) => {
    setPagesize(event.target.value);
    console.log(PageSize, event.target.value);
    setCurrentPage(1);
  };

  console.log("current table data", currentTableData)
 

  // currentTableData = data.filter((item) =>
  //   searchableKeys.some((key) =>
  //     item[key].toLowerCase().includes(results.toLowerCase())
  //   )
  // );
    return (
        <>
        {/* table header */}
        <Grid container spacing={2} className="table-header-wrapper">
          <Grid item xs={12} sm={4} md={6}>
            <div className="table-search-input">
              <SearchBar
                searchIcon={<img src={searchIcon} />}
                closeIcon={<img src={crossIcon} />}
                // value={results}
                // onChange={(value) => setResults(value)}
                // placeholder={`find a contact`}
                // onCancelSearch={() => setResults("")}
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
                  //onClick={(e) => handleRefreshUserList()}
                >
                  Refresh User
                </Button>
              </Grid>
              <Grid item>
                <Button startIcon={<img src={reset} />}>Reset</Button>
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
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableBody>
                {currentTableData.map((row, index) => {
return(
  <TableRow key={index}>
      <TableCell align="left" width="40%">
                         <div className="web__address__details">                             
                         <Typography variant="p" component="p" >{row.first_name} <span><img src={infoIcon} /></span></Typography>
                         <Typography variant="span" component="span" >Usage: 3% <span><img src={estimation} /></span></Typography>
                         </div>
                        </TableCell>
                        <TableCell align="left" width="20%">
                          <div className="web__actions">
                          <Typography variant="span" component="span" ><img src={divide} /></Typography>
                          <Typography variant="span" component="span" ><img src={mapped} /></Typography>

                          </div>
                        </TableCell>
                        <TableCell align="left" width="40%">
                        <div className="web__address__details">                             
                         <Typography variant="p" component="p" >{row.email}<span><img src={infoIcon} /></span></Typography>
                         
                         </div>
                        </TableCell>

    </TableRow>
)
                 })}
                {/* <TableRow key="index">
                        <TableCell align="left" width="40%">
                         <div className="web__address__details">                             
                         <Typography variant="p" component="p" >Website / Address <span><img src={infoIcon} /></span></Typography>
                         <Typography variant="span" component="span" >Usage: 3% <span><img src={estimation} /></span></Typography>
                         </div>
                        </TableCell>
                        <TableCell align="left" width="20%">
                          <div className="web__actions">
                          <Typography variant="span" component="span" ><img src={divide} /></Typography>
                          <Typography variant="span" component="span" ><img src={mapped} /></Typography>

                          </div>
                        </TableCell>
                        <TableCell align="left" width="40%">
                        <div className="web__address__details">                             
                         <Typography variant="p" component="p" >Website / Address <span><img src={infoIcon} /></span></Typography>
                         
                         </div>
                        </TableCell>
                        
                      </TableRow>
                      <TableRow key="index">
                        <TableCell align="left" width="40%">
                         <div className="web__address__details">                             
                         <Typography variant="p" component="p" >Website / Address <span><img src={infoIcon} /></span></Typography>
                         <Typography variant="span" component="span" >Usage: 3% <span><img src={estimation} /></span></Typography>
                         </div>
                        </TableCell>
                        <TableCell align="left" width="20%">
                          <div className="web__actions">
                          <Typography variant="span" component="span" ><img src={divide} /></Typography>
                          <Typography variant="span" component="span" ><img src={mapped} /></Typography>

                          </div>
                        </TableCell>
                        <TableCell align="left" width="40%">
                        <div className="web__address__details">                             
                         <Typography variant="p" component="p" >Website / Address <span><img src={infoIcon} /></span></Typography>
                         
                         </div>
                        </TableCell>
                        
                      </TableRow>
                      <TableRow key="index">
                        <TableCell align="left" width="40%">
                         <div className="web__address__details">                             
                         <Typography variant="p" component="p" >Website / Address <span><img src={infoIcon} /></span></Typography>
                         <Typography variant="span" component="span" >Usage: 3% <span><img src={estimation} /></span></Typography>
                         </div>
                        </TableCell>
                        <TableCell align="left" width="20%">
                          <div className="web__actions">
                          <Typography variant="span" component="span" ><img src={divide} /></Typography>
                          <Typography variant="span" component="span" ><img src={mapped} /></Typography>

                          </div>
                        </TableCell>
                        <TableCell align="left" width="40%">
                        <div className="web__address__details">                             
                         <Typography variant="p" component="p" >Website / Address <span><img src={infoIcon} /></span></Typography>
                         
                         </div>
                        </TableCell>
                        
                      </TableRow>
                      <TableRow key="index">
                        <TableCell align="left" width="40%">
                         <div className="web__address__details">                             
                         <Typography variant="p" component="p" >Website / Address <span><img src={infoIcon} /></span></Typography>
                         <Typography variant="span" component="span" >Usage: 3% <span><img src={estimation} /></span></Typography>
                         </div>
                        </TableCell>
                        <TableCell align="left" width="20%">
                          <div className="web__actions">
                          <Typography variant="span" component="span" ><img src={divide} /></Typography>
                          <Typography variant="span" component="span" ><img src={mapped} /></Typography>

                          </div>
                        </TableCell>
                        <TableCell align="left" width="40%">
                        <div className="web__address__details">                             
                         <Typography variant="p" component="p" >Website / Address <span><img src={infoIcon} /></span></Typography>
                         
                         </div>
                        </TableCell>
                        
                      </TableRow>
                    */}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
        <Grid
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




        </>
    )
}

export default Companies
