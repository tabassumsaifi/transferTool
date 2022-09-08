import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import rightArrow from "../../../assets/images/right-arrow.png";
// import { useSelector } from "react-redux";
import axios from "../../../axios";

function InstanceMainInfo({ instanceId }) {
  // const instanceid = instanceId;
  // const instances = useSelector((state) => state.solution.instances);
  //console.log(instances)
  //console.log("instance Id", instanceid)
  const [images, setImages] = useState();

  // const obj = instances.filter((item)=>item.instanceId === instanceid
  // )
  // console.log('obj ', obj[0] ?.solutionId)
  useEffect(() => {
    // Send a POST request
    axios({
      method: "get",
      url: "/api/dataMapping/solutionIcons",
      params: {
        instanceId: instanceId,
      },
    }).then((response) => setImages(response.data.data));
  }, [instanceId]);
  // console.log(images)
  return (
    <>
      {/* main instance details */}
      <Grid
        container
        className="select__object__details"
        style={{ padding: "0px 30px" }}
      >
        <Grid item xs={12} sm={6} md={6}>
          <div>
            <Typography variant="p" component="p" className="s__object__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet
              bibendum vestibulum vitae ultrices nulla.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} className="s__object__right__left">
          <Grid
            container
            justifyContent="flex-end"
            style={{ justifyContent: "end" }}
          >
            <Grid item className="migration__id__num instance__main__info">
              <Typography variant="p" component="p">
                {/* {instanceId.substring(-1)} */}
                {instanceId?.slice(instanceId.length - 5)}
              </Typography>
              <span>Number</span>
            </Grid>

            <Grid item>
              <img src={images?.fromImgLink} crossOrigin="" alt="From" />
            </Grid>
            <Grid item>
              <img src={rightArrow} alt="arrow" />
            </Grid>
            <Grid item>
              <img src={images?.toImgLink} crossOrigin="" alt="To" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default InstanceMainInfo;
