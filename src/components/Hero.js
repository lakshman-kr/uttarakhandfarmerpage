import React from 'react';
import { useTranslation } from "react-i18next";

const Hero = () => {
    const { t } = useTranslation();

    return (
        <div className="jumbotron text-center">
            <h1>{t("hero.main")}</h1>
            <p>{t("hero.sub")}</p>
        </div>
    )
}

export default Hero;

