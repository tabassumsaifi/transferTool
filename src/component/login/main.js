import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SimpleCard from "./component/form";
import "./main.css";
import SimpleBackdrop from "../../loader/loading";
import { useSelector } from "react-redux";

const styleFlexBox = {
  Conatiner: {
    display: "flex",
    margin: "0px",
    padding: "0px",
    flexWrap: "wrap",
    flexFlow: "row nowrap",

    border: "1px solid block",
    height: "100vh",
  },
  box1: {
    flex: "2",
    heigth: "100%",
    //    backgroundColor:"#fff",
    //    backgroundSize: "cover",
    // //    backgroundImage:`url("./img.jpg")`,
    //    justifyContent:"center"

    // position: "absolute",
    // width: "450px",
    // height: "795px",
    // left: "calc(50% - 450px/2 - 495px)",
    // top: "calc(50% - 795px/2)",

    background: "linear-gradient(180deg, #80CB9E 0%, #589BD9 100%)",
  },
  box2: {
    flex: "5",
    heigth: "100%",
    backgroundColor: "#E5E5E5",
    filter: "drop-shadow(0px 4px 40px rgba(52, 52, 52, 0.08))",
  },
  polygon: {
    position: "absolute",
    width: "431px",
    height: "364px",
    left: "206px",
    top: "-71px",

    /* primary/green */

    background: "#80CB9E",
    transform: "rotate(90deg)",
  },
};

const HomeLoginPage = () => {
  const loginStatus = useSelector((state) => state.login.loginStatus);

  return loginStatus ? (
    <SimpleBackdrop />
  ) : (
    <div style={styleFlexBox.Conatiner}>
      <div style={styleFlexBox.box1}>
        {/* <img src="./img.jpg" /> */}
        <div className={styleFlexBox.polygon}>
          <Typography
            component="div"
            align="center"
            color="initial"
            variant="h4"
            component="h2"
            gutterBottom
          >
            <Box m={5}> Migration Tools</Box>
          </Typography>
          <Typography component="div" variant="caption" align="center">
            by Ids <b></b>
          </Typography>
        </div>
        <div>
          <Typography
            component="div"
            align="left"
            color="initial"
            variant="p"
            component="h3"
            gutterBottom
          >
            <Box m={10}>
              The Fastest and esiast way to migrate your CRM data
            </Box>
          </Typography>
        </div>
      </div>
      <div>
        <SimpleCard />
      </div>
    </div>
  );
};

export default HomeLoginPage;
