import React from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

import routes from "core/routes";
import images from "core/images";

import "./NavStick.scss";

export default () => {
  const {t} = useTranslation();

  return (
    <div className="nav-container mx-auto mt-5 mt-md-4 mt-lg-n3">
      <div className="row">
        <div className="col-3 nav-column px-0 pl-3">
          <div className="human-sec text-center">
            {/*<a href={routes.redirect.hrgulfOrg.human} target="_blank">*/}
            {/*  <p>{t("REDIRECT.HUMAN_GATEWAY_1")}</p>*/}
            {/*  <p>{t("REDIRECT.HUMAN_GATEWAY_2")}</p>*/}
            {/*</a>*/}
            <Link to={`${routes.comingSoon}/70`}>
              <p>{t("REDIRECT.HUMAN_GATEWAY_1")}</p>
              <p>{t("REDIRECT.HUMAN_GATEWAY_2")}</p>
            </Link>
          </div>
        </div>
        <div className="col-6 nav-column px-0">
          <div className="knowledge-sec text-center">
            <a href={routes.redirect.hrgulfOrg.knowledge} target="_blank">
              <p>{t("REDIRECT.KNOWLEDGE_GATEWAY_1")}</p>
              <p>{t("REDIRECT.KNOWLEDGE_GATEWAY_2")}</p>
            </a>
          </div>
          <div className={`elite-sec-${t("CODE")} elite-sec text-center`}>
            <a href={routes.redirect.eliteResourceCenter} target="_blank">
              {/*<p>{t("REDIRECT.ELITE_RESOURCES_CENTER_1")}</p>*/}
              {/*{t("CODE") && <p>{t("REDIRECT.ELITE_RESOURCES_CENTER_2")}</p>}*/}
              <img src={t("CODE") === "en" ? images.ercEn : images.ercAr}/>
            </a>
          </div>
          <div className="recruitment-sec text-center">
            {/*<a href={routes.redirect.hrgulfOrg.recruitment} target="_blank">*/}
            {/*  <p>{t("REDIRECT.RECRUITMENT_GATEWAY_1")}</p>*/}
            {/*  <p>{t("REDIRECT.RECRUITMENT_GATEWAY_2")}</p>*/}
            {/*</a>*/}
            <Link to={`${routes.comingSoon}/45`}>
              <p>{t("REDIRECT.RECRUITMENT_GATEWAY_1")}</p>
              <p>{t("REDIRECT.RECRUITMENT_GATEWAY_2")}</p>
            </Link>
          </div>
        </div>
        <div className="col-3 nav-column px-0 pr-3">
          <div className="elearning-sec text-center">
            <a href={routes.redirect.hrgulfOrg.elearning} target="_blank">
              <p>{t("REDIRECT.ELEARNING_GATEWAY_1")}</p>
              <p>{t("REDIRECT.ELEARNING_GATEWAY_2")}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}