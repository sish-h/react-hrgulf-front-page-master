import React, {Fragment} from "react";
import {useTranslation} from "react-i18next";
import ReactTooltip from "react-tooltip";

import consts from "core/consts";

import "./Footer.scss";

export default () => {
  const {t} = useTranslation();

  return (
    <div className="footer-container">
      <ul className="social-links mb-0 px-1 text-white">
        <li>
          <a>{t("CONTACT_US")}</a>
        </li>
        <li>
          <a href={`tel:${consts.socials.phone}`} data-tip={consts.socials.phone} ><i className="fa fa-phone" /></a>
        </li>
        <li>
          <a href={`mailto:${consts.socials.email}`} data-tip={consts.socials.email}><i className="fa fa-envelope" /></a>
        </li>
        <li>
          <a href={`${consts.socials.website}`} target="_blank" data-tip={consts.socials.website}><i className="fa fa-globe" /></a>
        </li>
        <li>
          <a href={`${consts.socials.address}`} target="_blank" data-tip={t("LABELS.ADDRESS")}><i className="fa fa-map-marker-alt" /></a>
        </li>
        <li>
          <a href={`${consts.socials.twitter}`} target="_blank" data-tip={t("LABELS.TWITTER")}><i className="fab fa-twitter" /></a>
        </li>
        <li>
          <a href={`${consts.socials.likedin}`} target="_blank" data-tip={t("LABELS.LINKEDIN")}><i className="fab fa-linkedin-in" /></a>
        </li>
        <ReactTooltip place="top" effect="solid"/>
      </ul>
    </div>
  )
};
