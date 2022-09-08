import React from "react";
import Main from '../../common/layout/header'
import { useHistory } from "react-router-dom";
import TopNavigation from "./segments/topNavigartion";

const StartMigration = () =>{
    const history = useHistory();
    console.log('history', history.location.pathname)

    return(
        <>
        <Main path = {history.location.pathname}>
        <TopNavigation />

        </Main>
        </>
    )
}

export default StartMigration