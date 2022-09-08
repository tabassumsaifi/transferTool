import SolutionInatance from "./component/instance";
import SimpleBackdrop from "../../loader/loading";
import { useSelector } from "react-redux";
import Main from "../../common/layout/header";
import { useHistory } from "react-router-dom";

const InstanseList = () => {
  const loader = useSelector((state) => state.loader.loader);
  const history = useHistory();
  //console.log('history', history.location.pathname)

  //   alert(loader)
  return (
    <>
      <Main path={history.location.pathname}>
        <div className="main__migration__wrapper">
          {/* <Navbar   /> */}
          {loader && <SimpleBackdrop />}
          <SolutionInatance />
        </div>
      </Main>
    </>
  );
};

export default InstanseList;
