import axios from "axios";
import { useEffect, useState } from "react";
import { SearchButton } from "./SearchButton";
import "./TypeForm.css";
import { useFilter } from "../hooks/filter.js";
export const TypeFilter = () => {
  const [types, setTypes] = useState(null);
  const { setFilters } = useFilter();
  const toggleType = ({ target }) => {
    const name = target.innerText;

    const inputElement = document.getElementById(target.htmlFor);

    if (!inputElement.checked)
      return setFilters((prevState) => {
        return {
          types: prevState.types.concat(name),
        };
      });
    setFilters((prevState) => {
      const newFilters = {
        types: prevState.types.filter((type) => {
          return type !== name;
        }),
      };
      
      return newFilters
    });
  };
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((response) => response.data)
      .then(({ results }) => {
        setTypes(results);
      });
  }, []);
  return (
    <div className="formStyle">
      {types ? (
        types.map((type) => {
          return (
            <div key={type.name}>
              <input
                id={type.name}
                name={type.name}
                type="checkbox"
                style={{ visibility: "hidden" }}
              />
              <label
                onClick={toggleType}
                className="formItemStyle"
                id={type.name}
                htmlFor={type.name}
              >
                {type.name}
              </label>
            </div>
          );
        })
      ) : (
        <div className="load"></div>
      )}
      :
    </div>
  );
};
