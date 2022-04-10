import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../App.css';
import { useTranslation } from "react-i18next";

const Services = () => {
    const { t } = useTranslation();
    return (
        <div id="services" className="container-fluid text-center">
            <h2>{t("services.header")}</h2>
            <h4>{t("services.subheader")}</h4>
            <h5>{t("services.subsubheader")}</h5>
            <br />
            <div className="row slideanim">
                <div
                 className="col-sm-4">
                    <span className="logo-small"><img src={require('../assets/rice.png')} alt="Rice"/></span>

                    <h4>{t("services.rice")}</h4>
                    <Popup trigger={<button className="btn btn-default btn-lg p-0 m-0"> {t("services.ReadMore")}</button>} modal>
                        <p>{t("services.rd")}</p>
                    </Popup>   
                </div>
                <div className="col-sm-4">
                    <span className="logo-small"><img src={require('../assets/wheat.png')} alt="Wheat"/></span>
                    <h4>{t("services.wheat")}</h4>
                    <Popup trigger={<button className="btn btn-default btn-lg p-0 m-0"> {t("services.ReadMore")}</button>} modal>
                        <p>{t("services.wd")}</p>
                    </Popup>
                </div>
                <div className="col-sm-4">
                    <span className="logo-small"><img src={require('../assets/sugarcane.png')} alt="Sugarcane"/></span>
                    <h4>{t("services.Sugarcane")}</h4>
                    <Popup trigger={<button className="btn btn-default btn-lg p-0 m-0"> {t("services.ReadMore")}</button>} modal>
                        <p>{t("services.sud")}</p>
                    </Popup>
                </div>
            </div>
            <br /><br />
            <div className="row slideanim">
                <div className="col-sm-4">
                    <span className="logo-small"><img src={require('../assets/maize.png')} alt="Maize"/></span>
                    <h4>{t("services.Maize")}</h4>
                    <Popup trigger={<button className="btn btn-default btn-lg p-0 m-0"> {t("services.ReadMore")}</button>} modal>
                        <p>{t("services.md")}</p>
                    </Popup>
                </div>
                <div className="col-sm-4">
                    <span className="logo-small"><img src={require('../assets/pulses.png')} alt="Soybean"/></span>
                    <h4>{t("services.Soybean")}</h4>
                    <Popup trigger={<button className="btn btn-default btn-lg p-0 m-0"> {t("services.ReadMore")}</button>} modal>
                        <p>{t("services.sd")}</p>
                    </Popup>
                </div>
                <div className="col-sm-4">
                    <span className="logo-small"><img src={require('../assets/cauliflower.png')} alt="Pulses"/></span>
                    <h4 style={{color: '#303030'}}>{t("services.Pulses")}</h4>
                    <Popup trigger={<button className="btn btn-default btn-lg p-0 m-0"> {t("services.ReadMore")}</button>} modal>
                        <p>{t("services.pd")}</p>
                    </Popup>
                </div>
            </div>
        </div>
    )
}

export default Services;