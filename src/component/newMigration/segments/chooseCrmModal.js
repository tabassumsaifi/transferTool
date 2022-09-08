import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import salesforce from "../../../assets/images/crm-logo/salesforce.png";
import hubspot from "../../../assets/images/crm-logo/hubspot.png";
import { useHistory } from "react-router-dom";

const ChooseCrmModal = (props) => {
  const history = useHistory();
  //console.log("history", history);

  const gotToSubMenu = (value) => {
    history.push(value);
  };

  return (
    <div>
      <Grid container spacing={3}>
        {/* first entry */}
        <Grid item xs={12} sm={4} md={3}>
          <div
            className="crm__details__wrapp"
            onClick={() => gotToSubMenu("/select-object")}
          >
            <img src={salesforce} alt="" />
            <Typography variant="p" component="p" style={{ color: "#525252" }}>
              Salesforce
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div className="crm__details__wrapp">
            <img src={hubspot} alt="" />
            <Typography variant="p" component="p" style={{ color: "#525252" }}>
              Hubspot
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div className="crm__details__wrapp">
            <img src={salesforce} alt="" />
            <Typography variant="p" component="p" style={{ color: "#525252" }}>
              Salesforce
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div className="crm__details__wrapp">
            <img src={hubspot} alt="" />
            <Typography variant="p" component="p" style={{ color: "#525252" }}>
              Hubspot
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div className="crm__details__wrapp">
            <img src={salesforce} alt="" />
            <Typography variant="p" component="p" style={{ color: "#525252" }}>
              Salesforce
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div className="crm__details__wrapp">
            <img src={hubspot} alt="" />
            <Typography variant="p" component="p" style={{ color: "#525252" }}>
              Hubspot
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div className="crm__details__wrapp">
            <img src={salesforce} alt="" />
            <Typography variant="p" component="p" style={{ color: "#525252" }}>
              Salesforce
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <div className="crm__details__wrapp">
            <img src={hubspot} alt="" />
            <Typography variant="p" component="p" style={{ color: "#525252" }}>
              Hubspot
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <div className="crm__details__wrapp">
            <img src={salesforce} alt="" />
            <Typography variant="p" component="p" style={{ color: "#525252" }}>
              Salesforce
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <div className="crm__details__wrapp">
            <img src={salesforce} alt="" />
            <Typography variant="p" component="p" style={{ color: "#525252" }}>
              Salesforce
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div className="crm__details__wrapp">
            <img src={salesforce} alt="" />
            <Typography variant="p" component="p" style={{ color: "#525252" }}>
              Salesforce
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <div className="crm__details__wrapp">
            <img src={salesforce} alt="" />
            <Typography variant="p" component="p" style={{ color: "#525252" }}>
              Salesforce
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChooseCrmModal;
