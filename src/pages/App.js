import React from 'react';
import {useTranslation} from "react-i18next";
import {BrowserRouter} from "react-router-dom";

import Router from "components/Router";
import "core/i18n";

import './App.scss';

function App() {
  const {t} = useTranslation();

  const direction = t("DIRECTION");

  return (
    <BrowserRouter>
      <div dir={direction} className={direction === "rtl" ? "yp-100 rtl-content" : "yp-100"}>
        <Router/>
      </div>
    </BrowserRouter>
  );
}

export default App;
