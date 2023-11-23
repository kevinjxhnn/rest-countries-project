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
                backgroundColor: darkContext ? "hsl(209, 23%, 24%)" : "white",
              }}
            >
              <div className="flag">
                <img src={country.flags.png}></img>
              </div>
              <div className="card-info">
                <div
                  className="country-name"
                  style={{ color: darkContext ? "white" : "hsl(200, 15%, 8%)" }}
                >
                  <h3>{country.name.common}</h3>
                </div>
                <div className="info">
                  <h4
                    className="country-info-heading"
                    style={{
                      color: darkContext ? "white" : "hsl(200, 15%, 8%)",
                    }}
                  >
                    Population:&nbsp;
                  </h4>
                  <p
                    className="country-info"
                    style={{
                      color: darkContext ? "white" : "hsl(200, 15%, 8%)",
                    }}
                  >
                    {country.population}
                  </p>
                </div>
                <div className="info">
                  <h4
                    className="country-info-heading"
                    style={{
                      color: darkContext ? "white" : "hsl(200, 15%, 8%)",
                    }}
                  >
                    Region:&nbsp;
                  </h4>
                  <p
                    className="country-info"
                    style={{
                      color: darkContext ? "white" : "hsl(200, 15%, 8%)",
                    }}
                  >
                    {country.region}
                  </p>
                </div>
                <div className="info">
                  <h4
                    className="country-info-heading"
                    style={{
                      color: darkContext ? "white" : "hsl(200, 15%, 8%)",
                    }}
                  >
                    Capital:&nbsp;
                  </h4>
                  <p
                    className="country-info"
                    style={{
                      color: darkContext ? "white" : "hsl(200, 15%, 8%)",
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
          style={{ color: darkContext ? "white" : "hsl(200, 15%, 8%)" }}
        >
          No Such Countries Found
        </div>
      )}
    </div>
  );
}

export default CountryCard;
