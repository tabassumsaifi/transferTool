import React, { useEffect, useState } from "react";
// import swal from 'sweetalert';

import axios from "../../../axios";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/action/index";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import StickyHeadTable from './table';
import SolutionAlert from "../../Alert/solution";
import { openConfigWindow } from "./configWindows";
import {ConfigWizard} from './ConfigWizard'
// import AsweetAlert from './sweetAlert';
import SwtAlert from "./alert";
import SimpleBackdrop from "../../../loader/loading";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import add from "../../../assets/images/add.png";
import viewReport from "../../../assets/images/view-report.png";
import editReport from "../../../assets/images/edit.png";
import salesForce from "../../../assets/images/sales-force.png";
import rightArrow from "../../../assets/images/right-arrow.png";
import hubSpot from "../../../assets/images/hub-spot.png";
import { useHistory } from "react-router-dom";
import CommonAlert from "../../Alert/commonAlert";
//switch
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { TramRounded } from "@material-ui/icons";

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 38,
    height: 22,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 20,
    height: 20,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid #fbfbfb`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});
//fetchSolutionInstances

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // height:"100vh"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "green", // theme.palette.text.secondary,
    borderColor: "Blue",
  },
}));
const SolutionInatance = (props) => {
  const classes = useStyles();
  const [flag, setFlag] = useState(false);
  const loader = useSelector((state) => state.loader.loader);
  const [instancesList, setInstancesList] = useState([]);
  const instances = useSelector((state) => state.solution.instances);
  const status = useSelector((state) => state.solution.status);
// configWizardSrc: undefined,
const [configWizardSrc, setConfigWizardSrc] = useState(undefined);
  //config values
  // const configValue = useSelector((state) => state.solution.instances.configValues);

  const [configVal, setConfigVal] = useState([]);
  //configure instance
  const configureInstanceStatus = useSelector(
    (state) => state.solution.configureInstance
  );
  console.log("..", props);
  const history = useHistory();
  console.log("history", history);
  const gotToSubMenu = (value) => {
    history.push(value);
  };

  console.log("configure Status", configureInstanceStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchSolutionInstances(""));
  }, []);

  useEffect(() => {
    if (instances) {
      // console.log(instances.solutionInstances.edges)
      // setInstancesList(instances?.solutionInstances?.edges || []);
      setInstancesList(instances || []);
    }
  }, [instances]);

  useEffect(() => {
    instancesList.forEach((instance) => {
      let upGradeFlag = instance.solutionVersionFlags.requiresSystemInputToUpdateVersion;

      //console.log('all solution is', instance.solutionId)
      //console.log('flag', instance.solutionVersionFlags.requiresSystemInputToUpdateVersion)

      if (upGradeFlag === true) {
        axios("api/solutionInstance/upgrade", {
          method: "PATCH",
          params: {
            solutionId: instance.solutionId,
            solutionInstanceId: instance.instanceId,
          },
        })
          .then(function (response) {
            console.log("upgrade response", response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });
  });

  const handleClick = (data) => {
    dispatch(actions.deleteSolutionInstances(data.id));
  };
  //switch
  const [state, setState] = React.useState({ checkedB: true });

  const handleChange = (event, data) => {
    //setState({ ...state, [event.target.name]: event.target.checked });
    //alert(JSON.stringify(event.target.name));
    //alert(JSON.stringify(data))
    dispatch(actions.changeStatusSolutionInstances(data));
  };
  const handleStatus = (data) => {
    dispatch(actions.changeStatusSolutionInstances(data));
  };

  const hadndleConfige = (id, enableStatus) => {
    console.log(id);
    console.log("test", enableStatus)
    dispatch(actions.displayLoader());
    if(enableStatus===true){
      dispatch(actions.hideLoader({status:"400", msg:"Please Disable the Instance and then Configure again", alertStatus:true}));
    }
    else{
      dispatch(actions.displayLoader());
      axios(`api/solutionInstance/config?solutionInstanceId=${id}`, {
        method: "PATCH",
      })
        .then((data) => {
          const configWindow = openConfigWindow({
            action: actions,
            disp: (actions, msg, status, alertStatus) =>
              dispatch(
                actions.hideLoader({
                  status: status,
                  msg: msg,
                  alertStatus: alertStatus,
                })
              ),
            fetchConfigValues: () => {
              //dispatch(actions.setConfigInstance(mydata));
              dispatch(actions.fetchSolutionInstances(""));
              // console.log("confid data", mydata);
            },
          });
          dispatch(actions.hideLoader());
          console.log(data);
          configWindow.location = data.data.AppURl;
        })
        .catch((e) => {
          dispatch(actions.hideLoader());
          //   configWindow.close()
          console.log(e);
        });
    }

    
  };

  useEffect(() => {
    // Optionally the request above could also be done as
    axios
      .get("api/modifiedSolutionInstances", {})
      .then(function (response) {
        console.log("instances response", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log("instance list", instancesList);

  // const handleClickTest = () =>{

  //   alert("hueee")
  //   const configWindow = ConfigWizard()

  // }
  //in iframe code
  const openWizard = (id, openInIframe, addCustomValidation = false) => {
    console.log("data reccc", id, openInIframe)
    dispatch(actions.displayLoader());
      axios(`api/solutionInstance/config?solutionInstanceId=${id}`, {
        method: "PATCH",
      })
        .then((data) => {
          const url = data.data.AppURl;

          console.log("url", url)
          // if (!openInIframe) {
          //     const configWindow = openConfigWindow();
          //     configWindow.location = url;
          // } else {
          //     setConfigWizardSrc(url)
          // }
        })
        .catch((e) => {
          dispatch(actions.hideLoader());
          //   configWindow.close()
          console.log(e);
        });

};

  const onClickConfigureInIframe = (id) => {
    openWizard(id, true, false);
};

 const closeIframe = () => {
    this.setState({
        configWizardSrc: undefined
    })
};

console.log("configWizardSrc", configWizardSrc)
  let DisplayBlank = () => {
    if (instancesList.length == 0 && status == "200") {
      //dispatch(actions.displayLoader())
      return (
        <Grid item xs={12} sm={12}>
          <Paper className="no__instance__design">
            <Typography>You dont have Instances right now.</Typography>
          </Paper>
        </Grid>
      );
    }
  };
  let DisplayComp = instancesList.map((data) => {
    //  console.log(data.node)
    // let base64String = btoa(String.fromCharCode(...new Uint8Array(data.fromImage)));
    // let base64StringTo = btoa(String.fromCharCode(...new Uint8Array(data.toImage)));
    console.log("config Values", data.configValues);
    return (
      //latest design

      <Grid item xs={12} sm={12} key={data.instanceId}>
        <Paper>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              item
              className="migration__list__left migration__intances__list"
            >
              <Grid container>
                <Grid item className="migration__id__num">
                  <Typography variant="p" component="p">
                    {data.name}
                  </Typography>
                  {/* <span>{data.node.id}</span> */}
                </Grid>
                <Grid item>
                  <Grid container>
                    <Grid item>
                      <img src={data.fromImgLink} crossOrigin="" />
                    </Grid>
                    <Grid item>
                      <img src={rightArrow} />
                    </Grid>
                    <Grid item>
                      <img src={data.toImgLink} crossOrigin="" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item className="migration__instance__enable">
              {data.configValues.length > 0 && (
                <FormControlLabel
                  control={
                    <IOSSwitch
                      checked={data.enabled}
                      onChange={(event) =>
                        handleChange(event, {
                          id: data.instanceId,
                          status: data.enabled,
                        })
                      }
                      name="checkedB"
                    />
                  }
                  label={data.enabled ? "Enable" : "Disabled"}
                />
              )}
              {data.solutionVersionFlags.requiresUserInputToUpdateVersion ===
              true ? (
                <div class="blink">
                  <span>Upgrade available</span>
                </div>
              ) : (
                ""
              )}
            </Grid>

            <Grid
              item
              className="migration__list__right migration__intances__right"
            >
              <Grid container>
                <Grid item className="migration__reports">
                  {/* <Button
                   variant="outlined"
                   color="primary"
                   startIcon={<img src={viewReport} />}
                   onClick={(e)=>handleClick({id:data.node.id,name:data.node.title})}

                 >
                   View Report
                 </Button> */}
                  <Button
                    variant="outlined"
                    color="primary"
                    //onClick={(e) => hadndleConfige(data.instanceId, data.enabled)}
                    onClick={(e) => onClickConfigureInIframe(data.instanceId, data.enabled)}
                    style={{ marginRight: "20px" }}
                    disabled={
                      data.configValues.length === 0 || data.configValues.authValues ||
                      data.solutionVersionFlags
                        .requiresUserInputToUpdateVersion === true
                        ? false
                        : true
                    }
                  >
                    {data.solutionVersionFlags
                      .requiresUserInputToUpdateVersion === true
                      ? "Edit instances"
                      : "Confige instances"}
                  </Button>
                  {/* <Button onClick={()=>handleClickTest()}>click me</Button> */}

                  <SwtAlert
                    variant="contained"
                    color="secondary"
                    btnText="Delete instance"
                    title="Are You Sure?"
                    message="Once deleted, you will not be able to recover this instances !"
                    data={{ id: data.instanceId, name: data.name }}
                    deleteConfirm={handleClick}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  });

  return (
    <div>
      {/* first row  */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={5}>
          <Typography variant="h1" component="h1">
            Migrations
          </Typography>
          <Typography variant="p" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet
            bibendum vestibulum vitae ultrices nulla.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          className="right-align start__personalize__sec"
        >
          <Button variant="outlined" color="primary">
            Personalized migration
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<img src={add} />}
            onClick={(e) => gotToSubMenu(`/new-migration`)}
          >
            Start new migration
          </Button>
        </Grid>
      </Grid>
      {/* end  first row  */}
      {/* <AsweetAlert /> */}
      <CommonAlert />
      {loader && <SimpleBackdrop />}
      <Grid container spacing={3} className="migration__main__inner">
        {DisplayBlank()}
        {DisplayComp}

        {/* {
        (instancesList.length) ? DisplayComp : DisplayBlank()
      }
       */}
      </Grid>
      {configWizardSrc && <ConfigWizard src={configWizardSrc} onClose={()=>closeIframe}/>}
    </div>
  );
};

export default SolutionInatance;
