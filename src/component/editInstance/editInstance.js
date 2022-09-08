import React from "react";
import "../style.css";
import Main from "../../common/layout/header";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import MatchUsers from "./segments/matchUsers/matchUsers";
import MapFields from "./segments/mapFields/mapFields";
import SelectObject from "./segments/selectObject/selectObject";
import RunSample from "./segments/runSample";
import StartMigration from "./segments/startMigration";
import { useHistory } from "react-router-dom";
//dispatch and selector
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function EditInstance({ match }) {
  const history = useHistory();
  function getSteps() {
    return [
      "Select Object",
      "Match Users",
      "Map Fields",
      "Run Sample",
      "Start Migration",
    ];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <SelectObject match={match.params.id} />;
      case 1:
        return (
          <MatchUsers match={match.params.id} instanceId={match.params.id} />
        );
      case 2:
        return <MapFields instanceId={match.params.id} />;
      case 3:
        return <RunSample instanceId={match.params.id} />;
      case 4:
        return <StartMigration instanceId={match.params.id} />;
    }
  }

  const activeStep = useSelector((state) => state.solution.activeStep);
  //console.log("activeStepValue", activeStep);

  const classes = useStyles();
  //const [activeStep, setActiveStep] = React.useState(activeStepValue);
  const steps = getSteps();

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <>
      <Main path={history.location.pathname} match={match.params.id}>
        <Stepper
          activeStep={activeStep}
          className={`edit__instance__steps__wrapper ${activeStep}`}
        >
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step
                key={label}
                {...stepProps}
                index={index}
                className={`edit__instance__steps ${
                  activeStep === index ? "active__highlighted" : ""
                }`}
              >
                <StepLabel key={label} {...labelProps}>
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              {/* <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
            

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div> */}
            </div>
          }
        </div>
      </Main>
    </>
  );
}

export default EditInstance;
