import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import StripeCheckout from "react-stripe-checkout";
import * as actions from "../../store/action/index";
import { useSelector, useDispatch } from "react-redux";

const Payment = () => {
  const dispatch = useDispatch();
  const [payStatus, setPaystatus] = useState(false);
  const status = useSelector((state) => state.payment?.status);
  const [product, setproduct] = useState([
    {
      name: "Migration Data",
      price: 100,
    },
  ]);

  const makePayment = (token) => {
    let objSend = {
      token: token,
      //products:product,
      products: 'Test Products'
    };
    dispatch(actions.resetPayMentStatus(true))
    dispatch(actions.initiateStripePaymentCall(objSend));
  };

  useEffect(()=>{
    if(status===200){
     setPaystatus(true)
    }
 },[status])

console.log("payStatus", payStatus)
  return (
    <>
    {
        !payStatus ?       (<StripeCheckout
        name={`Pay for your Migration ${product.price}`}
        token={makePayment}
        stripeKey="pk_test_jkEzIZuToRWYWR0moxWvyvaT00vmGnSDMU"
        amount={product.price * 100}
        shippingAddress
        billingAddress
      >
        <Button variant="outlined" color="secondary">
          Proceed to Payment
        </Button>
      </StripeCheckout>) :   ( <Button
                variant="outlined"
                color="secondary"
                //onClick={startMigration}
                className="stop__migration__btn"
              >
                Start Migration
              </Button>)
    }

    </>
  );
};

export default Payment;
