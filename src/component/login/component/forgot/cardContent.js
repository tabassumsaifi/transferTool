import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux'
import '../../main.css'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import PasswordResetInput from './passwordReset';
import ExpiredLink from './linkExpired'
import * as actions from "../../../../store/action/index"
import axios from '../../../../axios';
import SimpleBackdrop from '../../../../loader/loading'
import queryString from 'query-string';

const useStyles = makeStyles({

    root: {
        width: "50%",
        minHeight: "40vh",
        margin: "0px auto",
        marginTop: "8%",
        borderRadius: "15px",
        boxShadow: '0px 4px 50px rgba(4, 63, 146, 0.08)'
        // alignItems:"center",
        //  direction:"column"

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    inputField: {

    },
    button: {
        backgroundColor: "#80CB9E",
        '&:hover': {
            backgroundColor: "#95f1BA",
        },
        '&:active': {
            backgroundColor: "#5FAA7D",
        }
    }
});

export default function CardContent2(props) {
    const classes = useStyles();
    // const [flag, setFlage] = useState(true);
    const [status, setStatus] = useState(false);
    const [msg, setMsg] = useState("")
    const [token, setToken] = useState("")
    const loader = useSelector((state) => state.login.loader);
    const dispatch = useDispatch()




    useEffect(() => {
        // alert(props.token)
        dispatch(actions.homeLoginFlag())

        let params = queryString.parse(props.token)

        let token = params.token;
        // console.log(token)
        axios.get(`/api/link${props.token}`)
            .then(data => {
                setToken(token)
                setStatus(true)
                // console.log(data)
                dispatch(actions.homeLoginFlag(false))
            })
            .catch((e) => {
                setMsg("Page not found  404.... ")
                dispatch(actions.homeLoginFlag(false))
                console.log(e.message)
            })

    }, [])


    return (
        //   <Grid  container justify="center" alignItems="center" direction="column" style={{minHeight:"100vh"}} >
        <Card className={classes.root}>
            <CardContent>
                <Grid container justify="center" >
                    <Typography component="div">


                        <Box fontWeight="fontWeightBold" fontSize="h5.fontSize" m={1}>
                            Change Your password here
                        </Box>
                        </Typography>
                    {/* <Box item >
                        <Typography  variant="h6" gutterBottom>
                           
                        </Typography>
                    </Box>
                    <br></br>
                      <Grid item>
                      <Typography variant="body2" gutterBottom>
                          <Box>
                       
                        </Box>
                    </Typography>
                      </Grid> */}
                    {/* <Container fixed spacing="10"> */}

                    {loader ? <SimpleBackdrop /> :
                        status ? (<PasswordResetInput token={token}/>) : (<ExpiredLink msg={msg} />)
                    }

                </Grid>
            </CardContent>

        </Card>
        //  </Grid>
    );
}
