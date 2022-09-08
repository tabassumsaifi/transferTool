import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./main.css";
import SimpleCard from "./component/form";
import SimpleBackdrop from "../../loader/loading";
import loginWhite from "../../assets/images/login/login-white.png";
import loginFrame from "../../assets/images/login/login-frame.png";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    heigh: "100vh",
  },
  right: {
    backgroundColor: "#F3F3F3",
  },
}));

export default function CenteredGrid() {
  const history = useHistory();

  const classes = useStyles();
  const loader = useSelector((state) => state.login.loader);
  const loginStatus = useSelector((state) => state.login.loginStatus);

  // const dispacth = useDispatch()

  useEffect(() => {
    // alert(loginStatus)\
    setTimeout(() => {
      if (loginStatus) {
        history.push("toredirect");
      }
    }, 1000);
  }, [loginStatus]);

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} lg={4} md={4}>
          <div className="main-login-wrapper">
            <div className="main-migration-wrap">
              <img src={loginWhite} alt="Login" />
              <Typography component="p" className="migration-sub-head">
                The fastest and easiest way to migrate your CRM data.
              </Typography>
            </div>
            <div className="main-logo-bottom">
              <img src={loginFrame} alt="Login" />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={8} md={8} className="right-main-wrapper">
          {loader && <SimpleBackdrop />}
          <SimpleCard />
        </Grid>
      </Grid>
    </div>
  );
}
