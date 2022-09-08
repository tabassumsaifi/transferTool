import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavLisItems from './navlist';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useSelector,useDispatch  } from 'react-redux'
import * as actions from "../../../store/action/index"






const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));
function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

// loggingOut

const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const logginOut = ()=>{
       dispatch(actions.loggingOut())
    }

    return (
        <div className={classes.root}>
            <HideOnScroll>
                <AppBar >
                    <Toolbar variant="dense">

                        <Typography variant="h5" color="inherit" variantMapping="a" href="#" style={{ fontWeight: "80px" }}>
                            <b>Niswey </b>
                        </Typography>
                        <NavLisItems />

                        <Grid container>
                            <Button variant="contained" onClick={logginOut}>LogOut</Button>
                        </Grid>

                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </div>
    );
}

export default Navbar;
