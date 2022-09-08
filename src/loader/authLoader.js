import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    flexDirection:'column'
  },
}));

export default function AuthLoader(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  

  return (
    <div>
     
      <Backdrop className={classes.backdrop} open={open}  >
         {/* <h2>Please wait checking for authentication</h2> */}         
        <CircularProgress color="inherit" />
        <h2>{props.msg}</h2>
      </Backdrop>
    </div>
  );
}
