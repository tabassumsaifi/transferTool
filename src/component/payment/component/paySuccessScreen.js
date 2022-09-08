import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import * as actions from "../../../store/action/index";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const PaySuccessPage = ({ instanceId, paymentFail, paymentStatus }) => {
  const selsectedObjectList = useSelector(
    (state) => state.payment?.migrationObjectList
  );
  const startMigrationStatus = useSelector(
    (state) => state.solution?.startMigrationStatus
  );
  // const mapLoader = useSelector((state) => state.mapLoader?.loader);
  const [selsectedObjects, setSelsectedObjects] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const gotToSubMenu = (value) => {
    history.push(value);
  };
  useEffect(() => {
    dispatch(actions.fetchMigrationObjectList(instanceId));
  }, []);
  useEffect(() => {
    if (selsectedObjectList) {
      setSelsectedObjects(selsectedObjectList);
    }
  }, [selsectedObjectList]);

  const handleRetry = () => {
    dispatch(actions.resetPaymentFailFlags());
  };
  const handleToDashBoard = () => {
    gotToSubMenu("/migration");
    dispatch(actions.resetPaymentFailFlags());
  };

  console.log("selsected Objects", selsectedObjects);

  const handleStartMigration = () => {
    // alert("hieee")
    let obj = {
      instance: instanceId,
      object: selsectedObjects,
      migrationType: "final",
    };
    console.log(obj);
    dispatch(actions.startMigration(obj));
  };
  useEffect(() => {
    if (startMigrationStatus) {
      setTimeout(() => {
        gotToSubMenu("/migration");
      }, 5000);
    }
  }, [startMigrationStatus]);

  return (
    <>
      <Grid
        container
        className="select__object__details select__object__report payment__success__wrapper"
        style={{ justifyContent: "center" }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          className=""
          style={{ textAlign: "center" }}
        >
          <div>
            {/* <img src={paymentSuccess} alt="payment success check" className="marTop__cls" /> */}
            {paymentStatus ? (
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 130.2 130.2"
              >
                <circle
                  class="path circle"
                  fill="none"
                  stroke="#73AF55"
                  stroke-width="6"
                  stroke-miterlimit="10"
                  cx="65.1"
                  cy="65.1"
                  r="62.1"
                />
                <polyline
                  class="path check"
                  fill="none"
                  stroke="#73AF55"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  points="100.2,40.2 51.5,88.8 29.8,67.5 "
                />
              </svg>
            ) : (
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 130.2 130.2"
              >
                <circle
                  class="path circle"
                  fill="none"
                  stroke="#D06079"
                  stroke-width="6"
                  stroke-miterlimit="10"
                  cx="65.1"
                  cy="65.1"
                  r="62.1"
                />
                <line
                  class="path line"
                  fill="none"
                  stroke="#D06079"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  x1="34.4"
                  y1="37.9"
                  x2="95.8"
                  y2="92.3"
                />
                <line
                  class="path line"
                  fill="none"
                  stroke="#D06079"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  x1="95.8"
                  y1="38"
                  x2="34.4"
                  y2="92.2"
                />
              </svg>
            )}

            {/* <svg
              class="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                class="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                class="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg> */}
          </div>
          <Typography variant="h2" component="h2">
            Payment {paymentStatus ? "successfull" : "Failed"}
          </Typography>
          <Typography variant="p" component="p" className="migration__id">
            Migration id: <span>{`${instanceId.slice(-8)}`}</span>
          </Typography>
          <Typography variant="p" component="p" className="marTop__cls">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </Typography>
          {paymentStatus ? (
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleStartMigration}
              style={{ marginTop: "40px" }}
            >
              {" "}
              Start Migration
            </Button>
          ) : (
            <>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleToDashBoard}
                style={{ marginTop: "40px" }}
              >
                {" "}
                Go to Migration List
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleRetry}
                style={{ marginTop: "40px", marginLeft: "20px" }}
              >
                {" "}
                Retry Payment
              </Button>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default PaySuccessPage;
