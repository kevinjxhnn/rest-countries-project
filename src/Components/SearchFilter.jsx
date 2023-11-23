import React from "react";

function SearchFilter({
  isDark,
  setSearchCountry,
  setSearchRegion,
  searchCountry,
  searchRegion,
}) {
  return (
    <div className="search">
      <div
        className="search-button"
        style={{
          backgroundColor: isDark ? "hsl(209, 23%, 22%)" : "",
        }}
      >
        <p
          className="material-symbols-outlined"
          style={{
            color: isDark ? "white" : "hsl(200, 15%, 8%)",
          }}
        >
          search
        </p>
        <input
          type="text"
          placeholder="Search for a country"
          value={searchCountry}
          onChange={(e) => {
            setSearchCountry(e.target.value);
          }}
          style={{
            backgroundColor: isDark ? "hsl(209, 23%, 22%)" : "white",
            color: isDark ? "white" : "hsl(200, 15%, 8%)",
          }}
          className={`${!isDark ? "white-input" : "dark-input"}`}
        ></input>
      </div>

      <div className="filter">
        <select
          className="region"
          value={searchRegion}
          onChange={(e) => {
            setSearchRegion(e.target.value);
          }}
          style={{
            backgroundColor: isDark ? "hsl(209, 23%, 22%)" : "white",
            color: isDark ? "white" : "hsl(200, 15%, 8%)",
          }}
        >
          <option value="">All Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default SearchFilter;
