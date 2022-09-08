import React, { useEffect } from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from 'react-redux'
import * as actions from "../../store/action/index"




function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const LoginRegisterAlert = () => {

    const [open, setOpen] = React.useState(false);
    const [erroObj,setErroObj]  = React.useState({status:"",msg:""});
    const msg = useSelector((state) => state.login.msg);

    const status = useSelector((state) => state.login.status);
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
            console.log("STATUS msg--->>>", msg,status)
            setErroObj({status:"400",msg})
            setTimeout(() => {
                setOpen(true)
                dispatch(actions.resetLoginFlag())
            }, 500);

        }else if(status === '409') {
            console.log("STATUS msg--->>>", msg,status)
            setErroObj({status:"409",msg})
            setTimeout(() => {
                setOpen(true)
                dispatch(actions.resetLoginFlag())
            }, 500);
        }
         else if(status === '200') {
            console.log("STATUS msg--->>>", msg,status)
            //alert( msg)
            setErroObj({status:"200",msg})
            setTimeout(() => {
                setOpen(true)
                dispatch(actions.resetLoginFlag())
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

export default LoginRegisterAlert;