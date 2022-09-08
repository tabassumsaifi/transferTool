import React from "react";
import Main from "../../common/layout/header";
import Payment from "./component/payComp";
import { useHistory } from "react-router-dom";

const PayComponent = ({match}) => {
  //const loader = useSelector((state)=>state.loader.loader);
  const history = useHistory();
  console.log("history", history.location.pathname);
  const instanceId = match.params.id
  return (
    <>
      <Main path={history.location.pathname} match={match.params.id}>
        <div className="main__migration__wrapper">
          {/* {loader&&<SimpleBackdrop />} */}
          <Payment instanceId={instanceId}/>
        </div>
      </Main>
    </>
  );
};

export default PayComponent;
