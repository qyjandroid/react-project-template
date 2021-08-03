
import React from "react";
import routerConfig from "./router/index";
import RouterUI from "@/router/RouterUI";

document.title = "React App";

class App extends React.Component {
    render() {
        return <>
            <RouterUI routers={routerConfig.routes} />
        </>
    }
}

export default App;