import React from "react";
import Learn from "./components/Learn/Learn";
import Game from  "./components/game/index.html";


import Navbar from "./components/Navbar";

function App() {
    return(
        <>
        {/* <div>
        <Navbar/>
        </div> */}
        <div>
        <Learn/>
        <Game/>
        </div>
        </>
    )

 
}

export default App;
