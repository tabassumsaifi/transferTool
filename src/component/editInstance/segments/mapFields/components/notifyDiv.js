import React from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const NotifySection = () =>{
    return(
        <>
         <Grid container className="notify__map__fields">
        <Grid item xs={12} sm={12} md={12}>
          <div className="">
            <Typography component="p">
              <span>Note: </span> Once you start mapping, you would not be able
              to remove fields. To Repopulate the deleted fields, press Reset
              fields{" "}
            </Typography>
          </div>
        </Grid>
      </Grid>
        </>
    )
}

export default NotifySection