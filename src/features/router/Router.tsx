import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Content} from "@features/layouts/start-screen/content";
import {Footer} from "@features/footer";
import {Header} from "@features/header";
import {UIStartScreen} from "@ui/layouts/start-screen";
import {Settings} from "@features/layouts/settings";
import {History} from "@features/layouts/history";

import routes from "@routes";

const AppRouter = () => {
  return (
    <Router>
      <UIStartScreen>
        <Header />
        <Switch>
          <Route path={routes.start}>
            <Content />
          </Route>
          <Route path={routes.history}>
            <History />
          </Route>
          <Route path={routes.settings}>
            <Settings />
          </Route>
        </Switch>
        <Footer />
      </UIStartScreen>
    </Router>
  );
};

export default AppRouter;
