import React, { useState, useEffect } from "react";
import axios from "axios";
import BuildingItem from "./BuildingItem";

const ShowBuildingInventory = () => {
  const [buildings, setBuildings] = useState([]);

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

  const handleDelete = (e) => {
    axios.delete(`http://localhost:8000/api/building/${e.target.name}`);

    setBuildings((data) => {
      return data.filter((building) => building._id !== e.target.name);
    });
  };

  return (
    <section className="container">
      <h1>Building Inventory</h1>
      <ul>
        {buildings.map((data) => (
          <BuildingItem data={data} handleDelete={handleDelete} />
        ))}
      </ul>
    </section>
  );
};

export default ShowBuildingInventory;
