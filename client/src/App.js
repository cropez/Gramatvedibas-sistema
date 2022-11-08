import React from "react";
import Dashboard from "./dashboard";
import Autorizacija from "./Autorizacija";
import Dati from "./Dati";
import Header from "./Header";
import { Route, Switch } from "react-router-dom";

export default function App() {
    return(<>
    <Header /><Switch>
            <Route exact from="/dashboard" render={props => <Dashboard {...props}/>} />
            <Route exact path="/autorizacija" render={props => <Autorizacija {...props}/>} />
            <Route exact path="/dati" render={props => <Dati {...props} />} />
            
        </Switch>
        </>
  );
}
