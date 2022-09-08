import React, { useEffect } from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from 'react-redux'
import * as actions from "../../store/action/index"




function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SolutionAlert = (props) => {

    const [open, setOpen] = React.useState(false);
    const [erroObj,setErroObj]  = React.useState({status:"",msg:""});
    const msg = useSelector((state) => state.solution.msg);

    const status = useSelector((state) => state.solution.status);
    const dispatch = useDispatch()



    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        //  alert(JSON.stringify(dispatch))
        // alert(status)
        if (status === '400') {
            setErroObj({status:"400",msg})
            setTimeout(() => {
                setOpen(true)
                dispatch(actions.resetSolutionStatus(false))
            }, 500);

        } else if(status === '200') {
            setErroObj({status:"200",msg})
            setTimeout(() => {
                setOpen(true)
                dispatch(actions.resetSolutionStatus(false))
            }, 500);
        }

    }, [status])

    useEffect(()=>{
     if(props.error.status==="400"){
        setErroObj({status:"400",msg:props.error.msg})
            setTimeout(() => {
                setOpen(true)
                // dispatch(actions.resetSolutionStatus(false))
            }, 500);
     }
    },[props.error])
    return (
        <Snackbar open={open} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            onClose={handleClose}>
            <Alert onClose={handleClose} severity={erroObj.status==='200'?"success":"error"} >
                {erroObj.msg}
            </Alert>
        </Snackbar>
    )
}

export default SolutionAlert;