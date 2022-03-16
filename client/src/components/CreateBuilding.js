import React, { useState } from "react";
import axios from "axios";

const CreateBuilding = () => {
  const [data, setData] = useState({
    address: "",
    maxOccupancy: "",
    description: "",
    contractLength: "",
    zoneType: "",
  });

  const handleChange = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:8000/api/building", data)
      .then((res) => {
        setData({
          address: "",
          maxOccupancy: "",
          description: "",
          contractLength: "",
          zoneType: "",
        });
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("Error couldn't create Building", err.message);
      });
  };
  return (
    <section className="container">
      <section className="contents">
        <form onSubmit={handleSubmit} className="form-container" noValidate>
          <label htmlFor="address" className="label">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={data.address}
            onChange={handleChange}
            className="input"
          />
          <label htmlFor="maxOccupancy" className="label">
            Max Occupancy
          </label>
          <input
            type="number"
            name="maxOccupancy"
            min="1"
            value={data.maxOccupancy}
            onChange={handleChange}
            className="input"
          />
          <label htmlFor="description" className="label">
            Description/Notes
          </label>
          <input
            type="text"
            name="description"
            value={data.description}
            onChange={handleChange}
            className="input"
          />
          <label htmlFor="contractLength" className="label">
            Contract Length
          </label>
          <input
            type="number"
            name="contractLength"
            min="0"
            value={data.contractLength}
            onChange={handleChange}
            className="input"
          />
          <label htmlFor="zoneType" className="label">
            zoneType
          </label>
          <input
            type="text"
            name="zoneType"
            value={data.zoneType}
            onChange={handleChange}
            className="input"
          />
          <button type="submit" className="button">
            Create Building
          </button>
        </form>
      </section>
    </section>
  );
};

export default CreateBuilding;
