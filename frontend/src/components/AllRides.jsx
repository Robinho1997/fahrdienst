import React, { useEffect, useState } from "react";
import Ride from "./Ride";
import "../styles/allRides.css";
import { useTranslation } from "react-i18next";
function AllRides() {
  const { t } = useTranslation();
  const [allRides, setAllRides] = useState();
  const [anzahl, setAnzahl] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/fahrten")
      .then((res) => res.json())
      .then((data) => {
        data = data.ride;
        setAnzahl(data.length);
        console.log(data);
        let rides = data.map((ride, index) => {
          return (
            <Ride
              key={index}
              name={ride.name}
              plätze={ride.plätze}
              datum={ride.datum}
              zeit={ride.zeit}
              info={ride.info}
            />
          );
        });
        setAllRides(rides);
        console.log(allRides);
      });
  }, []);

  return (
    <div>
      <p className="anzahl">
        {t("rides.quantityRidesText1")} {anzahl} {t("rides.quantityRidesText2")}
      </p>
      <div className="all-rides-container">{allRides}</div>
    </div>
  );
}

export default AllRides;
