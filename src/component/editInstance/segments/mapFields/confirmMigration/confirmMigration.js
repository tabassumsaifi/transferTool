import React from "react";
import Button from "@material-ui/core/Button";
import * as actions from "../../../../../store/action/index";
import { useDispatch, useSelector } from "react-redux";
//import { useHistory } from "react-router-dom";
//confirm modal
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import confirm from "../../../../../assets/images/table/confirm.png";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
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
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: "20px 0px 60px 0px",
    justifyContent: "center",
  },
}))(MuiDialogActions);

const ConfirmMigration = (props) => {
  const dispatch = useDispatch();
  const instanceId = props.instanceId;
  const activeStep = useSelector((state) => state.solution?.activeStep);
  const selsectedObjects = useSelector(
    (state) => state.solution?.saveSelectedObjectData
  );
  // const demoMigrationStatus = useSelector(
  //   (state) => state.solution?.demoMigrationStatus
  // );
  //console.log("selsectedObjects", selsectedObjects);

  const handleClose = () => {
    props.setOpen(false);
  };
  //console.log("main props", props);

  // const handleNext = () => {
  //   // alert(JSON.stringify(activeStep))
  //   // setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   props.setOpen(true);
  //   //dispatch(actions.setEditInstanceActiveStep(activeStep + 1));
  // };

  //below functions forward the screen to the next step when get true response forn demoMigration API(now commenting due to change in backend)
  // useEffect(() => {
  //   if (demoMigrationStatus) {
  //     dispatch(actions.setEditInstanceActiveStep(activeStep + 1));
  //   }
  // }, [demoMigrationStatus]);
  const handleConfirm = () => {
    let obj = {
      instance: instanceId,
      object: selsectedObjects,
      migrationType: "demo",
    };
    //console.log(obj);
    //dispatch with the above parameter
    dispatch(actions.demoMigration(obj));
    //moving the screen to the next screen we need to remove it if it will depend on the demo migration api response....
    dispatch(actions.setEditInstanceActiveStep(activeStep + 1));
    props.setOpen(false);
  };

  return (
    <>
      {/* <Grid item xs={8} sm={8} md={6} style={{ textAlign: "right" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            endIcon={<img src={NextArrow} alt="Next Arrow" />}
          >
            {" "}
            Start migration
          </Button>
        </Grid> */}
      <div>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={props.open}
          className="start__migration__modal"
        >
          <DialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          ></DialogTitle>
          <DialogContent>
            <div className=" confirm__img">
              <img src={confirm} alt="confirm modal" />
            </div>

            <Typography gutterBottom component="h1" variant="h1">
              Ready to start your sample migration?
            </Typography>
            <Typography
              gutterBottom
              component="p"
              className="confirm__description"
            >
              <span>Don't forget to review mappings for all objects</span> that
              you have selected for migration. You can swap between them using
              the navigation control at the bottom of the page.
            </Typography>
          </DialogContent>
          <DialogActions className="confirm__modal__footer">
            <Button
              autoFocus
              onClick={handleClose}
              color="primary"
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              autoFocus
              onClick={
                () => handleConfirm()
                //dispatch(actions.setEditInstanceActiveStep(activeStep + 1))
              }
              color="primary"
              variant="contained"
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default ConfirmMigration;
