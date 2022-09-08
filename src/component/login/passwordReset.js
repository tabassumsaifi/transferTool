import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import ExpiredLink from './component/forgot/linkExpired'
// import PasswordResetInput from './component/forgot/passwordReset'
import SimpleBackdrop from "../../loader/loading";
// import React, { useEffect, useState } from 'react';
//import axios from '../../axios';
import "./main.css";
import mainlog from "../../assets/images/mainlogo.png";
// import SimpleBackdrop from '../../loader/loading'
import CardContent from "./component/forgot/cardContent";

const useStyles = makeStyles((theme) => ({
  root: {
    heigh: "100vh",
  },
  right: {
    backgroundColor: "#F3F3F3",
  },
}));

export default function PasswordReset(props) {
  const history = useHistory();
  // const [status, setStatus] = useState(false);
  //   const [msg, setMsg] = useState("")
  //   const [token, setToken] = useState("")
  //const dispatch = useDispatch()

  // const loader = useSelector((state) => state.login.loader);

  const classes = useStyles();
  const loader = useSelector((state) => state.login.loader);
  const loginStatus = useSelector((state) => state.login.loginStatus);
  //const dispacth = useDispatch()

  // useEffect(() => {
  //     dispatch(actions.homeLoginFlag())

  //     let params = queryString.parse(props.location.search)

  //     let token = params.token;
  //     axios.get(`/api/link${props.location.search}`)
  //         .then(data => {
  //             setToken(token)
  //             setStatus(true)
  //             console.log(data)
  //             dispatch(actions.homeLoginFlag(false))
  //         })
  //         .catch((e) => {
  //             setMsg("Page not found  404.... ")
  //             dispatch(actions.homeLoginFlag(false))
  //             console.log(e.message)
  //         })

  // }, [])

  useEffect(() => {
    // alert('test')
    // alert(loginStatus)\
    if (loginStatus) {
      history.push("home");
    }
  }, [loginStatus]);

  return (
    <div className={classes.root}>
      {loader && <SimpleBackdrop />}
      <Grid container spacing={0}>
        <Grid item xs={12} lg={4} md={4}>
          <div className="main-login-wrapper">
            <div className="main-migration-wrap">
              {/* <img  src={arrow} /> */}
              <h1>Migration tool</h1>
              <p className="by-logo">by</p>
              <p className="migration-sub-head">
                The fastest and easiest way to migrate your CRM data.
              </p>
            </div>
            <div className="main-logo-bottom">
              <img src={mainlog} alt=" " />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={8} md={8} className={classes.right}>
          {/* {loader ? <SimpleBackdrop /> :
                status ? (<PasswordResetInput />) : (<ExpiredLink msg={msg} />)
            } */}
          <CardContent token={props.location.search} />
        </Grid>
      </Grid>
    </div>
  );
}

// import R from 'react';
// import queryString from 'query-string';
// import React, { useEffect, useState } from 'react';
// import axios from '../../axios';
// import ExpiredLink from './component/linkExpired'
// import PasswordResetInput from './component/passwordReset'
// import SimpleBackdrop from '../../loader/loading'
// import { useSelector, useDispatch } from 'react-redux'

// import * as actions from "../../store/action/index"

// const PasswordReset = (props) => {

//     // console.log(props.location.search)
//     const [status, setStatus] = useState(false);
//     const [msg, setMsg] = useState("")
//     const [token, setToken] = useState("")
//     const dispatch = useDispatch()

//     const loader = useSelector((state) => state.login.loader);

//     useEffect(() => {
//         dispatch(actions.homeLoginFlag())

//         let params = queryString.parse(props.location.search)

//         let token = params.token;
//         axios.get(`/api/link${props.location.search}`)
//             .then(data => {
//                 setToken(token)
//                 setStatus(true)
//                 console.log(data)
//                 dispatch(actions.homeLoginFlag(false))
//             })
//             .catch((e) => {
//                 setMsg("Page not found  404.... ")
//                 dispatch(actions.homeLoginFlag(false))
//                 console.log(e.message)
//             })

//     }, [])

//     return (
//         <>
//             {loader ? <SimpleBackdrop /> :
//                 status ? (<PasswordResetInput />) : (<ExpiredLink msg={msg} />)
//             }
//         </>
//     )
// }

// export default PasswordReset
