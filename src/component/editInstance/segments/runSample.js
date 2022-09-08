import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import applause from "../../../assets/images/table/applause.png";
import ProgressBar from "../progressBar/progressBar";
//dispatch and selector
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/action/index";
import SimpleBackdrop from "../../../loader/loading";
// import Payment from '../../migrationPayment/payment'

function RunSample({ instanceId }) {
  const activeStep = useSelector((state) => state.solution?.activeStep);
  const userInfo = useSelector((state) => state.login?.loginDetails?.name);
  const stopMigrationStatus = useSelector(
    (state) => state.solution?.stopMigrationStatus
  );
  const loader = useSelector((state) => state.loader?.loader);
  const [completed, setCompleted] = useState(10);
  const migrationStatus = useSelector(state=> state.solution?.demoMigrationData)
  const history = useHistory();
  //console.log("history", history);
  const gotToSubMenu = (value) => {
    history.push(value);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCompleted((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 10
      );
    }, 1000);

    if (migrationStatus===true) {
      //alert(migrationStatus)
      setCompleted(100);
      clearInterval(timer);
      
    }

    return () => {
      clearInterval(timer);
    };
  }, [migrationStatus]);

  //console.log("completed", completed);

  const dispatch = useDispatch();
  // const handleBack = () => {
  //   // setActiveStep((prevActiveStep) => prevActiveStep - 1);
  //   // alert(JSON.stringify(activeStep))
  //   dispatch(actions.resetDemoMigrationStatus());
  //   dispatch(actions.setEditInstanceActiveStep(activeStep - 1));
  // };
  useEffect(() => {
    if (stopMigrationStatus) {
      gotToSubMenu(`/migration`);
    }
  }, [stopMigrationStatus]);
  const handleStopMigration = () => {
    dispatch(
      actions.changeStatusSolutionInstances({
        id: instanceId,
        status: true,
      })
    );
  };
  //console.log(userInfo, 'userInfo')
  const handlDetails = () => {
    //gotToSubMenu(`/migration-report`);
    gotToSubMenu(`/migration-report/${instanceId}`)
  };
  const handlePayment = () =>{
    gotToSubMenu(`/migration-payment/${instanceId}`)
  }
  return (
    <>
      {loader && <SimpleBackdrop />}
      <Grid container style={{padding:"0px 20px"}}>
        <Grid item xs={12} sm={12} md={12} className="run__sample__migration">
          <div className="">
            <img src={applause} alt="applause" />
          </div>
          <Typography gutterBottom component="h3" variant="h3">
            Great job <span style={{textTransform:"capitalize"}}>{userInfo}</span>!
          </Typography>
          <Typography gutterBottom component="h4" variant="h4">
            Your sample migration is {completed !== 100? 'in-progress' : 'completed'}
          </Typography>
          <ProgressBar bgcolor="red" completed={completed} migrationStatus={migrationStatus} />

          <div className="run__migration__footer">
          {completed === 100 ? (
            <Button
              disabled={activeStep === 0}
              //onClick={handleBack}
              onClick={handlDetails}
              variant="outlined"
              color="primary"
              className="migration__details__btn"
            >
              Details
            </Button> ) : ''
}
            {completed !== 100 ? (
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleStopMigration}
                className="stop__migration__btn"
              >
                Stop migration
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="secondary"
                onClick={handlePayment}
              >
                Proceed to Payment
              </Button>
              // <Payment />
            )}

            {}
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default RunSample;
