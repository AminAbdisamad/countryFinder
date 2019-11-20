import React from "react";
import abbrNum from "./Abrev";
import "./Country.css";

const CountryInfo = props => {
  const singleCountry = props.country.map(country => {
    return (
      <div key={country.numericCode}>
        <div className="wrapper">
          <div className="product-img">
            <img alt="" src={country.flag} height="420" width="400" />
          </div>
          <div className="product-info">
            <div className="product-text">
              <h1> {country.name}</h1>
              <h2> {country.capital}</h2>

              <h2>
                Region: {country.region}
                <br />
                Currency: {country.currencies.map(currency => currency.name)}
                <br />
                Language(s):{" "}
                {country.languages.map(language => language.nativeName)}
                <br />
                Domain: {country.topLevelDomain}
                <br />
                borders: {country.borders.map(neighbor => neighbor)}
              </h2>
            </div>
            <div className="product-price-btn">
              <p>
                <span>{abbrNum(country.population, 1)}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div>{singleCountry}</div>;
};

export default CountryInfo;
