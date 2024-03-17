import React from "react";
import {useTranslation} from "react-i18next";

import Loader from "./partial/Loader";

import "./Loading.scss";

export default (props) => {

  const {t} = useTranslation();

  return (
    <div className="loading-page">
      <Loader />
    </div>
  );
}
