import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import "./layout.css";
import Arrow from "../../assets/images/arrow.png";
import webLogo from "../../assets/images/logo/web-logo.png";
import profile from "../../assets/images/profile.png";
import { Route } from "react-router";
import { Link, Link as RouterLink } from "react-router-dom";
import migration from "../../assets/images/sidebar/migration.png";
import estimation from "../../assets/images/sidebar/estimation.png";
import backup from "../../assets/images/sidebar/backup.png";
import help from "../../assets/images/help.png";
import setting from "../../assets/images/setting.png";
import { connect } from "react-redux";
import * as actions from "../../store/action/index";
import { Button } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const drawerWidth = 220;
// const drawerWidthMobile = 150;
const closeDrawerWidth = 84;
const closeDrawerWidthMobile = 70;

const styles = (theme) => ({
  root: {
    display: "flex",
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  // menuButtonDummyOpen:{
  //   backgroundImage: URL("../../assets/images/Group.png")
  // },
  // menuButtonDummyClosed:{
  //   // backgroundImage: URL("../../assets/images/Group1.png")
  //   Image:URL("../")
  // },
  menuButtonIconClosed: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    transform: "rotate(0deg)",
  },
  menuButtonIconOpen: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    transform: "rotate(180deg)",
  },
  hide: {
    display: "none",
  },
  drawer: {
    position: "relative",
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    backgroundColor: "#f1f2f6",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    // [theme.breakpoints.up('sm')]: {
    //   width: drawerWidth,
    // },
  },
  drawerClose: {
    //width: closeDrawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: closeDrawerWidthMobile,
    // [theme.breakpoints.up("sm")]: {
    //   width: theme.spacing.unit * 9 + 1
    // }
    [theme.breakpoints.up("sm")]: {
      width: closeDrawerWidth,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    marginTop: "8px",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    //padding: theme.spacing.unit * 3,
    padding:theme.spacing(3)
  },
  grow: {
    flexGrow: 1,
  },
});

