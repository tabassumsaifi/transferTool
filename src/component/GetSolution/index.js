import ListOfSolution from "./component/solutionList";
import SimpleBackdrop from "../../loader/loading";
import { useSelector } from "react-redux";
import Main from "../../common/layout/header";
import "../style.css";
import { useHistory } from "react-router-dom";

const CompSolutionList = (props) => {
  const loader = useSelector((state) => state.loader.loader);
  const history = useHistory();
  //   console.log('history', history.location.pathname)

  //   alert(loader)
  return (
    <>
      <Main path={history.location.pathname}>
        <div className="main__migration__wrapper">
          {loader && <SimpleBackdrop />}
          <ListOfSolution />
        </div>
      </Main>
    </>
  );
};

export default CompSolutionList;
