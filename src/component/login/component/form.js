import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../main.css";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Loginpage from "./login";
import RegisterPage from "./register";

export default function SimpleCard() {
  const [flag, setFlage] = useState(true);

  //const bull = <span className={classes.bullet}>•</span>;

  return (
    //   <Grid  container justify="center" alignItems="center" direction="column" style={{minHeight:"100vh"}} >

    <div className="login-outer-wrap">
      <div className="login-inner-wrap">
        <Card className="form-card">
          <CardContent>
            <Grid container justify="center" className="login-form-inner">
              <Typography component="div">
                {flag ? (
                  <>
                    <Box
                      fontWeight="fontWeightBold"
                      className="login-form-heading"
                    >
                      Sign in to your account
                    </Box>
                    <Box
                      fontWeight="fontWeightRegular"
                      textAlign="center"
                      className="not-a-member"
                    >
                      Not a Member ?{" "}
                      <span onClick={(e) => setFlage(!flag)}>
                        Sign up now
                      </span>
                    </Box>
                  </>
                ) : (
                  <>
                    <Box
                      fontWeight="fontWeightBold"
                      className="login-form-heading"
                    >
                      Register for a new account
                    </Box>
                    <Box
                      fontWeight="fontWeightRegular"
                      textAlign="center"
                      className="not-a-member"
                    >
                      Alreday have an account?{" "}
                      <span href="#" onClick={(e) => setFlage(!flag)}>
                        Login now
                      </span>
                    </Box>
                  </>
                )}
              </Typography>
              {/* <Box item >
                        <Typography  variant="h6" gutterBottom>
                           
                        </Typography>
                    </Box>
                    <br></br>
                      <Grid item>
                      <Typography variant="body2" gutterBottom>
                          <Box>
                       
                        </Box>
                    </Typography>
                      </Grid> */}

              {/* <Container fixed spacing="10"> */}

              {flag ? <Loginpage /> : <RegisterPage />}
            </Grid>
          </CardContent>
        </Card>
      </div>
    </div>
    //  </Grid>
  );
}
