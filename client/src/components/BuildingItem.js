import React, { useState, useContext } from "react";
import UpdateBuilding from "./UpdateBuilding";
import { buildingContext } from "../assets/Context";

const BuildingItem = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");

  const {
    _id,
    address,
    maxOccupancy,
    description,
    contractLength,
    zoneType,
    updatedAt,
  } = data;

  const handleEdit = (e) => {
    setId(e.target.name);
    setOpen(true);
  };

  const handleClose = () => {
    setId("");
    setOpen(false);
  };

  const localDate = new Date(updatedAt);

  const { handleDelete } = useContext(buildingContext);

  return (
    <li key={_id}>
      <div>
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
        <p>Last update: {localDate.toString()}</p>
      </div>
      <button name={_id} onClick={handleEdit}>
        Edit
      </button>
      <button name={_id} onClick={handleDelete}>
        Delete
      </button>
      {open ? (
        <section>
          <div>
            <p className="close" onClick={handleClose}>
              &times;
            </p>
            <UpdateBuilding
              _id={_id}
              handleEdit={handleEdit}
              handleClose={handleClose}
              originData={data}
            />
          </div>
        </section>
      ) : (
        ""
      )}
    </li>
  );
};

export default BuildingItem;
