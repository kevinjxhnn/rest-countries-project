import React from "react";
import { useNavigate } from "react-router-dom";
import { isDarkContext, countryAllContext } from "./App";

function CountryCard() {
  const darkContext = React.useContext(isDarkContext);
  const countriesDataContext = React.useContext(countryAllContext);

  const navigate = useNavigate();

  return (
    <div className="countries-container">
      {countriesDataContext.length != 0 ? (
        countriesDataContext.map((country) => {
          return (
            <div
              className="country-card"
              key={country.name.common}
              onClick={() => {
                navigate(`country/${country.cca3}`);
              }}
              style={{
                backgroundColor: darkContext ? "#2f3d4b" : "white",
              }}
            >
              <div className="flag">
                <img src={country.flags.png}></img>
              </div>
              <div className="card-info">
                <div
                  className="country-name"
                  style={{ color: darkContext ? "white" : "#2f3d4b" }}
                >
                  <h3>{country.name.common}</h3>
                </div>
                <div className="info">
                  <h4
                    className="country-info-heading"
                    style={{
                      color: darkContext ? "white" : "#2f3d4b",
                    }}
                  >
                    Population:&nbsp;
                  </h4>
                  <p
                    className="country-info"
                    style={{
                      color: darkContext ? "white" : "#2f3d4b",
                    }}
                  >
                    {country.population}
                  </p>
                </div>
                <div className="info">
                  <h4
                    className="country-info-heading"
                    style={{
                      color: darkContext ? "white" : "#2f3d4b",
                    }}
                  >
                    Region:&nbsp;
                  </h4>
                  <p
                    className="country-info"
                    style={{
                      color: darkContext ? "white" : "#2f3d4b",
                    }}
                  >
                    {country.region}
                  </p>
                </div>
                <div className="info">
                  <h4
                    className="country-info-heading"
                    style={{
                      color: darkContext ? "white" : "#2f3d4b",
                    }}
                  >
                    Capital:&nbsp;
                  </h4>
                  <p
                    className="country-info"
                    style={{
                      color: darkContext ? "white" : "#2f3d4b",
                    }}
                  >
                    {country.capital}
                  </p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div
          className="no-data"
          style={{ color: darkContext ? "white" : "#2f3d4b" }}
        >
          No Such Countries Found
        </div>
      )}
    </div>
  );
}

export default CountryCard;
