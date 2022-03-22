import React from "react";
import BuildingItem from "./BuildingItem";

const ShowBuildingInventory = ({ buildings }) => {
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
