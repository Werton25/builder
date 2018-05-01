import React from "react";
import HelpPage from "./helpPage/HelpPage";
import MainPage from "./mainPage/MainPage";
import Navbar from "./navbar/Navbar";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import ReduxToastr from "react-redux-toastr";

export default class App extends React.Component {
  render() {
    return (
      <section id='app-component'>
        <Navbar/>
        <ReduxToastr/>
        <Switch>
          <Route path='/:serviceName/:methodName' component={MainPage}/>
          <Route path='/' component={HelpPage}/>
        </Switch>
      </section>
    );
  }
}