import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Content} from "./content";
import {Footer} from "../../footer";
import {Header} from "../../header";
import {UIStartScreen} from "@ui/layouts/start-screen";

const StartScreen = () => {
  return (
    <Router>
      <UIStartScreen>
        <Header />
        <Switch>
          <Route path={"/start"}>
            <Content />
          </Route>
          <Route path={"/history"}> History </Route>
        </Switch>
        <Footer />
      </UIStartScreen>
    </Router>
  );
};

export default StartScreen;
