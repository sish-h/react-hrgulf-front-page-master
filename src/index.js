import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from 'core/serviceWorker';
import Loading from "./components/Loading";
import App from 'pages/App';

import "bootstrap-css-only/css/bootstrap.css";
import "@fortawesome/fontawesome-pro/css/all.css";
import 'assets/index.scss';


ReactDOM.render(
  <Suspense fallback={<Loading/>}>
    <App/>
  </Suspense>,
  document.getElementById("root")
);

serviceWorker.unregister();
