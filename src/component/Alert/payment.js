import React, { useEffect } from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from 'react-redux'
import * as actions from "../../store/action/index"




function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const PaymentStatusAlert = () => {

    const [open, setOpen] = React.useState(false);
    const [erroObj,setErroObj]  = React.useState({status:"",msg:""});
    const msg = useSelector((state) => state.payment.msg);

    const status = useSelector((state) => state.payment.status);
    const dispatch = useDispatch()



    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        //  alert(JSON.stringify(dispatch))
        if (status === '400') {
            setErroObj({status:"400",msg})
            setTimeout(() => {
                setOpen(true)
                dispatch(actions.resetPayMentStatus(false))
            }, 500);

        } else if(status === '200') {
            setErroObj({status:"200",msg})
            setTimeout(() => {
                setOpen(true)
                dispatch(actions.resetPayMentStatus(false))
            }, 500);
        }

    }, [status])
    return (
        <Snackbar open={open} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            onClose={handleClose}>
            <Alert onClose={handleClose} severity={erroObj.status==='200'?"success":"error"} >
                {erroObj.msg}
            </Alert>
        </Snackbar>
    )
}

export default PaymentStatusAlert;