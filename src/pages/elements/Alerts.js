import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleWidget from "../../components/PageTitle/PageTitleWidget";
import FooterOne from "../../components/Footer/FooterOne";
import Alert from "../../elements/Alert";

const Alerts = () => (
  <Loader>
    <HeaderOne />
    <PageTitleWidget title="Alerts" />
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h2 className="mb-30">Outline Alerts</h2>
            <div className="outline-alert alert alert-success" role="alert">
              Well done! you successfully read this important alert message.
            </div>
            <div className="outline-alert alert alert-info" role="alert">
              Heads up! this alert needs your attention, but it's not super
              important.
            </div>
            <div className="outline-alert alert alert-warning" role="alert">
              Warning! better check yourself, you're not looking too good.
            </div>
            <div className="outline-alert alert alert-danger" role="alert">
              Oh snap! change a few things up and try submitting again.
            </div>
            <div className="mt-50"></div>
            <h2 className="mb-30">Default Alerts</h2>
            <div className="alert alert-success border-radius-25" role="alert">
              Well done! you successfully read this important alert message.
            </div>
            <div className="alert alert-info border-radius-25" role="alert">
              Heads up! this alert needs your attention, but it's not super
              important.
            </div>
            <div className="alert alert-warning border-radius-25" role="alert">
              Warning! better check yourself, you're not looking too good.
            </div>
            <div className="alert alert-danger border-radius-25" role="alert">
              Oh snap! change a few things up and try submitting again.
            </div>
            <div className="mt-50"></div>
            <h2 className="mb-30">Dismissible Alerts</h2>
            <Alert
              type="success"
              text="Well done! you successfully read this important alert message."
            />
            <Alert
              type="info"
              text="Well done! you successfully read this important alert message."
            />
            <Alert
              type="warning"
              text="Well done! you successfully read this important alert message."
            />
            <Alert
              type="danger"
              text="Well done! you successfully read this important alert message."
            />
          </div>
        </div>
      </div>
    </section>
    <FooterOne />
  </Loader>
);

export default Alerts;
