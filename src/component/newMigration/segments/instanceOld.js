import React, { useEffect, useState } from 'react';
// import swal from 'sweetalert';

import axios from '../../../axios';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../store/action/index';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StickyHeadTable from './table';
import SolutionAlert from '../../Alert/solution';
import { openConfigWindow } from './configWindows';
import AsweetAlert from './sweetAlert';
import SwtAlert from './alert';

//fetchSolutionInstances

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // height:"100vh"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'green', // theme.palette.text.secondary,
    borderColor: 'Blue',
  },
}));
const SolutionInatance = () => {
  const classes = useStyles();
  const [flag, setFlag] = useState(false);
  const [instancesList, setInstancesList] = useState([]);
  const instances = useSelector((state) => state.solution.instances);
  const staus = useSelector((state) => state.solution.staus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchSolutionInstances(''));
  }, []);

  useEffect(() => {
    if (instances) {
      // console.log(instances.solutionInstances.edges)
      setInstancesList(instances?.solutionInstances?.edges || []);
    }
  }, [instances?.solutionInstances?.edges]);

  const handleClick = (data) => {
    dispatch(actions.deleteSolutionInstances(data.id));
  };

  const handleStatus = (data) => {
    dispatch(actions.changeStatusSolutionInstances(data));
  };

  const hadndleConfige = (id) => {
    console.log(id);
    dispatch(actions.displayLoader());

    axios(`api/solutionInstance/config?solutionInstanceId=${id}`, {
      method: 'PATCH',
    })
      .then((data) => {
        const configWindow = openConfigWindow();
        dispatch(actions.hideLoader());
        console.log(data);
        configWindow.location = data.data.AppURl;
      })
      .catch((e) => {
        dispatch(actions.hideLoader());
        //   configWindow.close()
        console.log(e);
      });
  };

  let DisplayComp = instancesList.map((data) => {
    //  console.log(data.node)
    return (
      <Grid item xs={6} sm={4}>
        <Paper
          className={classes.paper}
          varient="elevation"
          component="div"
          id={'kol'}
        >
          <h3>{data.node.name}</h3>
          <p>Id :{data.node.id} </p>
          <p
            onClick={(e) =>
              handleStatus({ id: data.node.id, status: data.node.enabled })
            }
          >
            {' '}
            status: {data.node.enabled ? <p>Enable </p> : 'Disabled'}{' '}
          </p>

          {/* <button onClick={(e)=>handleClick({id:data.node.id,name:data.node.title})}>Use</button>  */}
          <button onClick={(e) => hadndleConfige(data.node.id)}>
            Confige instances
          </button>
          <SwtAlert
            btnText="Delete instance"
            title="Are You Sure?"
            message="Once deleted, you will not be able to recover this instances !"
            data={{ id: data.node.id, name: data.node.title }}
            deleteConfirm={handleClick}
          />
        </Paper>
      </Grid>
    );
  });

  return (
    <div style={{ height: '100vh', backgroundColor: '#F3F3F3' }}>
      <Grid container spacing={3} className="" style={{ padding: '80px 40px' }}>
        <Grid item xs={12}>
          <Typography component="div">
            <Paper className={classes.paper}>
              List of All available Instances total = {instancesList.length}
            </Paper>
          </Typography>
        </Grid>
        {/* <AsweetAlert /> */}
        {DisplayComp}
      </Grid>
    </div>
  );
};

export default SolutionInatance;