class MiniDrawer extends React.Component {
  state = {
    open: true,
    anchorEl: null,
    classValue: "0",
    class: "oldClass",
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  rnderLinks = () => (
    <React.Fragment>
      <div className="navigation__link">
        <Route>
          <div>
            <div>
              <List aria-label="main mailbox folders">
                <ListItem
                  button
                  component={RouterLink}
                  to="/home"
                  onClick={(e) => this.handleChangeClass("1")}
                  className={
                    this.props.path === "/home"
                      ? "nav__link active__link"
                      : "nav__link"
                  }
                >
                  <ListItemIcon>
                    <img src={migration} alt="Migration-Tool" />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard " />
                </ListItem>
                <ListItem
                  button
                  component={RouterLink}
                  to="/migration"
                  onClick={(e) => this.handleChangeClass("3")}
                  className={
                    this.props.path === "/migration" ||
                    this.props.path === "/new-migration" ||
                    this.props.path === `/edit-instance/${this.props.match}` ||
                    this.props.path ===
                      `/migration-report/${this.props.match}` ||
                    this.props.path === `/migration-payment/${this.props.match}`
                      ? "nav__link active__link"
                      : "nav__link"
                  }
                >
                  <ListItemIcon>
                    <img src={migration} alt="Migration" />
                  </ListItemIcon>
                  <ListItemText primary="Migration" />
                </ListItem>
                <ListItem
                  button
                  component={RouterLink}
                  //to="/solution"
                  //onClick={(e) => this.handleChangeClass("2")}
                  className={
                    this.props.path === "/solution"
                      ? "nav__link active__link"
                      : "nav__link"
                  }
                >
                  <ListItemIcon>
                    <img src={estimation} alt="Estimation" />
                  </ListItemIcon>
                  <ListItemText primary="Estimation" />
                </ListItem>
                <ListItem
                  button
                  component={RouterLink}
                  //to="/solution"
                  //onClick={(e) => this.handleChangeClass("2")}
                  className={
                    this.props.path === "/solution"
                      ? "nav__link active__link"
                      : "nav__link"
                  }
                >
                  <ListItemIcon>
                    <img src={backup} alt="Backup" />
                  </ListItemIcon>
                  <ListItemText primary="Backup" />
                </ListItem>
              </List>
              <Divider />
              <List
                aria-label="secondary mailbox folders "
                className="secondary__menu"
              >
                <ListItem
                  button
                  onClick={(e) => this.handleChangeClass("4")}
                  className={
                    this.state.classValue === "4"
                      ? "nav__link active__link"
                      : "nav__link"
                  }
                >
                  <ListItemIcon>
                    <img src={help} width="20px" alt="Help" />
                  </ListItemIcon>
                  <ListItemText primary="Help" />
                </ListItem>
                <ListItem
                  button
                  onClick={(e) => this.handleChangeClass("5")}
                  className={
                    this.state.classValue === "5"
                      ? "nav__link active__link"
                      : "nav__link"
                  }
                >
                  <ListItemIcon>
                    <img src={setting} width="20px" alt="Setting" />
                  </ListItemIcon>
                  <ListItemText primary="Setting" />
                </ListItem>
              </List>
            </div>
          </div>
        </Route>
      </div>
    </React.Fragment>
  );

  handleDrawerOpen = () => {
    this.setState({ open: !this.state.open });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  //navigation link

  //end

  handleChangeClass = (value) => {
    this.setState({ classValue: value });
    this.setState({ class: "NewClass" });
  };
  //log out function
  logginOut = () => {};

  render() {
    const { classes, theme } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    //console.log("all props", this.props.path);
    //console.log("console", this.props.match);

    // const menuId = "primary-search-account-menu";
    const { window } = this.props;
    const container =
      window !== undefined ? () => window().document.body : undefined;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={`${classes.appBar} top_header_main`}
          foojon={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar className="header_inner_wrap">
            <Link to={{pathname:"/home"}} className="Link_logo">
              <div className="logo">
                <img src={webLogo} alt="CRM ToolBox Logo" />
                {/* <Typography variant="h2" className="dashboard_Heading">
                  CRM <span>ToolBox</span> <br />{" "}
                  <span className="heading-include_by"> by </span>
                </Typography> */}
              </div>
            </Link>
            <div className="welcome-wrapper">
              <Typography variant="h3" className="" noWrap>
                Welcome, {this.props.userInfo}
              </Typography>
            </div>
            <div className="annoucement-wrapper">
              <Typography component="p" noWrap>
                {" "}
                Announcement, example: Something went wrong,{" "}
                <a href="/">see details</a>
              </Typography>
            </div>
            <div className={classes.grow} />
            <div className="profile__dropdown">
              <Hidden smDown implementation="css">
                <IconButton
                  aria-owns={open ? "menu-appbar" : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                  className="profile-dropdown"
                  
                >
                  <img src={profile} alt="Profile" />
                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  getContentAnchorEl={null}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  transformOrigin={{ vertical: "left", horizontal: "left" }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <Divider variant="middle" />
                  <MenuItem
                    className="logout-text"
                    onClick={(e) => {
                      this.props.setIntialState("");
                      this.props.logout();
                      this.props.setInstanceIdInitalState();
                      this.props.resetPaymentFlags();
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </Hidden>
            </div>
            <Hidden mdUp implementation="css">
              <IconButton
                className="Drawer1"
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={() => this.handleDrawerToggle()}
                //className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
        {/* drawer for responsive */}
        <Hidden smUp implementation="css">
          <Drawer
            //className="Drawer1"
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={this.state.mobileOpen}
            onClose={() => this.handleDrawerToggle()}
            classes={{
              paper: classNames({
                [classes.drawerOpen]: this.state.open,
              }),
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <Link to="/" className="Link_logo">
              <div className="logo logo__responsive">
                <img src={Arrow} alt="Arrow" />
                <Typography variant="h2" className="dashboard_Heading">
                  CRM <span>ToolBox</span> <br />{" "}
                  <span className="heading-include_by"> by </span>
                </Typography>
              </div>
            </Link>

            {this.rnderLinks()}

            <Divider style={{ marginTop: "40px", marginBottom: "40px" }} />

            <div className="mobile__links">
              <Button
                // variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<ExitToAppIcon />}
                onClick={(e) => this.props.logout()}
              >
                LogOut
              </Button>
            </div>
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            className={classNames(`${classes.drawer} mainDrawerClass`, {
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            })}
            classes={{
              paper: classNames({
                [classes.drawerOpen]: this.state.open,
                [classes.drawerClose]: !this.state.open,
              }),
            }}
            open={this.state.open}
          >
            <div className={classes.toolbar} />

            {this.rnderLinks()}
            {/* some action div */}
            {/* {
                  this.state.open === true ? 
              <div className="nav__cta__wrap">
              <Typography variant="p" component="p" className="reduce__panel" style={{ whiteSpace: 'break-spaces'}}>Lorem ipsum dolor sit amet, consectetur</Typography>
              <a href="" className="cta__btn" > Call to action </a>
              </div>
              : ''
  } */}

            <div
              className={` ${
                this.state.open === true ? "nav__cta__wrap" : "nowrap"
              }`}
            >
              <Typography
                // variant="p"
                component="p"
                className="reduce__panel"
                style={{ whiteSpace: "break-spaces" }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </Typography>
              <Link href="/" className="cta__btn">
                {" "}
                Call to action{" "}
              </Link>
            </div>
            <div className="drawer__close__btn">
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classes.menuButton}
                disableFocusRipple={false}
                disableRipple={false}
              >
                {/* <span
              
                className={ `${this.state.open ? 'menuButtonDummyOpen'
                    : 'menuButtonDummyClosed'} `
                }
                /> */}
                <Typography
                  variant="body1"
                  component="span"
                  className={`reduce__panel ${
                    this.state.open
                      ? "menuButtonDummyOpen"
                      : "menuButtonDummyClosed"
                  }`}
                >
                  Reduce panel
                </Typography>
              </IconButton>
            </div>

            {/* <Typography variant="body1" component="span" className="reduce__panel" >Reduce panel</Typography> */}
          </Drawer>
        </Hidden>
        <main className={`${classes.content} main__content__outer__wrapper`}>
          <div className={`${classes.toolbar} main__content__inner__wrapper`} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.loggingOut()),
    setIntialState: () => dispatch(actions.setIntialState()),
    setInstanceIdInitalState: () =>
      dispatch(actions.resetEditInstanceInitials()),
    resetPaymentFlags: () => dispatch(actions.resetPaymentFlags()),
  };
};
const mapStateToProps = (state) => {
  //console.log("state info", state);
  return {
    userInfo: state?.login?.loginDetails?.name,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(MiniDrawer));
