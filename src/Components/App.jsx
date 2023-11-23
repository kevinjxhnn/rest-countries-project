
import "../index.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingScreen from "./Loader";

import CountryCard from "./CountryCard";
import { SelectedCountry } from "./SelectedCountry";
import Header from "./Header";
import SearchFilter from "./SearchFilter";

export const isDarkContext = React.createContext();
export const countryAllContext = React.createContext();

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [searchRegion, setSearchRegion] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const listOfData = await response.json();
        setCountriesData(listOfData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const backgroundColor = isDark ? "#2b3845" : "";
  document.body.style.backgroundColor = backgroundColor;


  const filterCountry = countriesData
    .filter((country) =>
      country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
    )
    .filter((country) => country.region.includes(searchRegion));

  return (
    <div
      style={{
        backgroundColor: isDark ? "#2b3845" : ""
      }}
    >
      {loading ? (
        <LoadingScreen isDark={isDark} />
      ) : (
        <>
          <Header isDark={isDark} setIsDark={setIsDark} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchFilter
                    isDark={isDark}
                    setSearchCountry={setSearchCountry}
                    setSearchRegion={setSearchRegion}
                    searchCountry={searchCountry}
                    searchRegion={searchRegion}
                  />

                  <countryAllContext.Provider value={filterCountry}>
                    <isDarkContext.Provider value={isDark}>
                      <CountryCard />
                    </isDarkContext.Provider>
                  </countryAllContext.Provider>
                </>
              }
            ></Route>
            <Route
              path="country/:id"
              element={
                <countryAllContext.Provider value={filterCountry}>
                  <isDarkContext.Provider value={isDark}>
                    <SelectedCountry />
                  </isDarkContext.Provider>
                </countryAllContext.Provider>
              }
            ></Route>
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
