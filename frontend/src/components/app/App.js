import React from "react";
import HelpPage from "./helpPage/HelpPage";
import MainPage from "./mainPage/MainPage";
import Navbar from "./navbar/Navbar";
import {Switch, Route} from "react-router-dom";
import ReduxToastr from "react-redux-toastr";
import HelpModal from "./helpPage/modal/HelpModal";

export default class App extends React.Component {
  render() {
    return (
      <section id='app-component'>
        <Navbar/>
        <ReduxToastr/>
        <HelpModal/>
        <Switch>
          <Route path='/:serviceName/:methodName' component={MainPage}/>
          <Route path='/' component={HelpPage}/>
        </Switch>
      </section>
    );
  }
}
