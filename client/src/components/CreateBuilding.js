import React, { useState, useContext } from "react";
import axios from "axios";
import { buildingContext } from "../assets/Context";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

const CreateBuilding = () => {
  const [data, setData] = useState({
    address: "",
    maxOccupancy: "",
    description: "",
    contractLength: "",
    zoneType: "",
  });
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const { handleUpdate } = useContext(buildingContext);

  const handleChange = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:8000/api/building", data)
      .then((res) => {
        handleUpdate();
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
      <form onSubmit={handleSubmit} className="form-container" noValidate>
        <label htmlFor="address" className="FormLabel">
          Address
        </label>
        <input
          type="text"
          name="address"
          value={data.address}
          onChange={handleChange}
        />
        <label htmlFor="maxOccupancy" className="FormLabel">
          Max Occupancy
        </label>
        <input
          type="number"
          name="maxOccupancy"
          min="1"
          value={data.maxOccupancy}
          onChange={handleChange}
        />
        <label htmlFor="description" className="FormLabel">
          Description/Notes
        </label>
        <input
          type="text"
          name="description"
          value={data.description}
          onChange={handleChange}
        />
        <label htmlFor="contractLength" className="FormLabel">
          Contract Length
        </label>
        <input
          type="number"
          name="contractLength"
          min="0"
          value={data.contractLength}
          onChange={handleChange}
        />
        <label htmlFor="zoneType" className="FormLabel">
          zoneType
        </label>
        <input
          type="text"
          name="zoneType"
          value={data.zoneType}
          onChange={handleChange}
        />
        <button type="submit" className="button">
          Create Building
        </button>
      </form>
    </section>
  );
};

export default CreateBuilding;
