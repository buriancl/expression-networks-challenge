import React from "react";

const BuildingItem = ({ data }) => {
  const {
    _id,
    address,
    maxOccupancy,
    description,
    contractLength,
    zoneType,
    updatedAt,
  } = data;
  return (
    <li key={_id}>
      <h2>{address}</h2>
      <div className="building-description">
        <h3>Description</h3>
        <p>{description}</p>
      </div>
      <div className="building-data">
        <p>Length of contract: {contractLength}</p>
        <p>Maximum Occupancy: {maxOccupancy}</p>
        <p>Zone Type: {zoneType}</p>
      </div>
      <p>Last update: {updatedAt}</p>
    </li>
  );
};

export default BuildingItem;
