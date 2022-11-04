import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Header from "./Header";
import { Route, Switch } from "react-router-dom";


export default function App() {
    return(<>
    <Header /><Switch>
            <Route exact from="/Home" render={props => <Home {...props}/>} />
            <Route exact path="/contact" render={props => <Contact {...props}/>} />
            <Route exact path="/about" render={props => <About {...props} />} />
            
        </Switch>
        </>
  );
}
