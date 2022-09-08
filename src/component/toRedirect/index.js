import React, { useEffect } from "react";
//main
import "../style.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/action/index";
import SimpleBackdrop from "../../loader/loading";

function ToRedirect(props) {
  const instances = useSelector((state) => state?.solution);
  const data = useSelector((state) => state?.solution?.instances);
  const loader = useSelector((state) => state?.loader.loader);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(actions.setIntialState(""));
    dispatch(actions.fetchSolutionInstances(""));

    //setIntialState
  }, []);
  useEffect(() => {
    //alert(JSON.stringify(instances?.status=='200' && data?.solutionInstances?.edges.length))
    if (instances?.status === "200" && data?.length !== 0) {
      history.push("/migration");
    } else if (instances?.status !== "") {
      history.push("home");
    }
  }, [instances]);

  return <div>{loader && <SimpleBackdrop />}</div>;
}

export default ToRedirect;
