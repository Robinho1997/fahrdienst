import React from "react";
import "../styles/allRides.css";
import { useTranslation } from "react-i18next";

function Ride(props) {
  const { t } = useTranslation();

  const deleteRide = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5000/api/v1/fahrten/${props.name}`, {
      method: "DELETE",
    });
    window.location.reload();
  };

  return (
    <div className="ride-container">
      <div className="ride-row">
        <p>{props.datum}</p>

        <p> {props.zeit} Uhr</p>
      </div>

      <div className="ride-row">
        <p>
          {props.plätze}{" "}
          {props.plätze == 1
            ? `${t("rides.availableSeat1")}`
            : `${t("rides.availableSeat2")}`}
        </p>
        <p>{props.name}</p>
      </div>
      <div className="ride-row button-row">
        <button className="mitfahren-btn">
          <span className="material-symbols-outlined">directions_car</span>{t("rides.button")}
        </button>
        <button onClick={deleteRide} className="delete-btn">
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
      {props.info && <p> {props.info}</p>}
    </div>
  );
}

export default Ride;
