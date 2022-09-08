
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const ExpiredLink = (props) => {


    return (
        <Grid container direction="column" spacing={3} style={{ margin: "0px 40px 0px" }} >
          
            <Grid item xs={12} lg={8} md={8} justify="center">
                <Typography variant="h2" gutterBottom>
                   {props.msg}
                </Typography>
            </Grid>
            
        </Grid>
    )
}

export default ExpiredLink