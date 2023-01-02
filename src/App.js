import React, { useState } from "react";
import Count from "./HigherOrder/home";
import ReciveLogic1 from "./HigherOrder/ReciveLogic1"
import ReciveLogic2 from "./HigherOrder/ReciveLoginc2"

function App() {
    return (
        <>
            <ReciveLogic1 component={Count} />
            <ReciveLogic2 component={Count} />
        </>
    )
}
export default App


