import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 5,
    borderRadius: 0,
  },
  colorPrimary: {
    backgroundColor: "#f3f3f3",
  },
  bar: {
    borderRadius: 5,
    // backgroundColor: 'yellow',
    background: "linear-gradient(270deg, #3300FF -109.33%, #50E8FD 90.79%)",
  },
}))(LinearProgress);

const MigrationProgressBar = () => {
  const value = useSelector((state) => state.solution?.progressBarInitialValue);

  return (
    <>
      <BorderLinearProgress variant="determinate" value={value} />
    </>
  );
};

export default MigrationProgressBar;
