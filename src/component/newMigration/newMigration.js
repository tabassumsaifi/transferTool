import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Main from "../../common/layout/header";
import Grid from "@material-ui/core/Grid";
import ChooseCrm from "./segments/chooseFromCRM";
import "../style.css";
import SimpleBackdrop from "../../loader/loading";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as actions from "../../store/action/index";
import ChooseToCrm from "./segments/chooseToCrm";
import SolutionsList from "./segments/demoMigration";
import MigrationProgressBar from "./segments/progressBar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const renderLabel = (text, icon) => {
  return (
    <div>
      <Typography variant="p" component="p">
        {" "}
        <span>{icon}</span>
        {text}
      </Typography>
    </div>
  );
};

const NewMigration = (props) => {
  const dispatch = useDispatch();
  //console.log("props", props.history);
  //const classes = useStyles();
  const tabsValue = useSelector((state) => state.solution.selectedTabValue);
  const tabOne = useSelector((state) => state.solution.tabsObject.tabOne);
  const taTwo = useSelector((state) => state.solution.tabsObject.tabTwo);
  const tabThree = useSelector((state) => state.solution.tabsObject.tabThree);
  //const [value, setValue] = React.useState(tabsValue);
  let value = tabsValue;
  const handleChange = (event, newValue) => {
    //alert(value)
    dispatch(actions.setSelectedTabValue(newValue));
  };
  // const handleClick = (data) => {
  //   //alert(value)
  //   //setValue(data);
  //   dispatch(actions.setSelectedTabValue(data));
  //   //console.log("selectedValue", data)
  // };
  //console.log("tabs value", value);
  const history = useHistory();
  //console.log("history", history.location.pathname);

  const loader = useSelector((state) => state.loader.loader);
  //const fromFlag = useSelector((state) => state?.solution?.selecedObject?.from);
  //const toFlag = useSelector((state) => state?.solution?.selecedObject?.to);

  return (
    <>
      <Main path={history.location.pathname}>
        <div className="create__migration__wrapper">
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <Typography variant="h1" component="h1">
                New Migration
              </Typography>
            </Grid>
          </Grid>

          <div className="migration__tabs__style">
            <AppBar position="static">
              <Tabs
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
                className="mui__tabs__style"
              >
                <LinkTab
                  label={renderLabel("Your CRM", "1")}
                  //href="/drafts"
                  //className={fromFlag.length ? 'Mui-selected': ''}
                  disabled={tabsValue === 0 && tabOne === true ? false : true}
                  {...a11yProps(0)}
                />
                <LinkTab
                  label={renderLabel("Your New CRM", "2")}
                  // href="/trash"
                  //className={toFlag.length ? 'Mui-selected': ''}

                  disabled={tabsValue === 1 && taTwo === true ? false : true}
                  {...a11yProps(1)}
                  //className={fromFlag.length ? '' : 'disabled'}
                />
                <LinkTab
                  label={renderLabel("Demo Migration", "3")}
                  //href="/spam"
                  //className={value === '2' || toFlag.length && fromFlag.length ? 'Mui-selected': ''} tabThree
                  disabled={tabsValue === 2 && tabThree === true ? false : true}
                  {...a11yProps(2)}
                />
              </Tabs>
              <div>
                <MigrationProgressBar />
              </div>
            </AppBar>
            <TabPanel value={value} index={0}>
              {loader && <SimpleBackdrop />}
              <ChooseCrm value={value} />
              {/* <Button //onClick={}
              >Click me</Button> */}
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ChooseToCrm />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <SolutionsList />
            </TabPanel>
          </div>
        </div>
      </Main>
    </>
  );
};

export default NewMigration;
