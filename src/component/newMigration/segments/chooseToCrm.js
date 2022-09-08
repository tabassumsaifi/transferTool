import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
//modal
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "../../style.css";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
//dispatch and selector
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/action/index";
//import axios from "../../../axios";
import CommonAlert from "../../Alert/commonAlert";
import FormControl from "@material-ui/core/FormControl";
import BottomPart from "./bottomPart";

const ChooseToCrm = () => {
  const dispatch = useDispatch();
  const fromToObject = useSelector((state) => state.solution.selecedObject);
  
  //const fromObject = fromToObject.from 
  //console.log("fromObject",fromObject )



  const tabsValue = useSelector((state) => state.solution.selectedTabValue);

  //console.log("tabsValue", tabsValue);

  // const handleClick = (data) => {
  //   //alert(value)
  //   //props.setValue(data);
  //   dispatch(actions.setSelectedTabValue(data));
  //   //console.log("selectedValue", data)
  // };
  //  const options = [
  //   { value: 1, label: "Within the last year" },
  //   { value: 2, label: "13 to 24 months ago" },
  //   { value: 3, label: "25 to 36 months ago" },
  //   { value: 4, label: "More than 36 months ago" },
  //   { value: 5, label: "Never" },
  // ];
  
  

//for dropdown
const toCrmList = useSelector(
  (state) => state?.solution?.ToCRMList
);
const [list, setList] = useState([]);
const [selectCrm, setSelectCrm] = React.useState("");


const selectedToValue = useSelector(
  (state) => state?.solution?.selecedObject?.to
);

const [solutionObject, setSolutionObject] = useState(selectedToValue);
//console.log("valueeee", solutionObject)
// useEffect(() => {
//   dispatch(actions.fetchToCrmList(fromObject))
// }, [fromObject])

useEffect(() => {
  //    console.log(solutions)
  if (toCrmList.length) {
    setList(toCrmList);
  }
  //    setList()
}, [toCrmList]);


const handleChange = (event) => {
    //alert(JSON.stringify(event.target.value) )
    setSelectCrm(event.target.value);   
    let data = list.filter((data) => data.to === event.target.value);
    //alert(JSON.stringify(data[0]))
    if (data.length) {
      setSolutionObject(data[0].to);
      dispatch(actions.saveSelectedObject({ to: data[0].to }));
    }
    
  };
  //console.log('selectCrm', selectCrm)
  const handleNext = (data) => {
    //alert(JSON.stringify(solutionObject))
    dispatch(actions.displayLoader());
    if (data) {
      //dispatch(actions.hideLoader({status:"200", msg:"succesfully added in redux", alertStatus:true} ));
      dispatch(actions.setSelectedTabValue(tabsValue + 1));
      dispatch(actions.fetchCrmSolutionList(fromToObject)); 
      dispatch(actions.setTabsValue({tabTwo:false,tabThree:true}))
      dispatch(actions.newMigrationProgressBar(100))

    } else {
      dispatch(
        actions.hideLoader({
          status: "400",
          msg: "Please select any one option",
          alertStatus: true,
        })
      );
    }
  };

  return (
    <>
     <CommonAlert />
      {/* <Button onClick={() => handleClick(tabsValue + 1)}>test me</Button> */}
      <Grid container spacing={3} className="choose__crm__wrapper">
      
        <Grid item xs={12} sm={12} md={12}>
        <div align="center" class="boxwrap">
        <div class="migration__box" id="migrationBox1">
            {/* <Paper>
              <Typography variant="p" component="p">
                Choose your CRM
              </Typography>
            </Paper> */}

            {/* select option */}
            <FormControl variant="outlined"  >
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={solutionObject}
              onChange={handleChange}
              displayEmpty
              className="selctBox"
              inputProps={{ "aria-label": "Without label" }}
              MenuProps={{
                getContentAnchorEl: null,
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
              }}
            >
              <MenuItem value="" disabled>
                Migrate To
              </MenuItem>

              {list.map((option) => (
                <MenuItem className="selectItem-list" value={option.to}>
                  {option.to}
                </MenuItem>
              ))}
            </Select>
            </FormControl>
            <div style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            disableFocusRipple="false"
            disableRipple="false"
            onClick={()=>handleNext(solutionObject)}
          >
            Connect
          </Button>
          {/* <Button variant="contained" onClick={()=>handleClick(tabsValue+1)}>test me</Button> */}
        </div>
          </div>
          <div class="migration__box" id="migrationBox2"></div>
            <div class="migration__box" id="migrationBox3"></div>
          </div>
          <div className="button_restart">
        <Button color="primary"
        //className="button_restart"
        onClick={()=>
          {dispatch(actions.resetSelectedCRMObject());
          dispatch(actions.setSelectedTabValue(0));
          dispatch(actions.newMigrationProgressBar(33.3));
        
        }
          
          }
        >
          <ArrowBackIcon/>
          Restart Migration
          </Button>
        </div>
        </Grid >
       
     
      {/* <Button
        
        color="primary"
        className="button_restart"
        //startIcon={<img src={viewReport} />}
        onClick={()=>
        {dispatch(actions.resetSelectedCRMObject());
        dispatch(actions.setSelectedTabValue(0));}
        } > <ArrowBackIcon/>
          Restart Migration</Button> */}
     
        

        <BottomPart />
       
      </Grid>
    </>
  );
};

export default ChooseToCrm;
