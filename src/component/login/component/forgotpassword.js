import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
// import MuiDialogActions from "@material-ui/core/DialogActions";
import InputAdornment from "@material-ui/core/InputAdornment";
//import * as actions from '../../../store/action/index';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as actions from "../../../store/action/index";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import emailImage from "../../../assets/images/email.png";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "#000",
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
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

// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);

let initialValues = {
  emailId: "",
};

let initialTouched = {
  emailId: false,
};
export default function ForGotPasswordPopup(props) {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(true);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
    props.setOpen(false);
  };

  useEffect(() => {
    //formik.resetForm();
  }, []);
  const handleChange = (e) => {
    let test = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e.target.value);
    // alert(test)
    if (!test) {
      setError(true);
    } else {
      setError(false);
    }
    setEmail(e.target.value);
  };
  // const handleSubmit = (e)=>{
  //       e.preventDefault();
  //       let emailid = email.split(" ").join("");
  //       let test = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(emailid);
  //       if(test){
  //         dispatch(actions.homeLoginFlag())
  //         dispatch(actions.forgotPasswordSendLink(emailid))
  //       }else{
  //         setError(true)
  //       }

  const formik = useFormik({
    initialValues: initialValues,
    initialTouched: initialTouched,
    enableReinitialize: true,
    validationSchema: Yup.object({
      emailId: Yup.string()
        .required("Email id required")
        .matches(
          /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
          "Please enter valid email address"
        ),
    }),
    onSubmit: (emailId) => {
      // alert(JSON.stringify(values))
      dispatch(actions.homeLoginFlag());
      dispatch(actions.forgotPasswordSendLink(emailId));
      props.setOpen(false);
    },
  });
  // // useEffect(()=>{
  // //     dispatch(actions.homeLoginFlag())
  // // },[])

  const submitHandle = () => {
    //console.log(formik.errors);
    formik.handleSubmit();
  };

  return (
    <div>
      <Dialog
        fullWidth={true}
        TransitionComponent={Transition}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth={"sm"}
      >
        <DialogTitle
          id="form-dialog-title"
          className="forget-popup"
          onClose={handleClose}
        ></DialogTitle>
        <DialogContent>
          <div className="frget-pass-content">
            <Typography variant="h5" component="h5">
              {" "}
              Forgot Password{" "}
            </Typography>

            <Box mb={1}>
              <label>Email</label>
            </Box>

            <TextField
              // className={classes.inputField}
              id="input-with-icon-textfield"
              fullWidth
              variant="outlined"
              placeholder="Email Id"
              size="small"
              name="emailId"
              value={email}
              onChange={handleChange}
              value={formik.values.emailId}
              onBlur={formik.handleBlur}
              className={
                formik.touched.emailId && formik.errors.emailId
                  ? "text-error"
                  : formik.touched.emailId && formik.values.emailId
                  ? "text-success"
                  : ""
              }
              error={
                formik.touched.emailId && formik.errors.emailId ? true : ""
              }
              onChange={(e) => {
                formik.touched.emailId = true;
                formik.handleChange(e);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={emailImage} alt="" />
                  </InputAdornment>
                ),
              }}
            />
            {formik.touched.emailId && formik.errors.emailId ? (
              <div className="error" style={{ color: "red" }}>
                *{formik.errors.emailId}
              </div>
            ) : null}
            {/* {error ? (
                              <div className="error" style={{color:"red"}}>
                                *{'Invalid Email Id'}
                              </div>
                            ) : null} */}
            <Grid item style={{ paddingTop: "20px" }}>
              {/* <Button variant="contained" onClick={handleSubmit} color="primary" fullWidth> Signin </Button> */}
              <Button
                variant="contained"
                onClick={submitHandle}
                color="primary"
                fullWidth
              >
                {" "}
                Reset Password{" "}
              </Button>
            </Grid>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// className={classes.button} onClick={submitHandle}
