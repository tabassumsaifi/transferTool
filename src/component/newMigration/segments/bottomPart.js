import React from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";



const BottomPart = () =>{
    return(
        <>
         <Grid item xs={12} sm={12} md={12}  className="choose__crm__bootom">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="p" component="p">
                Remember, that we don’t change or delete anything on the source
                platform.{" "}
                <a href="/">Read why we request access to your account.</a>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Typography
                variant="p"
                component="p"
                style={{ textAlign: "center" }}
              >
                We don't share your access credentials with parties and
                guarantee the safety of your data according to our{" "}
                <a href="/">Security Policy.</a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        </>
    )
}

export default BottomPart