import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
// import Button from '@material-ui/core/Button';
// import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import * as actions from '../../../store/action/index';
// import GitHubIcon from '@material-ui/icons/GitHub';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import CommonAlert from '../../Alert/commonAlert';
import emailImage from '../../../assets/images/email.png';
import lockImage from '../../../assets/images/lock.png';
import Grid from '@material-ui/core/Grid';
import ForGotPasswordPopup from './forgotpassword';
//for forget pass textbox
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import info from '../../../assets/images/info.png';
import Popover from '@material-ui/core/Popover';

const useStyles = makeStyles({
  popover: {
    pointerEvents: 'none',
  },
  root: {
    width: '50%',
    minHeight: '50vh',
    margin: 'auto',
    marginTop: '10%',
    borderRadius: '10px',
    // alignItems:"center",
    //  direction:"column"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  inputField: {},
});

let initialValues = {
  emailId: '',
  password: '',
};

// let initialTouched = {
//   emailId: false,
//   password: false,
// };

const Loginpage = () => {
  const classes = useStyles();
  // const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  //popover
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const openPop = Boolean(anchorEl);
  //end


  // const status = useSelector((state) => state.login.status);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initialValues,
    //initialTouched: initialTouched,
    enableReinitialize: true,
    validationSchema: Yup.object({
      emailId: Yup.string()
        .required('Email id required')
        .matches(
          /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, // /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
          'Please enter valid email address'
        ),
      password: Yup.string()
        .required('Password required')
        .min(6, 'Minimum 6 character Password required'),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values))
      dispatch(actions.homeLoginFlag());
      dispatch(actions.loginHomePage(values));
      formik.resetForm();


    },
  });
  // useEffect(()=>{
  //     dispatch(actions.homeLoginFlag())
  // },[])
  // useEffect(() => {
  //   formik.resetForm();
  // }, []);
  // useEffect(() => {
  //   if (status == 200) {
  //     formik.resetForm(initialValues);
  //     //formik.resetForm();
  //     //formik.setTouched(initialTouched);
  //     formik.setFieldTouched(initialTouched);
  //   }
  // }, [status]);
  // useEffect(() => {
  //   if (status == 400) {
  //     formik.resetForm(initialValues);
  //     //formik.resetForm();
  //     formik.setTouched(initialTouched);
  //   }
  // }, [status]);
  const submitHandle = () => {
    // console.log(formik.errors);
    formik.handleSubmit();
    //formik.resetForm();
  };


  const popOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    formik.resetForm();
    dispatch(actions.fetchLoginStatus());

  }, []);
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Grid
        container
        direction="column"
        spacing={3}
        style={{ marginTop: '35px' }}
      >
        <CommonAlert />
        {open && <ForGotPasswordPopup setOpen={setOpen} />}
        <Grid item>
          <Box mb={1}>
            <label>Email</label>
          </Box>
          {/* <InputLabel>         Email</InputLabel> */}
          <TextField
            // className={classes.inputField}
            id="input-with-icon-textfield-1"
            fullWidth
            variant="outlined"
            placeholder="Email Id"
            size="small"
            name="emailId"
            value={formik.values.emailId}
            //onBlur={formik.handleBlur}
            //onBlur={formik.handleBlur}

            className={
              formik.touched.emailId && formik.errors.emailId
                ? 'text-error'
                : formik.touched.emailId && formik.values.emailId
                  ? 'text-success'
                  : ''
            }
            error={formik.touched.emailId && formik.errors.emailId
              ? true : false}
            onChange={(e) => {
              formik.touched.emailId = true;
              formik.handleChange(e);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={emailImage} alt="email" />
                </InputAdornment>
              ),
            }}
          />
          {formik.touched.emailId && formik.errors.emailId ? (
            <div className="error">
              *{formik.errors.emailId}
            </div>
          ) : null}
          {/* </Box> */}
        </Grid>

        <Grid item>
          {/* <Box mx={6}> */}
          <Box mb={1}>
            <Grid container justify="space-between" style={{ position: 'relative' }}>
              <label>Password</label><img className="info__password" src={info} alt="password"
                aria-owns={openPop ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}

              />
              <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                  paper: classes.paper,
                }}
                open={openPop}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                // transformOrigin={{
                //   vertical: 'right',
                //   horizontal: 'left',
                // }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography className="password__text">Minimum six character required</Typography>
              </Popover>
              <Typography
                display="inline"
                align="right"
                className="login-forget-pass"
              >
                <a href="#" onClick={popOpen}>
                  {' '}
                  Forgot your Password?{' '}
                </a>
              </Typography>
            </Grid>
          </Box>
          <TextField
            // className={classes.margin}
            id="input-with-icon-textfield"
            fullWidth
            variant="outlined"
            placeholder="Password"
            size="small"
            name="password"
            type={values.showPassword ? 'text' : 'password'}
            value={formik.values.password}
            className={
              formik.touched.password && formik.errors.password
                ? 'text-error'
                : formik.touched.password && formik.values.password
                  ? 'text-success passowrd-success'
                  : ''
            }
            error={formik.touched.password && formik.errors.password
              ? true : false}
            onChange={(e) => {
              formik.touched.password = true;
              formik.handleChange(e);
            }}

            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    className="passwordIcon"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment position="start">
                  <img src={lockImage} alt="lock" />
                </InputAdornment>
              ),
            }}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">
              *{formik.errors.password}
            </div>
          ) : null}
          {/* </Box> */}
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            className="sign__in__btn"
            onClick={submitHandle}
            color="primary"
            fullWidth
          >
            {' '}
            Sign in{' '}
          </Button>
        </Grid>
        {/* </Container> */}
        <Grid item>
          {/* <Typography component="p" align="center" className="continue-with">
            Or Continue with
          </Typography> */}
        </Grid>
      </Grid>

      {/*             
                <Grid container className="continue-options-wrap" >
                    <Grid item>  
                    <Button variant="outlined" className="options-wrap"> <div ><img src={salesforce} alt=""/> </div></Button>                      
                        
                    </Grid>
                    <Grid item >
                    <Button variant="outlined" className="options-wrap" ><div ><img src={hubspot} alt=""/></div></Button>
                    
                    </Grid>
                    <Grid item >  
                    <Button variant="outlined" className="options-wrap" ><div ><img src={facebook} alt=""/></div></Button>                      
                        
                    </Grid>
                    <Grid item >
                    <Button variant="outlined" className="options-wrap" ><div ><img src={linkedin} alt=""/></div></Button>
                    
                    </Grid>
                    
                    <Grid item >
                    <Button variant="outlined" className="options-wrap" ><div ><img src={google} alt=""/></div></Button>
                    
                    </Grid>
                </Grid> */}
    </>
  );
};

export default Loginpage;
