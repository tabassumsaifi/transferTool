import React from "react";
//import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
// import InputLabel from '@material-ui/core/InputLabel';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Box from "@material-ui/core/Box";
import emailImage from "../../../assets/images/email.png";
import lockImage from "../../../assets/images/lock.png";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
// import GitHubIcon from '@material-ui/icons/GitHub';
import { useFormik } from "formik";
import * as Yup from "yup";
import * as actions from "../../../store/action/index";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import CommonAlert from "../../Alert/commonAlert";

// const useStyles = makeStyles({
//   root: {
//     width: '50%',
//     minHeight: '50vh',
//     margin: 'auto',
//     marginTop: '10%',
//     borderRadius: '10px',
//     // alignItems:"center",
//     //  direction:"column"
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
//   inputField: {},
//   button: {
//     backgroundColor: '#80CB9E',
//     '&:hover': {
//       backgroundColor: '#95f1BA',
//     },
//     '&:active': {
//       backgroundColor: '#5FAA7D',
//     },
//   },
// });

let initialValues = {
  emailId: "",
  password: "",
  name: "",
  confirmpassword: "",
};

// let initialTouched = {
//   emailid: false,
//   password: false,
//   name: false,
//   confirmpassword: false,
// };

const RegisterPage = () => {
  //const classes = useStyles();
  const dispatch = useDispatch();
  //const status = useSelector((state) => state.login.status);

  const formik = useFormik({
    initialValues: initialValues,
    //initialTouched: initialTouched,
    enableReinitialize: true,
    validationSchema: Yup.object({
      emailId: Yup.string()
        .required("Email id required")
        .matches(
          /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
          "Please enter valid email address"
        ),
      password: Yup.string()
        .required("Password required")
        .min(6, "Minimum 6 character Password required"),
      name: Yup.string()
        .required("Name is required")
        .min(5, "Minimum length 5 chararcter"),
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
      // alert(JSON.stringify(values))
      dispatch(actions.homeRegistrationFlag());
      dispatch(actions.registerHomePage(values));
      formik.resetForm();
    },
  });
  // useEffect(() => {
  //   formik.resetForm();
  // }, []);
  // useEffect(() => {
  //   if (status == 200) {
  //     formik.resetForm(initialValues);
  //     //formik.resetForm();
  //     formik.setTouched(initialTouched);
  //   }
  // }, [status]);
  // useEffect(() => {
  //   if (status == 400) {
  //     formik.resetForm(initialValues);
  //     //formik.resetForm();
  //     formik.setTouched(initialTouched);
  //   }
  // }, [status]);

  const hadleSubmit = () => {
    formik.handleSubmit();
  };
  return (
    <>
      <Grid
        container
        direction="column"
        spacing={3}
        style={{ marginTop: "5px" }}
      >
        {/* <LoginRegisterAlert /> */}
        <CommonAlert />
        <Grid item>
          <Box mb={1}>
            <label>Name</label>
          </Box>

          <TextField
            id="input-with-icon-textfield"
            fullWidth
            variant="outlined"
            placeholder="Name"
            size="small"
            name="name"
            value={formik.values.name}
            onBlur={formik.handleBlur}
            className={
              formik.touched.name && formik.errors.name
                ? "text-error"
                : formik.touched.name && formik.values.name
                ? "text-success"
                : ""
            }
            error={formik.touched.name && formik.errors.name ? true : ""}
            onChange={(e) => {
              formik.touched.name = true;
              //formik.touched.name && formik.errors.name = true;
              formik.handleChange(e);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          {formik.touched.name && formik.errors.name ? (
            <div className="error" style={{ color: "red" }}>
              *{formik.errors.name}
            </div>
          ) : null}
        </Grid>

        <Grid item>
          <Box mb={1}>
            <label>Email Id</label>
          </Box>

          <TextField
            // className={classes.inputField}
            id="input-with-icon-textfield"
            fullWidth
            variant="outlined"
            placeholder="Email Id"
            size="small"
            name="emailId"
            value={formik.values.emailId}
            onBlur={formik.handleBlur}
            className={
              formik.touched.emailId && formik.errors.emailId
                ? "text-error"
                : formik.touched.emailId && formik.values.emailId
                ? "text-success"
                : ""
            }
            error={formik.touched.emailId && formik.errors.emailId ? true : ""}
            onChange={(e) => {
              formik.touched.emailId = true;
              formik.handleChange(e);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={emailImage} alt=" " />
                </InputAdornment>
              ),
            }}
          />

          {formik.touched.emailId && formik.errors.emailId ? (
            <div className="error" style={{ color: "red" }}>
              *{formik.errors.emailId}
            </div>
          ) : null}
        </Grid>

        <Grid item>
          {/* <Box mx={6}> */}
          <Box mb={1}>
            <label> Password</label>
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
            className={
              formik.touched.password && formik.errors.password
                ? "text-error"
                : formik.touched.password && formik.values.password
                ? "text-success"
                : ""
            }
            error={
              formik.touched.password && formik.errors.password ? true : ""
            }
            onChange={(e) => {
              formik.touched.password = true;
              formik.handleChange(e);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={lockImage} alt="" />
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
            <label>Confirm Password</label>
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
            className={
              formik.touched.confirmpassword && formik.errors.confirmpassword
                ? "text-error"
                : formik.touched.confirmpassword &&
                  formik.values.confirmpassword
                ? "text-success"
                : ""
            }
            error={
              formik.touched.confirmpassword && formik.errors.confirmpassword
                ? true
                : ""
            }
            onChange={(e) => {
              formik.touched.confirmpassword = true;
              formik.handleChange(e);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={lockImage} alt="" />
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
            className="sign__in__btn"
            onClick={hadleSubmit}
            color="primary"
            fullWidth
          >
            {" "}
            Register{" "}
          </Button>
        </Grid>
        {/* </Container> */}
        <Grid item></Grid>
      </Grid>

      <Grid container spacing={3} justify="center">
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

export default RegisterPage;
