import React, { Fragment } from 'react';
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();
    return (
        <Fragment>
            <div id="about" className="container-fluid">
                <div className="row">
                    <div className="col-sm-8 text-justify">
                        <h2>{t("about.about")}</h2><br />
                        <h4>{t("about.heading")}</h4><br />
                        <p>{t("about.details")}</p>
                        <br /><button className="btn btn-default btn-lg p-0 m-0"><a className="text-dark p-0 m-0" href="#contact">{t("about.button")}</a></button>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-exclamation-sign logo"></span>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-grey">
                <div className="row">
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-globe logo slideanim"></span>
                    </div>
                    <div className="col-sm-8">
                        <h2>{t("about.values")}</h2><br />
                        <h4><strong>{t("about.mission")}</strong> {t("about.md")}</h4><br />
                        <p><strong>{t("about.vision")}</strong> {t("about.vd")}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default About;
