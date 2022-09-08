import React, { useEffect, useState } from "react";
//main
import Main from "../../common/layout/header";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "../style.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/action/index";
//import { makeStyles } from "@material-ui/core/styles";
import axios from "../../axios";
import SimpleBackdrop from "../../loader/loading";
 import { downloadExcelData } from "./downloadExcel";
import MigrationTable from "./segments/migrationTable";
import MigrationDetails from "./segments/migrationDetails";

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

function MigrationReport({ match }) {
  // const classes = useStyles();
  const dispatch = useDispatch();
  const migrationData = useSelector((state) => state.solution?.migrationData);
  const loader = useSelector((state) => state?.loader.loader);
  const [migrationReport, setMigrationReport] = useState([]);
  const [migrationDetails, setMigrationDetails] = useState([]);
  const history = useHistory();
  //console.log("history", history);
  //   const gotToSubMenu = (value) => {
  //     history.push(value);
  //   };

  const instanceId = match.params.id;
  useEffect(() => {
    //fetching migration details top header data
    axios({
      method: "get",
      url: "/api/getMigrationDetails",
      params: { instanceId: instanceId },
    })
      .then((response) => {
        //console.log('response', response);
        setMigrationDetails(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    dispatch(actions.migrationReportData(instanceId));
  }, []);

  useEffect(() => {
    if (migrationData.length) {
      setMigrationReport(migrationData);
    }
  }, [migrationData]);

  const downloadTableSheet = () => {
    let filtered = [...migrationData];
    downloadExcelData(filtered);
    console.log(filtered);
  };

  //console.log("migrationReport", migrationReport);

  //console.log("match", match.params.id);
  //console.log('migrationDetails', migrationDetails)
  //const history = useHistory();
const gotToSubMenu = (value) => {
  history.push(value);
};

  return (
    <>
      <Main path={history.location.pathname} match={match.params.id}>
        {loader && <SimpleBackdrop />}
        {/* main instance details */}
        <MigrationDetails instanceId={instanceId} migrationDetails={migrationDetails} />
        {/* table section */}
        <Grid
          container
          style={{ padding: "0px 30px" }}
          className="migration__report__wrapper"
        >
          <Grid item xs={12} sm={12} md={12} 
          className="migration__report_reponsive yyyy"
          >
            <MigrationTable migrationReport={migrationReport} />
          </Grid>
          <Grid
            item
            sm={12}
            md={12}
            className="migration__report__footer"
            style={{ textAlign: "right" }}
          >
            <Button
              color="primary"
              variant="outlined"
              onClick={() => downloadTableSheet()}
            >
              Download report
            </Button>
            <Button color="primary" variant="contained"
            onClick={() => gotToSubMenu('/migration')}
            >
              Go to CRM Toolbox
            </Button>
          </Grid>
        </Grid>

        {/* <Navbar /> */}
      </Main>
    </>
  );
}

export default MigrationReport;
