import React from "react"
import { Route, Switch } from "react-router-dom"
//pages
import Autorizacija from "./Autorizacija"
import Block from './ekonomiskaisblocks'
import Dashboard from "./dashboard"
import Dati from "./Dati"
//components
import Header from "./Header"
import Footer from "./footer"


export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/autorizacija" render={props => <Autorizacija {...props} />} />
        <Route exact path="/ekonomiskaisblocks" render={props => <Block {...props} />} />
        <Route exact from="/dashboard" render={props => <Dashboard {...props} />} />
        <Route exact path="/dati" render={props => <Dati {...props} />} />
      </Switch>
      <Footer/>
    </>
  );
}
