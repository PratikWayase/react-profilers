
import React, { Profiler } from "react";
import Header from "./header";

const callback = (id, phase, actualDuration) => {
    console.log(`profiler [${id}]-phase:${phase},render duration:${actualDuration}`)
}

function App() {
    return (
        <div className="App">
            <Profiler id="Header" onRender={callback}>
                <Header/>
            </Profiler>
        </div>
    )
}

export default App