import React, { useState } from 'react';
import './alert.css';
import Button from "@material-ui/core/Button";


import SweetAlert from 'sweetalert-react'; // eslint-disable-line import/no-extraneous-dependencies

const SwtAlert = (props) => {
  const [flag, setFlag] = useState(false);
  const [seFlag, setSeFlag] = useState(false);
  const hiddenAlert = (e) => {
    setTimeout(() => {
      setFlag(!flag);
      setSeFlag(true);
    }, 500);
    // setTimeout(()=>{
    //     // setFlag(!flag)
    //     setSeFlag(true)
    //  },600)
  };

  //    useEffect(()=>{

  //    },[])

  let FirtPopup = (
    <SweetAlert
     customClass= 'testClass'
     html = {true}
      show={flag}
      type="warning"
      title={props.title}
      showConfirmButton={true}
      showCancelButton={true}
      confirmButtonText={'Delete'}
      // imageSize = "100x100"
      showLoaderOnConfirm={true}
      text={props.message}
      onCancel={(e) => hiddenAlert(false)}
      onConfirm={(e) => {
        props.deleteConfirm(props.data);
        hiddenAlert(false);
      }}
    />
   
    
  );

  //   let  SecondPopup =

  return (
    <React.Fragment>
      <Button
      variant="contained"
      color="secondary"
      startIcon={props.startIcon}
      onClick={() => setFlag(!flag)}
      className={props.className}
      
      >
      {props.btnText}
      
      </Button>
      {FirtPopup}
    </React.Fragment>
  );
};

// const  = ()=>{
export default SwtAlert;
