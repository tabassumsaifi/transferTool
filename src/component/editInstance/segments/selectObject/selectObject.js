import React, { useState, useEffect } from "react";
// import Pagination from "../segments/pagination/Pagination";
// import TablePagination from "@material-ui/core/TablePagination";
//import axios from "../../../../axios";
import CommonAlert from "../../../Alert/commonAlert";
import Grid from "@material-ui/core/Grid";
import nextArrow from "../../../../assets/images/table/next-arrow.png";
import Button from "@material-ui/core/Button";
//import { useHistory } from "react-router-dom";
import * as actions from "../../../../store/action/index";
import { useDispatch, useSelector } from "react-redux";
import InstanceMainInfo from "../instanceMainInfo";
//import SimpleBackdrop from "../../../../loader/loading";
import AuthLoader from "../../../../loader/authLoader";
//table
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FilterListIcon from "@material-ui/icons/FilterList";
import Chip from "@material-ui/core/Chip";
import InfoPopup from "./components/infoPopup";
//PageSize = 10;
const useStyles = makeStyles({
  table: {
    minWidth: 560,
  },
});

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <Typography
        className={classes.title}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Table with Pagination
      </Typography>

      <Tooltip title="Filter list">
        <IconButton aria-label="filter list">
          <FilterListIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Filter list">
        <IconButton aria-label="filter list">
          <FilterListIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Filter list">
        <IconButton aria-label="filter list">
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const SelectObject = ({ match, instanceId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const activeStep = useSelector((state) => state.solution.activeStep);
  const loader = useSelector((state) => state.loader.loader);
  const selectedObjectStatus = useSelector(
    (state) => state?.solution?.selectedObjectStatus
  );
  //fetching status for information modal
  const infoPopupStatus = useSelector(
    (state) => state?.solution?.infoPopupStatus
  );

  // const intialRenderSelectedObject = useSelector(
  //   (state) => state.solution.intialRenderSelectedObject
  // );
  const fetchedSelectedObjectList = useSelector(
    (state) => state.solution.fetchedSelectedObjectList
  );
  const [fetchedList, setFetchedList] = useState([]);
  //const [selected, setSelected] = React.useState([]);
  const SelectedObject = useSelector(
    (state) => state.solution.saveSelectedObjectData
  );
  //console.log("SelectedObject", SelectedObject);
  const selected = SelectedObject;
  //const history = useHistory();
  //console.log("history", history);

  //API call

  useEffect(() => {
    // axios({
    //   method: 'get',
    //   url: '/api/getMigrationObjectsList',
    // //   params: {
    // //     instanceID:"ABCDEFG123456"
    // //   }
    // }).then((response)=> console.log(response));
    // if (intialRenderSelectedObject) {
    //   dispatch(actions.fetchSelectedObjectList());
    // }
    dispatch(actions.fetchSelectedObjectList());
    dispatch(actions.fetchExternalIds());
  }, []);
  useEffect(() => {
    if (fetchedSelectedObjectList.length) {
      setFetchedList(fetchedSelectedObjectList);
    }
  }, [fetchedSelectedObjectList]);
  //console.log("fetchedList", fetchedList);
  //selection table

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    //setSelected(newSelected);
    dispatch(actions.saveSelectedObjectData(newSelected));
  };
  //console.log("selected", selected);

  const isSelected = (name) => selected.indexOf(name) !== -1;
  //console.log(isSelected, 'isSelected')
  useEffect(() => {
    if (selectedObjectStatus) {
      dispatch(actions.setEditInstanceActiveStep(activeStep + 1));
    }
    // return () => {
    //   cleanup
    // }
  }, [selectedObjectStatus]);
  const handleNext = (match) => {
    //dispatch(actions.setEditInstanceActiveStep(activeStep + 1));
    //alert(JSON.stringify(match));
    dispatch(actions.displayLoader());
    if (selected.length) {
      let obj = {
        // instanceId: match,
        instance: match,
        arr: selected,
      };
      console.log("my object", obj);
      dispatch(actions.mappedSelectedObjectData(obj));
    } else {
      dispatch(
        actions.hideLoader({
          status: "400",
          msg: "Please Select atleast one field",
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

  return (
    <>
      <CommonAlert />
      {/* popup */}
      {infoPopupStatus && infoPopupStatus ? <InfoPopup /> : ""}

      <InstanceMainInfo instanceId={match} />
      <Paper className="main-paper-container selected__object__wrapper">
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <Grid
          container
          className="main-table-section scrollable__table__height"
        >
          <Grid item xs={12} sm={12} md={12}>
            {loader && (
              <AuthLoader msg="Please Wait....We are fetching data " />
            )}
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableBody>
                  {fetchedList.map((row, index) => {
                    //table selection
                    const isItemSelected = isSelected(row.sfField);
                    //console.log("isItemSelected", isItemSelected);
                    const labelId = `enhanced-table-checkbox-${index}`;
                    return (
                      <TableRow
                        //hover
                        onClick={(event) => handleClick(event, row.sfField)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </TableCell>

                        <TableCell
                          component="th"
                          scope="row"
                          className="selected__column"
                          width="33%"
                        >
                          {row.sfField}
                        </TableCell>
                        <TableCell width="33%">{row.hsField}</TableCell>
                        <TableCell width="33%">
                          <Chip
                            label="SUPER LONG TAG"
                            className="chip__modify"
                          ></Chip>
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
              endIcon={<img src={nextArrow} alt="Arrow" />}
              onClick={() => handleNext(match)}
            >
              {" "}
              Next
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* {JSON.stringify(selected, null, 2)} */}
    </>
  );
};

export default SelectObject;
