import React from 'react';
import { useTranslation } from "react-i18next";

const Portfolio = () => {
    const { t } = useTranslation();
    return (
        <div id="portfolio" class="container-fluid text-center bg-grey">
            <h2>{t("portfolio.header")}</h2><br />
            <h4>{t("portfolio.subheader")}</h4>
            <div class="row text-center slideanim">
                <div class="col-sm-4">
                    <div class="thumbnail">
                        <img src={require('../assets/paddy.png')} alt="Electric Paddy Transplanter" width="400" height="300" />
                        <p><strong>{t("portfolio.equipments1")}</strong></p>
                        <p>{t("portfolio.data1")}</p>
                    </div>
                </div>
                <div class="col-sm-4">

                    <div class="thumbnail">
                        <img src={require('../assets/tractor.png')} alt="Tractor" width="400" height="300" />
                        <p><strong>{t("portfolio.equipments2")}</strong></p>
                        <p>{t("portfolio.data2")}</p>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="thumbnail">
                        <img src={require('../assets/baler.png')} alt="Round Straw Baler" width="400" height="300" />
                        <p><strong>{t("portfolio.equipments3")}</strong></p>
                        <p>{t("portfolio.data3")}</p>
                    </div>
                </div>
            </div><br />
        </div>

    )
}

export default Portfolio;