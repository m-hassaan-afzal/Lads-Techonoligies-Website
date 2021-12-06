import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import CreativeOnePage from "./pages/home/CreativeOnePage";


import Page404 from "./pages/others/Page404";



import ScrollToTop from "./helpers/ScrollToTop";
import Contact from "./components/ContactUs/ContactUs"
function App() {

  return (
    <Router basename={"/"}>
      <ScrollToTop>
        <Switch>
              
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={CreativeOnePage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contactus`}
            component={Contact}
          />

          <Route component={Page404} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
