import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Switch} from "react-router-dom";


import Api_qr from "./components/api_qr";


function App(){
return(
  <Router>
    <Switch>
   
  <Route path="/api" exact><Api_qr/></Route>
  </Switch>
  </Router>

)
}

export default App;