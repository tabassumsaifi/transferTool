import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/action/index";
import AuthLoader from "../loader/authLoader";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const loginStatus = useSelector((state) => state.login.loginStatus);
  const fetchStatus = useSelector((state) => state.loader.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!fetchStatus) {
      let timeInterval = setTimeout(() => {
        dispatch(actions.fetchLoginStatus());
        //alert("login status")
      }, 500);
      // if(!fetchStatus){

      //     alert(fetchStatus)

      // }

      return function () {
        clearInterval(timeInterval);
      };
    }
  }, [fetchStatus]);
//   useEffect(() => {
//     if(loginStatus){
//         alert("i am login")
//     }
//    }, [loginStatus])

  if (!fetchStatus) {
    // alert(JSON.stringify(rest)) fetchStatus
    // dispatch(actions.fetchLoginStatus())
    return (
      //<Route {...rest} component={AuthLoader} />
      <Route {...rest}>
        <AuthLoader msg="Please wait checking for authentication" />
      </Route>
    );
  } else {
    return (
      <Route
        {...rest}
        render={(props) =>
          loginStatus ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
              }}
            /> 
            // <h1>i am prmnn</h1>
          )
        }
      />
    );
  }
};

export default ProtectedRoute;
