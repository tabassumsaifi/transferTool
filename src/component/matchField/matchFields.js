import React, { useState, useEffect } from "react";
//import data from "./segments/data/mock-data.json";
//import axios from "../../axios";
import "../style.css";
import Main from "../../common/layout/header";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import RightArrow from "../../assets/images/table/right-arrow.png";
import searchIcon from "../../assets/images/table/search-icon.png";
import crossIcon from "../../assets/images/table/close.png";
import refresh from "../../assets/images/table/refresh.png";
import reset from "../../assets/images/table/reset.png";
import autoSave from "../../assets/images/table/autosave.png";
import nextArrow from "../../assets/images/table/next-arrow.png";
import SearchBar from "material-ui-search-bar";
//table
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
// import { useHistory } from "react-router-dom";

//dispatch and selector
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/action/index";

//PageSize = 10;
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const MatchField = ({ match }) => {
  const classes = useStyles();
  // const history = useHistory();
  //console.log("history", history);
  const [value, setValue] = useState([]);
  //saga

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchSalesForceUserList(match.params.id));
  }, []);

  useEffect(() => {
    dispatch(actions.fetchHubSpotUserList(match.params.id));
  }, []);

  //API call for salesfor
  //const [sfData, setSfData] = useState(""); 

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
      hsUserEmail: event.target.value,
      sfUserId: sfId,
      instanceID: instanceId,
      hsUserID: hsUserID,
    };
    if (itemIndex === -1) {
      setValue([...value, obj]);
      return;
    }
    const newArr = [...value];
    newArr[itemIndex] = obj;
    setValue(newArr);
  }

  const handleChange = (event, sfEmail, sfId, instanceId) => {
    //console.log("target value", event.target);
    //console.log("my id", sfEmail);
    // console.log(event.target.value);

    let newval = event.target.value;
    let newArr = hfUsers.filter((item) => {
      return item.hsEmailID === newval;
    });

    //console.log(newArr);

    storeEdit(event, sfEmail, sfId, instanceId, newArr[0].hsUserID);
  };

  //console.log("value", value);
 
  const [originalRows, setOriginalRows] = useState([]);
  const sfUserList = useSelector((state) => state.solution.salesForceUserList);
  useEffect(() => {
    //    console.log(solutions)
    if (sfUserList.length) {
      setOriginalRows(sfUserList);
    }
    //    setList()
  }, [sfUserList]);

  const [hfUsers, setHfUsers] = useState([]);

  const hsUserList = useSelector((state) => state.solution.hubspotUserList);
  useEffect(() => {
    //    console.log(solutions)
    if (hsUserList.length) {
      setHfUsers(hsUserList);
    }
  }, [hsUserList]);

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

  const searchableKeys = ["sfUserEmail"];
  const [results, setResults] = useState("");

  const filteredResults = originalRows.filter((item) =>
    searchableKeys.some((key) =>
      item[key].toLowerCase().includes(results.toLowerCase())
    )
  );
  //const selectInputRef = useRef();
  const handleRefreshUserList = () => {
    //dispatch(actions.resetSfHsUserList())
    //  setHfUsers([])

    //  setValue([])
    //window.location.reload();
    //selectInputRef.current.select.clearValue();
    let emptyArray = [];
    setValue([...emptyArray]);
    dispatch(actions.fetchSalesForceUserList(match.params.id));
    dispatch(actions.fetchHubSpotUserList(match.params.id));
  };

  const handleNext = () => {
    alert("hieee");
    dispatch(actions.matchUserData(value));
  };

 
  return (
    <>
      <Main>
        <Paper className="main-paper-container">
          {/* table header */}
          <Grid container spacing={2} className="table-header-wrapper">
            <Grid item xs={12} sm={4} md={6}>
              <div className="table-search-input">                
                <SearchBar
                  searchIcon={<img src={searchIcon} alt="" />}
                  closeIcon={<img src={crossIcon} alt="" />}
                  value={results}
                  onChange={(value) => setResults(value)}
                  placeholder={`find a contact`}
                  onCancelSearch={() => setResults("")}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
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
                    Refresh User
                  </Button>
                </Grid>
                <Grid item>
                  <Button startIcon={<img src={reset} alt="" />}>Reset</Button>
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
              <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                  <TableBody>
                    {filteredResults.map((item, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell align="left" width="40%">
                            {item.sfUserEmail}
                          </TableCell>
                          <TableCell align="left" width="20%">
                            <img src={RightArrow} alt="" />
                          </TableCell>
                          <TableCell align="left" width="40%">
                            <FormControl
                              variant="outlined"
                              className="map-user-select"
                            >
                              <Select
                                //ref={selectInputRef}
                                labelId="demo-simple-select-placeholder-label-label"
                                id="demo-simple-select-placeholder-label"
                                value={value ? value?.value : ""}
                                onChange={(event) =>
                                  handleChange(
                                    event,
                                    item.sfUserEmail,
                                    item.sfUserID,
                                    item.instanceID
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
                                <MenuItem disabled>Select here...</MenuItem>

                                {hfUsers.map((element) => {
                                  return (
                                    <MenuItem
                                      className="selectItem-list"
                                      value={element.hsEmailID}
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
            <Grid item xs={12} sm={4} md={6}>
              <Button variant="outlined" color="primary">
                {" "}
                Back
              </Button>
            </Grid>
            <Grid item xs={12} sm={4} md={6} style={{ textAlign: "right" }}>
              <Button
                variant="contained"
                color="primary"
                endIcon={<img src={nextArrow} alt="" />}
                onClick={() => handleNext()}
              >
                {" "}
                Next
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {JSON.stringify(value, null, 2)}
      </Main>
    </>
  );
};

export default MatchField;
