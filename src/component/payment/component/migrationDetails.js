import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import rightArrow from "../../../assets/images/right-arrow.png";

const MigrationDetails = ({ instanceId, migrationDetails }) => {
  console.log(migrationDetails, "migrationDetails");

  return (
    <>
      <Grid item xs={12} sm={12} md={12}>
        <Typography variant="h1" component="h1" style={{ textAlign: "center" }}>
          Migrations Details
        </Typography>
        <Grid
          container
          className="migration__report__desc"
          style={{
            justifyContent: "center",
            padding: "0px 0px 20px 0px",
          }}
        >
          <Grid item>
            <Typography>
              Migration id: <span>{`${instanceId.slice(-8)}`}</span>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              Created:
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
        md={12}
        className="migration__report__details migration__details__for__payment"
      >
        <Grid
          container
          //   justifyContent="flex-end"
          //   style={{ justifyContent: "end" }}
        >
          <Grid item>
            <div className="img__wrapper__migrate">
              <img
                src={`${migrationDetails.fromImgLink}`}
                crossOrigin=""
                alt=""
              />
            </div>

            <span>{migrationDetails.from}</span>
          </Grid>
          <Grid item>
            <img src={rightArrow} alt="" />
          </Grid>
          <Grid item>
            <div className="img__wrapper__migrate">
              <img
                src={`${migrationDetails.toImgLink}`}
                crossOrigin=""
                alt=""
              />
            </div>
            <span>{migrationDetails.to}</span>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MigrationDetails;
