import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/action/index";
// import {ConfigWizard} from "./ConfigWizard";
// import SimpleBackdrop from '../../loader/loading'
import axios from "../../../axios";
import { openConfigWindow } from "./configWindows";
import SolutionAlert from "../../Alert/solution";
import Button from "@material-ui/core/Button";
import add from "../../../assets/images/add.png";
import viewReport from "../../../assets/images/view-report.png";
import { useHistory } from "react-router-dom";

const ListOfSolution = () => {
  const [list, setList] = useState([]);
  const [error, setError] = useState({ status: "", msg: "" });
  const dispatch = useDispatch();
  const solutions = useSelector((state) => state.solution.solutionList);
  const history = useHistory();
  // console.log('history', history)
  const gotToSubMenu = (value) => {
    history.push(value);
  };

  useEffect(() => {
    // alert('TEst')
    dispatch(actions.fetchAllSolutions(""));
    // axios.get('/api/me').then((data)=>console.log(data))
  }, []);

  useEffect(() => {
    //    console.log(solutions)
    if (solutions.length) {
      setList(solutions);
    }
    //    setList()
  }, [solutions]);

  const handleClick = (data) => {
    //alert('test')
    //    console.log(e.target.id)
    // console.log(data.id,data.name);
    // import { openConfigWindow } from

    //for URL creation for hubspot
    dispatch(actions.displayLoader());

    axios
      .post("/api/solutionInstances", {
        method: "post",
        data: data,
      })
      .then((data2) => {
        dispatch(actions.hideLoader());

        const configWindow = openConfigWindow();
        // console.log(data2.data);
        // setPopUrl(data2.data.AppURl)
        configWindow.location = data2.data.AppURl;
      })
      .catch((e) => {
        dispatch(actions.hideLoader());
        //  let err =error;
        console.log(e);
        let err = error;
        err.status = 400;
        err.msg = "you already have instance of this solution";
        setError({ ...err });
        // console.log(e)
        // configWindow.close()
      });
  };

  // const createSolution = (e)=>{

  // }
  //solutions shown component
  let DisplayComp = list.map((data) => {
    //  console.log(data.node)
    return (
      //new
      <Grid container spacing={3} className="migration__main__inner">
        {/* first entry */}
        <Grid item xs={12} sm={12}>
          <Paper id={"kol"}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={3} md={5} className="">
                <Grid item className="migration__id__num">
                  <Typography
                    variant="p"
                    component="p"
                    style={{ marginBottom: "7px" }}
                  >
                    {data.node.title}
                  </Typography>
                  <span>{data.node.id}</span>
                </Grid>
              </Grid>

              <Grid
                item
                xs={12}
                sm={9}
                md={7}
                className="migration__list__right"
              >
                <Grid container>
                  <Grid item>
                    <Typography
                      variant="p"
                      component="p"
                      className="status__row"
                    >
                      {/* <span className="migration__status status__completed">
                            COMPLETED
                          </span> */}
                      <span className="migration__date">{data.node.id}</span>
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    className="migration__reports"
                    style={{ width: "61%" }}
                  >
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<img src={viewReport} alt="Use Solutions" />}
                      onClick={(e) =>
                        handleClick({ id: data.node.id, name: data.node.title })
                      }
                    >
                      Use Solutions
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      //end new
    );
  });
  return (
    <div>
      {/* first row  */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={5}>
          <Typography variant="h1" component="h1">
            Solutions List
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
            startIcon={<img src={add} alt="Personalized migration" />}
            onClick={(e) => gotToSubMenu(`/instance`)}
          >
            Start new migration
          </Button>
        </Grid>
      </Grid>
      {/* end  first row  */}

      <Grid container spacing={3} className="">
        <SolutionAlert error={error} />

        {DisplayComp}
      </Grid>
    </div>
  );
};

export default ListOfSolution;
