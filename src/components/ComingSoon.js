import React from "react";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

import Error from "./partial/Error";

import "./ComingSoon.scss";

export default (props) => {
  const {days} = useParams();
  const {t} = useTranslation();

  return (
    <div className="loading-page">
      <Error heading={t("COMING_SOON.COMING_SOON")} message={t("COMING_SOON.REMAINS", {days})} />
    </div>
  );
}
