import React, { useEffect, useState } from "react";
// import Button from "@material-ui/core/Button";
//import * as actions from "../../../../store/action/index";
import { 
  // useDispatch, 
  useSelector } from "react-redux";
//import axios from '../../../../axios'
import InstanceMainInfo from "../instanceMainInfo";
import CommonAlert from "../../../Alert/commonAlert";
//import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Companies from "./components/companies";
// import Grid from "@material-ui/core/Grid";
// import NextArrow from "../../../../assets/images/table/next-arrow.png";
//tabs
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
//confirm modal
// import Attachments from './attachments/attachments'
import Contact from "./components/contact";
//import Calls from "./components/calls";
import Deals from "./components/deals";
import ProductList from "./components/productList";
import Tickets from "./components/tickets";
import Emails from "./components/email";
import Meetings from "./components/meetings";
import Leads from "./components/leads";
import Notes from "./components/notes";
import Attachments from "./components/attachments";
//import ConfirmMigration from "./confirmMigration/confirmMigration";
import Engagements from "./components/engagements";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     width: "100%",
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// end tabs

function MapFields({ instanceId }) {
  //tabs
  // const classes = useStyles();
  //const [value, setValue] = React.useState(0);

  const selectedTabs = useSelector(
    (state) => state.solution.mapFieldsSelectedTab
  );
  //console.log("selected Tabs", selectedTabs);
  let value = selectedTabs;
  const mapFieldsTabsList = useSelector(
    (state) => state?.solution?.fetchMapFieldTabsList?.migrationObjList
  );
  const [tabsList, setTabsList] = useState([]);

  // const handleChange = (event, newValue) => {
  //   //setValue(newValue);
  //   dispatch(actions.setMapFieldsSelectedTabs(newValue));
  // };

  //const activeStep = useSelector((state) => state.solution.activeStep);
  //const dispatch = useDispatch();

  // const handleNext = () => {
  //   // alert(JSON.stringify(activeStep))
  //   // setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   //setOpen(true);
  //   //dispatch(actions.setEditInstanceActiveStep(activeStep + 1));
  // };

  // const handleBack = () => {
  //   // setActiveStep((prevActiveStep) => prevActiveStep - 1);
  //   // alert(JSON.stringify(activeStep))
  //   dispatch(actions.setEditInstanceActiveStep(activeStep - 1));
  // };

  useEffect(() => {
    //dispatch(actions.fetchMapFieldTabsList(instanceId));
  }, []);

  useEffect(() => {
    //  axios({
    //   method: 'get',
    //   url: '/api/dataMapping/getTabsList',
    //   params: {
    //     instanceID:"111122223333444"
    //   }
    // }).then((response)=> console.log(response));
    if (mapFieldsTabsList) setTabsList(mapFieldsTabsList);
  }, [mapFieldsTabsList]);

  //console.log("tabsList", tabsList);

  // foods[foods.length - 1];
  const labelArrayLength = tabsList.length - 1;
  //console.log("labelArrayLength", labelArrayLength);

  function getTabsContent(label) {
    //console.log("my label", label);
    switch (label) {
      case "Contacts":
        return <Contact instanceId={instanceId} />;
      case "Accounts":
        return (
          <Companies
            instanceId={instanceId}
            labelArrayLength={labelArrayLength}
          />
        );
      case "Opportunities":
        return <Deals instanceId={instanceId} />;
      case "Product List":
        return <ProductList />;
      case "Cases":
        return <Tickets instanceId={instanceId} />;
      case "Emails":
        return <Emails />;
      case "Meetings":
        return <Meetings />;
      case "Leads":
        return <Leads />;
      case "Notes":
        return <Notes />;
      case "Engagements":
        return (
          <Engagements
            instanceId={instanceId}
            labelArrayLength={labelArrayLength}
          />
        );
      case "Attachments":
        return <Attachments />;

      default:
        return "No Record to display";

      //return 'default';
    }
  }

  // const getfooter = () => {
  //   if (selectedTabs === labelArrayLength) {
  //     return displayFooter();
  //   }
  // };
  // const displayFooter = () => {
  //   return (
  //     <Grid container spacing={3} className="table-bottom-footer">
  //       <Grid item xs={4} sm={4} md={6}>
  //         <Button
  //           variant="outlined"
  //           color="primary"
  //           disabled={activeStep === 0}
  //           onClick={handleBack}
  //         >
  //           {" "}
  //           Back
  //         </Button>
  //       </Grid>
  //       <Grid item xs={8} sm={8} md={6} style={{ textAlign: "right" }}>
  //         <Button
  //           variant="contained"
  //           color="primary"
  //           onClick={handleNext}
  //           endIcon={<img src={NextArrow} alt="Next Arrow" />}
  //         >
  //           {" "}
  //           Start migration
  //         </Button>
  //       </Grid>
  //     </Grid>
  //   );
  // };

  return (
    <>
      <CommonAlert />
      <InstanceMainInfo instanceId={instanceId} />

      <Paper className="main-paper-container">
        {/* top tabs section */}
        <div className="main__map__field__wrapper__tabs">
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              //onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
              disableFocusRipple="false"
              disableRipple="false"
            >
              {tabsList.map((item) => {
                return <Tab label={item.label} {...a11yProps(item.id)} />;
              })}
              {/* <Tab label="Companies" {...a11yProps(0)} />
          <Tab label="Contacts" {...a11yProps(1)} />
          <Tab label="Deals" {...a11yProps(2)} />
          <Tab label="Product List" {...a11yProps(3)} />
          <Tab label="Tickets" {...a11yProps(4)} />
          <Tab label="Emails" {...a11yProps(5)} />
          <Tab label="Meetings" {...a11yProps(6)} />
          <Tab label="Leads" {...a11yProps(7)} />
          <Tab label="Notes" {...a11yProps(8)} />
          <Tab label="Attachements" {...a11yProps(9)} />
          <Tab label="Leads" {...a11yProps(10)} /> */}
            </Tabs>
          </AppBar>
          {tabsList.map((item, index) => {
            return (
              <TabPanel value={value} index={index}>
                {/* <h1>{(item.label, index)}</h1> */}
                {/* {item.label==='Companies' ? <Companies /> : ''} */}
                {getTabsContent(item.label)}
              </TabPanel>
            );
          })}
          {/* <TabPanel value={value} index={0}>
        <Companies />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Contact />       
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Deals />
      </TabPanel>
      <TabPanel value={value} index={3}>      
      <ProductList />
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Tickets />
      </TabPanel>
      <TabPanel value={value} index={5}>
       <Emails />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Meetings />     
      </TabPanel>
      <TabPanel value={value} index={7}>
          <Leads />
      </TabPanel>
      <TabPanel value={value} index={8}>
      <Notes />  
      </TabPanel>
      <TabPanel value={value} index={9}>
      <Calls /> 
      </TabPanel>
      <TabPanel value={value} index={10}>
      <Attachments />
      </TabPanel> */}
        </div>

        {/* table bottom footer */}
        {/* {getfooter()} */}
      </Paper>

      {/* <div>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
            

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                
              >
               Next
              </Button>
            </div> */}
    </>
  );
}

export default MapFields;
