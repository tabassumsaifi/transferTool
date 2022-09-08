import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useSelector,useDispatch  } from 'react-redux'
import { useHistory } from "react-router-dom";
import  './main.css'
import arrow from '../../assets/images/arrow.png'
import mainlog from '../../assets/images/mainlogo.png'
import SimpleCard from './component/form'
import SimpleBackdrop from '../../loader/loading'




const useStyles = makeStyles((theme) => ({
  root: {
    heigh:"100vh",
  },
  right:{
    backgroundColor: "#F3F3F3",

  }
   
}));

export default function CenteredGrid() {
  const history = useHistory();

  const classes = useStyles();
  const loader = useSelector((state)=>state.login.loader);
  const loginStatus = useSelector((state)=>state.login.loginStatus);
  
  const dispacth = useDispatch()

  useEffect(()=>{
    // alert(loginStatus)\
    setTimeout(() => {
      if(loginStatus){
        history.push("toredirect");
        }
  }, 1000);
   
  },[loginStatus]);

   


  return (
    <div className={classes.root}>
     
      <Grid container spacing={0}>
      <Grid item xs={12} lg={4} md={4}>
          <div className="main-login-wrapper">
              <div className="main-migration-wrap">
                  {/* <img  src={arrow} /> */}
                  <h1>Migration tool</h1>
                  <p className="by-logo">by</p>
                  <p className="migration-sub-head">The fastest and easiest way to migrate your CRM data.</p>
              </div>
              <div className="main-logo-bottom">
                  <img src={mainlog} alt />
                  
              </div>

          </div>
        </Grid>
        <Grid item xs={12} lg={8} md={8} className="right-main-wrapper">
        {loader&&<SimpleBackdrop />}
          <SimpleCard />
        </Grid>
        
      </Grid>
    </div>
  );
}
