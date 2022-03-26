import React, { useState, useContext } from "react";
import axios from "axios";
import { buildingContext } from "../assets/Context";
import "./CreateBuilding.css";
// import { EditorState } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const CreateBuilding = () => {
  // const [editorState, setEditorState] = useState(() =>
  //   EditorState.createEmpty()
  // );

  const [data, setData] = useState({
    address: "",
    maxOccupancy: "",
    description: "",
    contractLength: "",
    zoneType: "",
  });

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
    <section className="create-container">
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
        {/* <Editor
          editorState={editorState}
          onChange={setEditorState}
          name="description"
          value={data.description}
        /> */}
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
          Zone Type
        </label>
        <select
          name="zoneType"
          id="zoneTypeSelect"
          value={data.zoneType}
          onChange={handleChange}
        >
          <option value="">Please choose an option</option>
          <option value="commercial">Commercial</option>
          <option value="industrial">Industrial</option>
          <option value="government">Government</option>
          <option value="residential">Residential</option>
          <option value="agriculture">Agriculture</option>
          <option value="other">Other</option>
        </select>
        {/* <input
          type="text"
          name="zoneType"
          value={data.zoneType}
          onChange={handleChange}
        /> */}
        <button type="submit" className="button">
          Create Building
        </button>
      </form>
    </section>
  );
};

export default CreateBuilding;
