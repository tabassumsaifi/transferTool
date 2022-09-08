import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./component/home/home";
import CenteredGrid from "./component/login/loginScreen";
import ProtectedRoute from "./protectedRoute/protectedRoute";
import PasswordReset from "./component/login/passwordReset";
import PayComponent from "./component/payment/index";
import CompSolutionList from "./component/GetSolution/index";
//import InstaneList from './component/GetSolution/instance'
import HeaderNavBar from "./common/layout/headerNav";
import InstanseList from "./component/getInstances";
import NewMigration from "./component/newMigration/newMigration";
import ToRedirect from "./component/toRedirect";
import MatchFields from "./component/matchField/matchFields";
import EditInstance from "./component/editInstance/editInstance";
import MigrationReport from "./component/migrationReport/migrationReport";
import StartMigration from "./component/startMigration";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CenteredGrid} />
        {/* <
       CenteredGrid  PasswordReset/> Instance
      */}
        <Route exact path="/PasswordRset/" component={PasswordReset} />
        <Route exact path="/header" component={HeaderNavBar} />
        {/* just after login */}
        <ProtectedRoute exact path="/home" component={HomePage} />
        <ProtectedRoute
          exact
          path="/migration-payment/:id"
          component={PayComponent}
        />

        <ProtectedRoute exact path="/solution" component={CompSolutionList} />
        <ProtectedRoute exact path="/migration" component={InstanseList} />
        <ProtectedRoute path="/new-migration/" component={NewMigration} />
        {/* <Route exact path="/responsive" component={ResponsiveDrawer} />       */}
        <ProtectedRoute path="/toredirect" component={ToRedirect} />
        <ProtectedRoute path="/match-field/:id" component={MatchFields} />
        <ProtectedRoute path="/edit-instance/:id" component={EditInstance} />
        <ProtectedRoute
          path="/migration-report/:id"
          component={MigrationReport}
        />
        <ProtectedRoute path="/start-migration" component={StartMigration} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
