import React, { useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/action/index";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CommonAlert = () => {
  const [open, setOpen] = React.useState(false);
  const [erroObj, setErroObj] = React.useState({ status: "", msg: "" });
  const msg = useSelector((state) => state.loader.msg);
  const status = useSelector((state) => state.loader.status);
  const alertStatus = useSelector((state) => state.loader.alertStatus);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    //  alert(JSON.stringify(dispatch))
    if (status === "400" && alertStatus) {
      setErroObj({ status: "400", msg });
      setTimeout(() => {
        setOpen(true);
        dispatch(actions.hideLoader({ alertStatus: false }));
      }, 500);
    } else if (status === "200" && alertStatus) {
      setErroObj({ status: "200", msg });
      setTimeout(() => {
        setOpen(true);
        dispatch(actions.hideLoader({ alertStatus: false }));
      }, 500);
    } else if (status !== "") {
      dispatch(actions.hideLoader({ alertStatus: false }));
    }
  }, [status]);
  
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={erroObj.status === "200" ? "success" : "error"}
      >
        {erroObj.msg}
      </Alert>
    </Snackbar>
  );
};

export default CommonAlert;
