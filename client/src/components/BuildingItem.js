import React, { useState } from "react";
import UpdateBuilding from "./UpdateBuilding";

const BuildingItem = ({ data, handleDelete }) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [update, setUpdate] = useState(false);

  const {
    _id,
    address,
    maxOccupancy,
    description,
    contractLength,
    zoneType,
    updatedAt,
  } = data;

  const handleUpdate = () => {
    console.log("update", update, !update);
    setUpdate(!update);
  };

  const handleEdit = (e) => {
    setId(e.target.name);
    setOpen(true);
  };

  const handleClose = () => {
    setId("");
    setOpen(false);
  };

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
        <p>Last update: {updatedAt}</p>
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
              handleUpdate={handleUpdate}
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
