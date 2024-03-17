import React, {Fragment} from "react";
import {useTranslation} from "react-i18next";

import Error404 from "components/Error404";
import LanguageButton from "components/LanguageButton";

import "./Error404Page.scss";

export default () => {
  const {t} = useTranslation();

  return (
    <Fragment>
      <div className="section">
        <Error404 />
      </div>
      <LanguageButton/>
    </Fragment>
  )
};