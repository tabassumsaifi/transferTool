import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import * as actions from '../../../../../store/action/index'
import { useDispatch, useSelector } from "react-redux";

function ConfirmationDialogRaw(props) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleOk = () => {
    //console.log(value, 'val')
    onClose(value);
    dispatch(actions.infoPopupStatus(false));

  };

  return (
    <Dialog
      maxWidth="xs"
      //onEntering={handleEntering}
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogContent>
        Taking long time to fetch data. Please Try again...
      </DialogContent>
      <DialogActions className="info-dialog-actions">
        <Button variant="outlined" onClick={handleOk} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}
ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    width: "80%",
    maxHeight: 435,
  },
}));

const InfoPopup = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [value, setValue] = React.useState("Dione");

  const handleClose = (newValue) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };
  return (
    <>
      <ConfirmationDialogRaw
        classes={{
          paper: classes.paper,
        }}
        id="ringtone-menu"
        keepMounted
        open={open}
        onClose={handleClose}
        value={value}
      />
    </>
  );
};

export default InfoPopup;
