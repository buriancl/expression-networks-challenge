import React from "react";
import BuildingItem from "./BuildingItem";
import "./ShowBuildingInventory.css";

const ShowBuildingInventory = ({ buildings }) => {
  return (
    <section className="showBuildingInventory__container">
      <h1 className="showBuildingInventory__title">Building Inventory</h1>
      <ul className="showBuildingInventory__list">
        {buildings.map((data) => (
          <BuildingItem data={data} />
        ))}
      </ul>
    </section>
  );
};

export default ShowBuildingInventory;
