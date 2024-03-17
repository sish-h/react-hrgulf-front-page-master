import React, {lazy} from "react";
import {Switch, Route} from "react-router-dom";

import routes from "core/routes";
import Error404Page from "pages/common/Error404Page";

const FrontPage = lazy(() => import("pages/FrontPage"));
const ComingSoonPage = lazy(() => import("pages/ComingSoonPage"));

export default () => (
  <Switch>
    <Route path={routes.front} exact component={FrontPage}/>
    <Route path={`${routes.comingSoon}/:days`} exact component={ComingSoonPage}/>
    <Route component={Error404Page}/>
  </Switch>
);
