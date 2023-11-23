import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { isDarkContext, countryAllContext } from "./App";

export const SelectedCountry = () => {
  const darkContext = useContext(isDarkContext);
  const countries = React.useContext(countryAllContext);

  const { id } = useParams();

  const navigate = useNavigate();

  const country = countries.find((country) => country.cca3.includes(id));

  return (
    <div className="selected-country">
      <div
        className="navigate-back"
        onClick={() => navigate(-1)}
        style={{
          color: darkContext ? "white" : "hsl(200, 15%, 8%)",
        }}
      >
        <p
          style={{ color: darkContext ? "white" : "hsl(200, 15%, 8%)" }}
          className="material-symbols-outlined"
        >
          arrow_back
        </p>
        <p style={{ color: darkContext ? "white" : "hsl(200, 15%, 8%)" }}>
          Go back
        </p>
      </div>
      <div className="selected-container">
        <div className="selected-flag">
          <img className="selected-flag-img" src={country.flags.svg}></img>
        </div>

        <div className="selected-information">
          <div
            className="selected-country-name"
            style={{ color: darkContext ? "white" : "hsl(200, 15%, 8%)" }}
          >
            <h2>{country.name.common}</h2>
          </div>
          <div className="info-container">
            <div className="part1">
              <div className="info-selected">
                <p
                  className="selected-country-info-heading"
                  style={{
                    color: darkContext ? "white" : "hsl(200, 15%, 8%)",
                  }}
                >
                  Native Name:&nbsp;
                </p>
                <p
                  className="selected-country-info"
                  style={{
                    color: darkContext ? "white" : "hsl(200, 15%, 8%)",
                  }}
                >
                  {Object.keys(country.name).includes("nativeName")
                    ? Object.values(country.name.nativeName)[0].official
                    : ""}
                </p>
              </div>
              <div className="info-selected">
                <p
                  className="selected-country-info-heading"
                  style={{
                    color: darkContext ? "white" : "hsl(200, 15%, 8%)",
                  }}
                >
                  Population:&nbsp;
                </p>
                <p
                  className="selected-country-info"
                  style={{
                    color: darkContext ? "white" : "hsl(200, 15%, 8%)",
                  }}
                >
                  {country.population}
                </p>
              </div>
              <div className="info-selected">
                <p
                  className="selected-country-info-heading"
                  style={{
                    color: darkContext ? "white" : "hsl(200, 15%, 8%)",
                  }}
                >
                  Region:&nbsp;
                </p>
                <p
                  className="selected-country-info"
                  style={{
                    color: darkContext ? "white" : "hsl(200, 15%, 8%)",
                  }}
                >
                  {country.region}
                </p>
              </div>
              <div className="info-selected">
                <p
                  className="selected-country-info-heading"
                  style={{
                    color: darkContext ? "white" : "hsl(200, 15%, 8%)",
                  }}
                >
                  Sub Region:&nbsp;
                </p>
                <p
                  className="selected-country-info"
                  style={{
                    color: darkContext ? "white" : "hsl(200, 15%, 8%)",
                  }}
                >
                  {country.subregion}
                </p>
              </div>
              <div className="info-selected">
                <p
                  className="selected-country-info-heading"
                  style={{
                    color: darkContext ? "white" : "hsl(200, 15%, 8%)",
                  }}
                >
                  Capital:&nbsp;
                </p>
                <p
                  className="selected-country-info"
                  style={{
                    color: darkContext ? "white" : "hsl(200, 15%, 8%)",
                  }}
                >
                  {country.capital}
                </p>
              </div>
            </div>
            <div className="part2">
              <div className="info-selected">
                <p
                  className="selected-country-info-heading"
                  style={{
                    color: darkContext ? "white" : "hsl(200, 15%, 8%)",
                  }}
                >
                  Top Level Domain:&nbsp;
                </p>
                <p
                  className="selected-country-info"
                  style={{
                    color: darkContext ? "white" : "hsl(200, 15%, 8%)",
                  }}
                >
                  {Object.keys(country).includes("tld")
                    ? country.tld.toString()
                    : ""}
                </p>
              </div>
              <div className="info-selected">
                <p
                  className="selected-country-info-heading"
                  style={{
                    color: darkContext ? "white" : "hsl(200, 15%, 8%)",
                  }}
                >
                  Currencies:&nbsp;
                </p>
                <p
                  className="selected-country-info"
                  style={{
                    color: darkContext ? "white" : "hsl(200, 15%, 8%)",
                  }}
                >
                  {Object.keys(country).includes("currencies")
                    ? Object.values(country.currencies)[0].name
                    : ""}
                </p>
              </div>
              <div className="info-selected">
                <p
                  className="selected-country-info-heading"
                  style={{
                    color: darkContext ? "white" : "hsl(200, 15%, 8%)",
                  }}
                >
                  Languages:&nbsp;
                </p>
                <p
                  className="selected-country-info"
                  style={{
                    color: darkContext ? "white" : "hsl(200, 15%, 8%)",
                  }}
                >
                  {Object.keys(country).includes("languages")
                    ? Object.values(country.languages).toString()
                    : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
