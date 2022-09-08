import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Card from '@material-ui/core/Card';
// import Paper from '@material-ui/core/Paper';

// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import InputLabel from '@material-ui/core/InputLabel';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
// import Button from '@material-ui/core/Button';
// import Container from '@material-ui/core/Container';
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import GitHubIcon from '@material-ui/icons/GitHub';
import { useFormik} from "formik";
import * as Yup from "yup";
import * as actions from "../../../../store/action/index";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import Grid from "@material-ui/core/Grid";
import LoginRegisterAlert from "../../../Alert/login";

const useStyles = makeStyles({
  root: {
    width: "50%",
    minHeight: "50vh",
    margin: "auto",
    marginTop: "10%",
    borderRadius: "10px",
    // alignItems:"center",
    //  direction:"column"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  inputField: {},
  button: {
    backgroundColor: "#80CB9E",
    "&:hover": {
      backgroundColor: "#95f1BA",
    },
    "&:active": {
      backgroundColor: "#5FAA7D",
    },
  },
});

let initialValues = {
  password: "",

  confirmpassword: "",
};

let initialTouched = {
  password: false,

  confirmpassword: false,
};

const PasswordReset = (props) => {
  const history = useHistory();

  const classes = useStyles();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.login.status);
  const passwordChangeStatus = useSelector(
    (state) => state.login.passwordChangeStatus
  );

  const formik = useFormik({
    initialValues: initialValues,
    initialTouched: initialTouched,
    enableReinitialize: true,
    validationSchema: Yup.object({
      password: Yup.string()
        .required("Password required")
        .min(6, "Minimum 6 character Password required"),

      confirmpassword: Yup.string()
        .required("Confirm password required")
        .test(
          "confirmpassword",
          "Confirm password same as password",
          function (values) {
            //   alert(formik.values.password)
            if (values && values !== formik.values.password) {
              return false;
            } else {
              return true;
            }
          }
        ),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(props))
      // alert(JSON.stringify(values))
      values.token = props.token;
      // dispatch(actions.fetchLoginStatus(true))
      dispatch(actions.homeLoginFlag());

      dispatch(actions.changeUserPassword(values));

      // dispatch(actions.registerHomePage(values))
    },
  });
  useEffect(() => {
    if (status === 200) {
      formik.resetForm(initialValues);
    }
  }, [status]);
  useEffect(() => {
    if (passwordChangeStatus) {
      //  alert('change')
      history.push("/");
    }
  }, [passwordChangeStatus]);

  const hadleSubmit = () => {
    formik.handleSubmit();
  };
  return (
    <>
      <Grid
        container
        direction="column"
        spacing={3}
        style={{ margin: "0px 40px 0px" }}
      >
        <LoginRegisterAlert />

        <Grid item>
          {/* <Box mx={6}> */}
          <Box mb={1}>
            <Typography>Password</Typography>
          </Box>
          {/* <InputLabel>  </InputLabel> */}
          <TextField
            type="password"
            // className={classes.margin}
            id="input-with-icon-textfield"
            fullWidth
            variant="outlined"
            placeholder="Password"
            size="small"
            name="password"
            value={formik.values.password}
            onChange={(e) => {
              formik.touched.password = true;
              formik.handleChange(e);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          {formik.touched.password && formik.errors.password ? (
            <div className="error" style={{ color: "red" }}>
              *{formik.errors.password}
            </div>
          ) : null}
        </Grid>

        <Grid item>
          {/* <Box mx={6}> */}
          <Box mb={1}>
            <Typography>Confirm Password</Typography>
          </Box>
          {/* <InputLabel>  </InputLabel> */}
          <TextField
            type="password"
            // className={classes.margin}
            id="input-with-icon-textfield"
            fullWidth
            variant="outlined"
            placeholder="Confirm Password"
            size="small"
            name="confirmpassword"
            value={formik.values.confirmpassword}
            onChange={(e) => {
              formik.touched.confirmpassword = true;
              formik.handleChange(e);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
            <div className="error" style={{ color: "red" }}>
              *{formik.errors.confirmpassword}
            </div>
          ) : null}
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            className={classes.button}
            onClick={hadleSubmit}
            color="primary"
            fullWidth
          >
            {" "}
            Confirm Password{" "}
          </Button>
        </Grid>
        {/* </Container> */}
        <Grid item></Grid>
      </Grid>

      <Grid
        container
        spacing={3}
        justify="center"
        style={{ margin: "0px 40px 0px" }}
      >
        {/* <Grid item xs={3} sm={3} >
                        <Button variant="outlined"  > <img src="./salesforce.svg" alt=""/> </Button>
                    </Grid>
                    <Grid item xs={3} sm={3}>
                        <Button variant="outlined" > <img src="./linkdin.svg" alt=""/></Button>
                    </Grid>
                    <Grid item xs={3} sm={3}>
                        <Button variant="outlined" ><img src="./google.svg" alt=""/></Button>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Button variant="outlined" ><img src="./facebook.svg" alt=""/></Button>
                    </Grid>
                    
                    <Grid item xs={6} sm={3}>
                    <Button variant="outlined" ><img src="./hubspot.svg" alt=""/></Button>
                    </Grid> */}
      </Grid>
    </>
  );
};

export default PasswordReset;
// export default PasswordReset

// const  =()=>{

//     return (
//         <h2>Please reset your password</h2>
//     )
// }

// export default PasswordReset
