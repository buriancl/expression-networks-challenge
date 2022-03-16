import React, { useState, useEffect } from "react";
import axios from "axios";
import BuildingItem from "./BuildingItem";

const ShowBuildingInventory = () => {
  const [buildings, setBuildings] = useState([]);

  const handleDelete = (e) => {
    axios.delete(`http://localhost:8000/api/building/${e.target.name}`);

    setBuildings((data) => {
      return data.filter((building) => building._id !== e.target.name);
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/building")
      .then((res) => {
        console.log(res.data);
        setBuildings(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <section className="container">
      <h1>Building Inventory</h1>
      <ul>
        {buildings.map((data) => (
          <BuildingItem data={data} />
        ))}
      </ul>
    </section>
  );
};

export default ShowBuildingInventory;
