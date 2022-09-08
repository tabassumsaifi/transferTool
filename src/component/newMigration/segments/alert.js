import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import './alert.css';

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
      <button onClick={() => setFlag(!flag)}>{props.btnText}</button>
      {FirtPopup}
    </React.Fragment>
  );
};

// const  = ()=>{
export default SwtAlert;
