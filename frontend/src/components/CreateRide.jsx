import React, { useState, useEffect } from "react";
import "../styles/createRide.css";
import handlePlatzChange from "../handlers/handlePlatzChange";
import handleMinusClick from "../handlers/handleMinusClick";
import handlePlusClick from "../handlers/handlePlusClick";
import { useTranslation } from "react-i18next";

function CreateRide() {
  const { t } = useTranslation();
  const [platzValue, setPlatzValue] = useState(1);
  const [data, setData] = useState({ plätze: 1 });

  const postRide = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/v1/fahrten", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
    
      },
    });
  };

  return (
    <div className="form-style-5">
      <form onSubmit={postRide}>
        <fieldset>
          <legend>
            <span className="number">1</span> {t("createRide.header1")}
          </legend>
          <input
            type="text"
            name="name"
            placeholder={t("createRide.name")}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />

          <input
            type="text"
            name="ort"
            placeholder={t("createRide.startort")}
            onChange={(e) => setData({ ...data, ort: e.target.value })}
          />
          <input
            type="date"
            name="datum"
            onChange={(e) => setData({ ...data, datum: e.target.value })}
          />
          <input
            type="time"
            name="uhrzeit"
            placeholder="Uhrzeit *"
            onChange={(e) => setData({ ...data, zeit: e.target.value })}
          />
          <div className="plätze-container">
            <p className="p-plätze">{t("createRide.seats")}</p>
            <div className="stepper-container">
              <button
                className="stepper-btn minus-btn"
                type="button"
                onClick={() => handleMinusClick(setPlatzValue, setData, data)}
              >
                -
              </button>
              <input
                id="stepper-input"
                type="number"
                value={platzValue}
                max={6}
                min={1}
                name="plätze"
                placeholder="Freie plätze *"
                onChange={() => handlePlatzChange(setPlatzValue, setData, data)}
              />
              <button
                className="stepper-btn plus-btn"
                type="button"
                onClick={() => handlePlusClick(setPlatzValue, setData, data)}
              >
                +
              </button>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>
            <span className="number">2</span> {t("createRide.header2")}
          </legend>
          <textarea
            name="field3"
            placeholder={t("createRide.placeholderText")}
            onChange={(e) =>
              setData({ ...data, info: e.target.value.split("T")[0] })
            }
          ></textarea>
        </fieldset>
        <div className="button-container-flex">
          <button type="submit" id="submit-btn">
            {t("createRide.button")}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateRide;
