import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
//pages
import Autorizacija from "./pages/Autorizacija"
import Dashboard from "./pages/dashboard"
import Block from './pages/block'
import Dati from "./pages/Dati"
import Profile from "./pages/profile"
//components
import Header from "./components/Header"
import Footer from "./components/footer"


export default function App() {
  const isAuth = !!window.localStorage.getItem('auth')
  console.log(isAuth)
  return (
    <>
      <Header />
      <Switch>
        {
          isAuth
            ? <Redirect
              exact
              from="/"
              to="/dashboard"
            />
            : <Route
              exact
              path="/"
              render={props => <Autorizacija {...props} />}
            />
        }
        <Route exact from="/dashboard" render={props => <Dashboard {...props} />} />
        <Route exact path="/block" render={props => <Block {...props} />} />
        <Route exact path="/dati" render={props => <Dati {...props} />} />
        <Route exact path="/profile" render={props => <Profile {...props} />} />
      </Switch>
      <Footer />
    </>
  );
}
