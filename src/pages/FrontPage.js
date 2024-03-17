import React, {Fragment} from "react";
import {useTranslation} from "react-i18next";
import {Helmet} from "react-helmet";

import images from "core/images";
import Footer from "components/Footer";
import LanguageButton from "components/LanguageButton";
import NavStick from "./partial/NavStick";

import "./FrontPage.scss";

export default () => {
  const {t} = useTranslation();

  return (
    <Fragment>
      <Helmet>
        <title>{t("GHCS")}</title>
      </Helmet>
      <div className="section py-4">
        <div className="px-4">
          <div className="row mt-4">
            <div className="col-6 text-left">
              <div className="pr-4">
                <img src={images.eliteResources} className="elite-resources-img"/>
              </div>
            </div>
            <div className="col-6 text-right">
              <div className="pl-4">
                <img src={images.ghcs} className="ghcs-img"/>
              </div>
            </div>
          </div>
        </div>
        <NavStick/>
      </div>
      <Footer/>
      <LanguageButton/>
    </Fragment>
  )
};
