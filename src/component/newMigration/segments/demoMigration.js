import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
//modal
import "../../style.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import viewReport from "../../../assets/images/view-report.png";
import rightArrow from "../../../assets/images/right-arrow.png";
//dispatch and selector
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/action/index";
import { useHistory } from "react-router-dom";
import axios from "../../../axios";
import CommonAlert from "../../Alert/commonAlert";
import BottomPart from "./bottomPart";
import { openConfigWindow } from "./configWindows";
import SimpleBackdrop from "../../../loader/loading";

const SolutionsList = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [list, setList] = useState([]);
  const loader = useSelector((state) => state.loader.loader);
  //const fromToObject = useSelector((state) => state.solution.selecedObject);
  const CRMSolutionList = useSelector(
    (state) => state.solution.CRMSolutionList
  );
  useEffect(() => {
    //    console.log(solutions)
    if (CRMSolutionList.length) {
      setList(CRMSolutionList);
    }
    //    setList()
  }, [CRMSolutionList]);

  const handleClick = (data) => {
    //alert(JSON.stringify(data))

    dispatch(actions.displayLoader());
    axios
      .post("/api/solutionInstances", {
        method: "post",
        data: data,
      })
      .then((data2) => {
        dispatch(actions.hideLoader());
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
          redirection: () => {
            history.push("/migration");
          },
          setTabValue: () => dispatch(actions.setSelectedTabValue(0)),
          migrationProgressBar: () =>
            dispatch(actions.newMigrationProgressBar(33.3)),
        });
        dispatch(actions.hideLoader());
        console.log(data2.data);
        // setPopUrl(data2.data.AppURl)
        configWindow.location = data2.data.AppURl;
        // setTimeout(() => {
        //   //history.push("/migration")
        //   dispatch(actions.setSelectedTabValue(0));
        //  }, 2000);
        dispatch(actions.resetSelectedCRMObject());
      })
      .catch((e) => {
        dispatch(
          actions.hideLoader({
            status: "400",
            msg: "You already have instance of this solution",
            alertStatus: true,
          })
        );
        setTimeout(() => {
          history.push("/migration");
          dispatch(actions.setSelectedTabValue(0));
          dispatch(actions.newMigrationProgressBar(33.3));
        }, 2000);
        dispatch(actions.resetSelectedCRMObject());

        console.log(e);
        // configWindow.close()
      });
  };

  console.log("solution lists", list);

  //test

  // let DisplayComp = async () => {
  //   return Promise.all(
  //     list.map((data) => {
  //         var imageObjectURL
  //         fetch(`${data.fromImgLink}`)
  //         .then(response => response.blob())
  //         .then(imageBlob => {
  //       // Then create a local URL for that image and print it
  //        imageObjectURL = URL.createObjectURL(imageBlob);
  //       console.log("URL----->>>",imageObjectURL);
  //       });

  //           return(
  //               <Grid item xs={12} sm={12}>
  //                 <Paper>
  //                   <Grid
  //                     container
  //                     direction="row"
  //                     justifyContent="center"
  //                     alignItems="center"
  //                   >
  //                     <Grid item xs={12} sm={3} md={3}>
  //                         <div className="migration__id__num" style={{textAlign:"center"}}>
  //                         <Typography variant="p" component="p">
  //                           {data.solutionName}
  //                               </Typography>
  //                               {/* <span>Number</span> */}
  //                         </div>

  //                     </Grid>

  //                     <Grid item xs={12} sm={6} md={6} style={{justifyContent:"center" }} className="solution__hide__mobile">
  //                     <Grid container className="solution__listing__wrap" style={{justifyContent:"center" }}>
  //                                       <Grid item>
  //                                               <img src= {`${imageObjectURL}`} />
  //                                       </Grid>
  //                                       <Grid item>
  //                                               <img src={rightArrow} />
  //                                       </Grid>
  //                                       <Grid item>
  //                                       <img src={data.toImgLink} />
  //                                       </Grid>
  //                                   </Grid>

  //                     </Grid>

  //                     <Grid item xs={12} sm={3} md={3}>
  //                     <div className="migration__reports" style={{textAlign:"center"}}>
  //                               <Button
  //                                 variant="outlined"
  //                                 color="primary"
  //                                 startIcon={<img src={viewReport} />}
  //                                 onClick={()=>handleClick({ id: data.solutionId, name: data.solutionName })}
  //                               >
  //                                 Use Solution
  //                               </Button>
  //                             </div>

  //                     </Grid>

  //                   </Grid>
  //                 </Paper>
  //               </Grid>

  //           )

  //           })
  //   )
  // }

  //end test

  let DisplayComp = list.map((data) => {
    //   var imageObjectURL
    //   fetch(`${data.fromImgLink}`)
    //   .then(response => response.blob())
    //   .then(imageBlob => {
    // // Then create a local URL for that image and print it
    //  imageObjectURL = URL.createObjectURL(imageBlob);
    // console.log("URL----->>>",imageObjectURL);
    // });

    return (
      <Grid item xs={12} sm={12}>
        <Paper>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={3} md={3}>
              <div
                className="migration__id__num"
                style={{ textAlign: "center" }}
              >
                <Typography variant="p" component="p">
                  {data.solutionName}
                </Typography>
                {/* <span>Number</span> */}
              </div>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              style={{ justifyContent: "center" }}
              className="solution__hide__mobile"
            >
              <Grid
                container
                className="solution__listing__wrap"
                style={{ justifyContent: "center" }}
              >
                <Grid item>
                  <img src={data.fromImgLink} crossorigin="" alt="" />
                </Grid>
                <Grid item>
                  <img src={rightArrow} alt="" />
                </Grid>
                <Grid item>
                  <img src={data.toImgLink} crossorigin="" alt="" />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={3} md={3}>
              <div
                className="migration__reports"
                style={{ textAlign: "center" }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<img src={viewReport} alt="" />}
                  onClick={() =>
                    handleClick({
                      id: data.solutionId,
                      name: data.solutionName,
                    })
                  }
                >
                  Use Solution
                </Button>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  });

  return (
    <>
      <Grid container spacing={3} className="migration__main__inner">
        {loader && <SimpleBackdrop />}
        {/* first entry */}
        <CommonAlert />

        {DisplayComp}
        <Grid container style={{ justifyContent: "center" }}>
          <div className="button_restart1">
            <Button
              color="primary"
              //className="button_restart1"
              onClick={() => {
                dispatch(actions.resetSelectedCRMObject());
                dispatch(actions.setSelectedTabValue(0));
                dispatch(actions.newMigrationProgressBar(33.3));
              }}
            >
              <ArrowBackIcon />
              Restart Migration
            </Button>
          </div>
        </Grid>

        <BottomPart />
      </Grid>
    </>
  );
};

export default SolutionsList;
