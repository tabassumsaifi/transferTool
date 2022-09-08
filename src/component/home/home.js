import React from "react";
//main
import Main from "../../common/layout/header";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import "../style.css";
import { useHistory } from "react-router-dom";

function HomePage(props) {
  const history = useHistory();
  //console.log("history", history.location.pathname);

  const gotToSubMenu = (value) => {
    history.push(value);
  };

return (
    <>
      <Main path={history.location.pathname}>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={12} md={12}>
            <div className="dashboard__wrapper">
              <Button
                variant="contained"
                color="primary"
                className="dashboard__start__button"
                onClick={(e) => gotToSubMenu(`/new-migration`)}
              >
                Start new migration
              </Button>
              <Typography component="p" className="start__crm">
                Click the button above to start a CRM migration
              </Typography>
              <Typography  component="p" className="request__quotes">
                or <Link to="/home">request custom migration quote</Link>
              </Typography>
              <Divider />
              <Typography  component="p" className="onboard__video">
                <Link to="/home">Need help?</Link> See our{" "}
                <Link to="/home">onboarding video</Link>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Main>
    </>
  );
}

export default HomePage;
