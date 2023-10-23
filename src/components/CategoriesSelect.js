import React from "react";
import useFetch from "../hooks/useFetch";
import { Link, useNavigate, useParams } from "react-router-dom";

const CategoriesSelect = () => {
  const { data } = useFetch("/categories");

  let navigate = useNavigate();
  function handleChange(value) {
    navigate(`${value}`);
    value = "";
  }

  return (
    <div>
      <select onChange={(event) => handleChange(event.target.value)}>
        <option value="someOption selected hidden">Select category</option>
        {data?.map((category) => {
          return (
            <option key={category.id} value={`category/${category.id}`}>
              {category.attributes.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CategoriesSelect;
