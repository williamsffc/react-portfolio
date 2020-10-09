import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Portfolio } from "./Pages/Portfolio";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { NoMatch } from "./Pages/NoMatch";
import { Layout } from "./components/Layout";
import { NavBar } from "./components/NavBar";
import { Jumbotron } from "./components/Jumbotron";
import { Footer } from "./components/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Jumbotron />
        <Layout>
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route
                exact
                path={process.env.PUBLIC_URL + "/"}
                component={Home}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/portfolio"}
                component={Portfolio}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/about"}
                component={About}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/contact"}
                component={Contact}
              />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
