import React, { useEffect, useState } from "react";
// import swal from 'sweetalert';
import axios from "../../../axios";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/action/index";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
// import StickyHeadTable from './table';
import { openConfigWindow } from "./configWindows";
//import ConfigWizard from './ConfigWizard'
// import AsweetAlert from './sweetAlert';
import SwtAlert from "./alert";
import SimpleBackdrop from "../../../loader/loading";
import Button from "@material-ui/core/Button";
import add from "../../../assets/images/add.png";
import rightArrow from "../../../assets/images/right-arrow.png";
import { useHistory } from "react-router-dom";
import CommonAlert from "../../Alert/commonAlert";
//switch
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 38,
    height: 22,
    padding: 0,
    marginRight: 8,
    marginLeft: 8,
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

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     // height:"100vh"
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: "green", // theme.palette.text.secondary,
//     borderColor: "Blue",
//   },
// }));
const SolutionInatance = (props) => {
  const loader = useSelector((state) => state.loader.loader);
  const [instancesList, setInstancesList] = useState([]);
  const instances = useSelector((state) => state.solution.instances);
  const status = useSelector((state) => state.solution.status);

  // configue button visibility

  // const [configVisibilityStatus, setConfigVisibilityStatus] = useState(true);
  //config values
  // const configValue = useSelector((state) => state.solution.instances.configValues);
  // const [configVal, setConfigVal] = useState([]);
  //configure instance
  // const configureInstanceStatus = useSelector(
  //   (state) => state.solution.configureInstance
  // );
  //console.log("..", props);
  const history = useHistory();
  //console.log("history", history);
  const gotToSubMenu = (value) => {
    history.push(value);
  };

  //console.log("configure Status", configureInstanceStatus);
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
      let upGradeFlag =
        instance.solutionVersionFlags.requiresSystemInputToUpdateVersion;

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
            //console.log("upgrade response", response);
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
  // const [state, setState] = React.useState({ checkedB: true });
  const handleChange = (event, data) => {
    //setState({ ...state, [event.target.name]: event.target.checked });
    //alert(JSON.stringify(event.target.name));
    //alert(JSON.stringify(data))
    dispatch(actions.changeStatusSolutionInstances(data));
  };
  // const handleStatus = (data) => {
  //   dispatch(actions.changeStatusSolutionInstances(data));
  // };

  const hadndleConfige = (id, enableStatus) => {
    //console.log(id);
    //console.log("test", enableStatus);
    dispatch(actions.displayLoader());
    if (enableStatus === true) {
      dispatch(
        actions.hideLoader({
          status: "400",
          msg: "Please Disable the Instance and then Configure again",
          alertStatus: true,
        })
      );
    } else {
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
          //console.log(data);
          configWindow.location = data.data.AppURl;
        })
        .catch((e) => {
          dispatch(actions.hideLoader());
          //   configWindow.close()
          console.log(e);
        });
    }
  };

  //Edit Instance

  const hadndleEdit = (id, enableStatus) => {
    //console.log("my edits", id, enableStatus);
    gotToSubMenu(`edit-instance/${id}`);
    dispatch(actions.resetEditInstanceInitials());
    dispatch(actions.resetPaymentFlags());
  };

  // useEffect(() => {
  //   // Optionally the request above could also be done as
  //   axios
  //     .get("api/modifiedSolutionInstances", {})
  //     .then(function (response) {
  //       console.log("instances response", response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  //console.log("instance list", instancesList);

  // const handleClickTest = () =>{

  //   alert("hueee")
  //   const configWindow = ConfigWizard()

  // }

  //migration status flag
  const migration_Status_flag = (status) => status ? 'completed' : 'incompleted' 
  
  const otherfunction = (data) => {
    return data.enabled ? (
      <Button
        variant="outlined"
        color="primary"
        // startIcon={<EditIcon />}
        onClick={(e) =>
          hadndleEdit(data.instanceId, data.enabled)
        }
        style={{ marginRight: "20px" }}
        className="instance__delete__btn"
      >
        Edit
      </Button>
    ) : (
      ""
    )
  
  }

  let DisplayBlank = () => {
    if (instancesList.length === 0 && status === "200") {
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
    //console.log("config Values", data.configValues);
    return (
      //latest design

      <Grid item xs={12} sm={12} key={data.instanceId}>
        <Paper>
          <Grid container>
            <Grid item className="" md={5} sm={5} xs={12}>
              <div className="migration__id__num migration__instance__num">
                <Typography component="p">
                  {data.name}
                </Typography>
                {/* <span>{data.node.id}</span> */}
              </div>
            </Grid>
            <Grid item className="" md={5} sm={5} xs={12}>
              {((data.configValues.length !== 0 || data.authValues.length !== 0) && data.enabled !== false) ? 
              <div className="mingration__status__wrapper">
              <Typography component="p" className={`mingration__status__flag mingration__status__${migration_Status_flag(data.finalMigrationComplete)}`}>
                  {/* {migration_Status_flag} */}
                  {migration_Status_flag(data.finalMigrationComplete)}
                </Typography>
                <span className="instance__date">{data.date}</span>
              </div>
               : ''}
            </Grid>
            <Grid item md={2} sm={2} xs={12} className="instance__enable__wrapper">
              <div className="migration__instance__enable">
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
              </div>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            // justifyContent="center"
            alignItems="center"
            style={{ marginTop: "15px" }}
            className="migration__instance__list__main"
          >
            <Grid
            item
              
              className="responsive__instance__list migration_instance_first_block"
            >
              <Grid container className="instance__list__block">
                <Grid item>
                  <img src={data.fromImgLink} crossOrigin="" alt="From" />
                </Grid>
                <Grid item>
                  <img src={rightArrow} alt="arrow" />
                </Grid>
                <Grid item>
                  <img src={data.toImgLink} crossOrigin="" alt="To" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item className="migration_instance_second_block">
              <Grid container>
                <Grid item xs={12}  className="">
                  {/* <Button
                   variant="outlined"
                   color="primary"
                   startIcon={<img src={viewReport} />}
                   onClick={(e)=>handleClick({id:data.node.id,name:data.node.title})}

                 >
                   View Report
                 </Button> */}
                  {/* {data.enabled === false ?   */}

                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={(e) =>
                      hadndleConfige(data.instanceId, data.enabled)
                    }
                    style={{ marginRight: "20px", width: "170px" }}
                    disabled={
                      data.configValues.length === 0 ||
                      // data.authValues.length === 0 ||
                      data.solutionVersionFlags
                        .requiresUserInputToUpdateVersion === true
                        ? false
                        : true
                    }
                  >
                    Config instance
                  </Button>
                 {data.finalMigrationComplete === true && data.enabled ? (
                         <Button
                         variant="outlined"
                         color="primary"
                         // startIcon={<EditIcon />}
                         onClick={(e) =>                           
                           gotToSubMenu(`/migration-report/${data.instanceId}`)
                           //hadndleEdit(data.instanceId, data.enabled)
                         }
                         style={{ marginRight: "20px" }}
                         className="instance__delete__btn"
                       >
                         View Report
                       </Button>
                 ) : otherfunction(data)}
                  
               

                  <SwtAlert
                    variant="contained"
                    color="secondary"
                    // startIcon={<DeleteIcon />}
                    btnText={`Delete`}
                    title="Are You Sure?"
                    message="Once deleted, you will not be able to recover this instances !"
                    data={{ id: data.instanceId, name: data.name }}
                    deleteConfirm={handleClick}
                    style={{ width: "100px" }}
                    className="swtAlert_btn"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  });
  //handle start migration
  const handleStartMigration = () => {
    gotToSubMenu(`/new-migration`);
    dispatch(actions.resetEditInstanceInitials());
  };
  //end
  return (
    <div>
      {/* first row  */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={5}>
          <Typography variant="h1" component="h1">
            Migrations
          </Typography>
          <Typography
             component="p"
            className="migration__desc__head"
          >
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
            startIcon={<img src={add} alt="add" />}
            onClick={
              () => handleStartMigration()
              // (e) => gotToSubMenu(`/new-migration`)
            }
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
    </div>
  );
};

export default SolutionInatance;
