import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import rightArrow from "../../../assets/images/right-arrow.png";

const MigrationDetails = ({ instanceId, migrationDetails }) => {
  //console.log(migrationDetails, 'migrationDetails')

  return (
    <>
      <Grid
        container
        className="select__object__details select__object__report"
        style={{ padding: "0px 30px" }}
      >
        <Grid item xs={12} sm={12} md={7}>
          <Typography variant="h1" component="h1">
            Migrations Details
          </Typography>
          <Grid container className="migration__report__desc">
            <Grid item>
              <Typography>
                Migration id: <span>{`${instanceId.slice(-8)}`}</span>
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                Created:
                {/* <span>00:00 Monday 10 July 2021</span> */}
                <span>{migrationDetails.date}</span>
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                Type: <span>Self-service migration</span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          className="migration__report__details"
        >
          <Grid
            container
            //   justifyContent="flex-end"
            //   style={{ justifyContent: "end" }}
          >
            <Grid item>
              <div className="img__wrapper__migrate">
                <img src={`${migrationDetails.fromImgLink}`} crossOrigin="" alt=" " />
              </div>

              <span>{migrationDetails.from}</span>
            </Grid>
            <Grid item>
              <img src={rightArrow} alt=" " />
            </Grid>
            <Grid item>
              <div className="img__wrapper__migrate">
                <img src={`${migrationDetails.toImgLink}`} crossOrigin="" alt=" " />
              </div>
              <span>{migrationDetails.to}</span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MigrationDetails;
