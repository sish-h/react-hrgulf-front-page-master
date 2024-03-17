import React from "react";
import {useTranslation} from "react-i18next";

import {changeLanguage} from "core/i18n";

import "./LanguageButton.scss";

export default () => {
  const {t} = useTranslation();

  const handleLanguageChange = e => {
    e.preventDefault();

    changeLanguage(t("CODE") === "en" ? "ar" : "en");
  };

  return (
    <a href="#" className="translate-button" onClick={handleLanguageChange}>
      {/*<i className="fa fa-language text-white" />*/}
      <img src={require("assets/img/language.png")} />
    </a>
  )
}