import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
// import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import StripeCheckout from "react-stripe-checkout";
import * as actions from "../../../store/action/index";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import SimpleCard from './component/form'
// import './main.css'
import axios from "../../../axios.js"
import SimpleBackdrop from "../../../loader/loading";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import MigrationDetails from "./migrationDetails";
import PricingTable from "./pricingTable";
import PaySuccessPage from "./paySuccessScreen";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import PaymentAlert from "../../Alert/paymentAlert";


const Payment = ({ instanceId }) => {
  const paymentStatus = useSelector((state) => state.payment.paymentStatus);
  const paymentFail = useSelector((state) => state.payment.paymentFail);
  //const paymentStatus = null
  // const status = useSelector((state) => state.payment.status);
  // const loader = useSelector((state) => state.solution.loader);
  const paymentLoader = useSelector((state) => state.paymentLoader?.loader);
  const migrationDetailsData = useSelector(
    (state) => state.solution?.migrationDetail
  );
  const priceTableData = useSelector((state) => state.payment?.priceTableData);
  const [migrationDetails, setMigrationDetails] = useState([]);
  const [priceDetail, setPriceDetail] = useState([]);
  console.log("payment Fail", paymentFail);
  const history = useHistory();
  console.log("history", history);
  //   const gotToSubMenu = (value) => {
  //     history.push(value);
  //   };
//showing payment button
const [paymentButtonDisplay, setPaymentButtonDisplay] = useState(false)
const selsectedObjectList = useSelector(
  (state) => state.payment?.migrationObjectList
);
const [selsectedObjects, setSelsectedObjects] = useState([]);
useEffect(() => {
      axios({
    method: 'get',
    url: '/api/getPaymentStatus',
    params: {
      instanceId:instanceId
    }
  }).then((response)=> 
  {
    setPaymentButtonDisplay(response.data.paymentStatus)
  console.log('paymeny status response', response)
  }
  );
  
  //dispatch(actions.fetchSalesForceUserList(match))
  
}, [paymentButtonDisplay]);
useEffect(() => {
  dispatch(actions.fetchMigrationObjectList(instanceId));
}, []);
const startMigrationStatus = useSelector(
  (state) => state.solution?.startMigrationStatus
);
//const history = useHistory();
const gotToSubMenu = (value) => {
  history.push(value);
};
useEffect(() => {
  if (startMigrationStatus) {
    setTimeout(() => {
      gotToSubMenu("/migration");
    }, 5000);
  }
}, [startMigrationStatus]);

useEffect(() => {
  if (selsectedObjectList) {
    setSelsectedObjects(selsectedObjectList);
  }
}, [selsectedObjectList]);
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

//end showing payment button
  const dispatch = useDispatch();
  const stripePayment = (token) => {
    let obj = {
      productName: "Migration Tool",
      ...priceDetail,
    };

    let objSend = {
      token: token,
      products: obj,
      instanceId: instanceId,
    };
    console.log("obj Send", objSend);
    //dispatch(actions.resetPayMentStatus(true));
    dispatch(actions.initiateStripePaymentCall(objSend));
  };

  // useEffect(() => {
  //   if (status == 200) {
  //     setPaystatus(true);
  //   }
  // }, [status]);

  console.log("instance id", instanceId);

  //const instanceId = instanceId; //match.params.id;
  useEffect(() => {
    dispatch(actions.migrationDetails(instanceId));
  }, []);
  useEffect(() => {
    if (migrationDetailsData) setMigrationDetails(migrationDetailsData);
  }, [migrationDetailsData]);

  useEffect(() => {
    //fetching Price table data
    // axios({
    //   method: "get",
    //   url: "/api/getAmountToPay",
    //   params: { instanceId: instanceId },
    // })
    //   .then((response) => {
    //     console.log('response', response);
    //     //setMigrationDetails(response.data.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    dispatch(actions.paymentPriceTableData(instanceId));
  }, []);

  useEffect(() => {
    if (priceTableData) {
      setPriceDetail(priceTableData);
    }
  }, [priceTableData]);

  console.log("pp", priceDetail);

  //snack bar
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    setOpen(false);
    dispatch(actions.fetchMigrationObjectList(instanceId));
  }, []);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <PaymentAlert />
      {paymentLoader && <SimpleBackdrop />}
      <div className="payment-outer-wrap">
        <div className="payment-inner-wrap">
          {/* <PaymentStatusAlert /> */}
          <Card className="payment__card__wrapper">
            <CardContent>
              {paymentStatus || paymentFail ? (
                /* success payment info */
                <>
                  <PaySuccessPage
                    instanceId={instanceId}
                    paymentStatus={paymentStatus}
                    paymentFail={paymentFail}
                  />
                </>
              ) : (
                /* end success payment info */ /* migration Details */
                <>
                  <Grid
                    container
                    className="select__object__details select__object__report payment__component__wrap"
                  >
                    {/* migration detail section */}
                    <MigrationDetails
                      instanceId={instanceId}
                      migrationDetails={migrationDetails}
                    />
                    {/* pricing table */}
                    <PricingTable priceDetail={priceDetail} />
                    {/* amount to be paid */}
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      className="total__paid__wrapper"
                    >
                      <Typography component="h2">
                        ${priceDetail.totalAmount}{" "}
                        <span className="total__paid__amount">
                          TOTAL AMOUNT
                        </span>
                      </Typography>
                      { paymentButtonDisplay ? 
                        <Typography variant="h3" className="">
                          
                          Above amount has been paid.
                          Please click on below button to start migration.
                        
                        </Typography> : ''
                      }
                      
                      {
                        paymentButtonDisplay ? 
                        <Button
              variant="outlined"
              color="secondary"
              onClick={handleStartMigration}
              style={{ marginTop: "40px" }}
            >
              {" "}
              Start Migration
            </Button>
                        : <StripeCheckout
                        name="Pay for your migration"
                        token={stripePayment}
                        stripeKey={process.env.REACT_APP_KEY}  //"pk_test_jkEzIZuToRWYWR0moxWvyvaT00vmGnSDMU"
                        amount={priceDetail.totalAmount * 100}
                        shippingAddress
                        billingAddress
                      >
                        <Button variant="outlined" color="secondary">
                          {" "}
                          Click to pay
                        </Button>
                      </StripeCheckout>

                      }
                      
                    </Grid>
                  </Grid>
                </>
                /* end migration details */
              )}
            </CardContent>
          </Card>
        </div>
        {/* outer Information card */}
        <Card className="do__not__refresh__page">
          <CardContent>
            <Typography variant="p" component="p">
              <span>Note:</span> Please do not refresh the page else all
              previous screen data will be lost.
            </Typography>
          </CardContent>
        </Card>
      </div>
      {/* do not refresh alert */}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        //autoHideDuration={6000}
        onClose={handleClose}
        message="Please Do not Refresh the Page"
        action={
          <React.Fragment>
            {/* <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button> */}
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </>
  );
};

export default Payment;
