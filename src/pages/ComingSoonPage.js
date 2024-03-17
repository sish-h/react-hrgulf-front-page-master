import React, {Fragment} from "react";
import {useTranslation} from "react-i18next";

import LanguageButton from "components/LanguageButton";
import ComingSoon from "components/ComingSoon";
import Footer from "components/Footer";

import "./ComingSoonPage.scss";

export default () => {
  const {t} = useTranslation();

  return (
    <Fragment>
      <div className="section py-4">
        <ComingSoon />
      </div>
      <Footer/>
      <LanguageButton/>
    </Fragment>
  )
};