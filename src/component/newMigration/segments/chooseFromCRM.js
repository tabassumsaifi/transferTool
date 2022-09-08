import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
//modal
import ChooseCrmModal from "./chooseCrmModal";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
//dispatch and selector
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/action/index";
//import axios from "../../../axios";
import CommonAlert from "../../Alert/commonAlert";
import FormControl from "@material-ui/core/FormControl";
import BottomPart from "./bottomPart";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: " 35px 25px 16px 25px",
    [theme.breakpoints.up("sm")]: {
      padding: "35px 30px 16px 45px",
    },
  },
  closeButton: {
    position: "absolute",
    right: "2px",
    top: "22px",
    color: "#525252",
    [theme.breakpoints.up("sm")]: {
      right: "12px",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6" className="select__crm__head">
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: "16px 30px 50px 30px",
    [theme.breakpoints.up("sm")]: {
      padding: "16px 90px 50px 90px",
    },
  },
}))(MuiDialogContent);

const ChooseCrm = (props) => {
  //modal
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("md");

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    setOpen(false);
  };

  //for dropdown
  const selectedFromValue = useSelector(
    (state) => state?.solution?.selecedObject?.from
  );
  const [selectCrm, setSelectCrm] = React.useState(selectedFromValue);
  const handleChange = (event) => {
    //alert(JSON.stringify(event.target.value) )
    setSelectCrm(event.target.value);
    let data = list.filter((data) => data.from === event.target.value);
    //alert(JSON.stringify(data[0]))
    if (data.length) {
      setSolutionObject(data[0].from);
      dispatch(actions.saveSelectedObject({ from: data[0].from }));
    }
  };
  //console.log("selectCrm", selectCrm);

  // const options = [
  //   { value: 1, label: "Within the last year" },
  //   { value: 2, label: "13 to 24 months ago" },
  //   { value: 3, label: "25 to 36 months ago" },
  //   { value: 4, label: "More than 36 months ago" },
  //   { value: 5, label: "Never" },
  // ];
  //list of solution
  const [list, setList] = useState([]);
  //const [error, setError] = useState({ status: "", msg: "" });
  const dispatch = useDispatch();

  //fetching new api for dropdown
  useEffect(() => {
    dispatch(actions.fetchFromCrmList(""));
  }, []);

  const fromCrmList = useSelector((state) => state.solution.FromCRMList);
  //console.log("from crm list", fromCrmList);
  // const unique = [...new Set(fromCrmList.map(item => item.from))]; // [ 'A', 'B']
  // console.log("unique", unique)
  const tabsValue = useSelector((state) => state.solution.selectedTabValue);

  //console.log("tabsValue", tabsValue);

  useEffect(() => {
    //    console.log(solutions)
    if (fromCrmList.length) {
      setList(fromCrmList);
    }
    //    setList()
  }, [fromCrmList]);

  //console.log("lists of solution", list);
  const fromToObject = useSelector((state) => state.solution.selecedObject);

  const fromObject = fromToObject.from;
  //console.log("fromObject",fromObject )

  //for connect
  const [solutionObject, setSolutionObject] = useState(selectedFromValue);
  const handleNext = (data) => {
    //alert(JSON.stringify(solutionObject))
    dispatch(actions.displayLoader());
    if (data) {
      //dispatch(actions.hideLoader({status:"200", msg:"succesfully added in redux", alertStatus:true} ));
      dispatch(actions.fetchToCrmList(fromObject));
      dispatch(actions.setSelectedTabValue(tabsValue + 1));
      dispatch(actions.setTabsValue({ tabOne: false, tabTwo: true }));
      dispatch(actions.newMigrationProgressBar(66.6));
    } else {
      dispatch(
        actions.hideLoader({
          status: "400",
          msg: "Please select any one option",
          alertStatus: true,
        })
      );
    }
  };

  // const handleClick = (data) => {
  //   //alert(value)
  //   //props.setValue(data);
  //   dispatch(actions.setSelectedTabValue(data));
  //   //console.log("selectedValue", data)
  // };

  //console.log("solution object", solutionObject);

  return (
    <>
      <CommonAlert />
      <Grid container spacing={3} className="choose__crm__wrapper">
        <Grid item xs={12} sm={12} md={12}>
          {/* migration box design */}
          <div align="center" class="boxwrap">
            <div class="migration__box" id="migrationBox1">
              {/* select option */}
              <FormControl variant="outlined">
                <Select
                  labelId="demo-simple-select-placeholder-label-label"
                  id="demo-simple-select-placeholder-label"
                  value={selectCrm}
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
                    Choose your CRM
                  </MenuItem>

                  {list.map((option) => (
                    <MenuItem className="selectItem-list" value={option.from}>
                      {option.from}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div style={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  color="primary"
                  disableFocusRipple="false"
                  disableRipple="false"
                  onClick={() => handleNext(solutionObject)}
                >
                  Connect
                </Button>
                {/* <Button onClick={()=>handleClick(tabsValue+1)}>test me</Button> */}
              </div>
            </div>
            <div class="migration__box" id="migrationBox2"></div>
            <div class="migration__box" id="migrationBox3"></div>
          </div>
        </Grid>

        <BottomPart />

        {/* MOdal content   */}

        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          className="choose__Crm__modal"
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Select your current CRM
          </DialogTitle>
          <DialogContent>
            <ChooseCrmModal />
          </DialogContent>
        </Dialog>

        {/* end */}
      </Grid>
    </>
  );
};

export default ChooseCrm;
