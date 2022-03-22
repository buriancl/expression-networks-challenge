import React, { useState, useContext } from "react";
import axios from "axios";
import { buildingContext } from "../assets/Context";
import { FormControl, FormLabel, TextField, Button } from "@mui/material";

const CreateBuilding = () => {
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

    handleUpdate();
  };
  return (
    <section className="container">
      <FormControl
        onSubmit={handleSubmit}
        className="form-container"
        noValidate
      >
        <FormLabel htmlFor="address" className="FormLabel">
          Address
        </FormLabel>
        <TextField
          type="text"
          name="address"
          value={data.address}
          onChange={handleChange}
          className="TextField"
        />
        <FormLabel htmlFor="maxOccupancy" className="FormLabel">
          Max Occupancy
        </FormLabel>
        <TextField
          type="number"
          name="maxOccupancy"
          min="1"
          value={data.maxOccupancy}
          onChange={handleChange}
          className="TextField"
        />
        <FormLabel htmlFor="description" className="FormLabel">
          Description/Notes
        </FormLabel>
        <TextField
          type="text"
          name="description"
          value={data.description}
          onChange={handleChange}
          className="TextField"
        />
        <FormLabel htmlFor="contractLength" className="FormLabel">
          Contract Length
        </FormLabel>
        <TextField
          type="number"
          name="contractLength"
          min="0"
          value={data.contractLength}
          onChange={handleChange}
          className="TextField"
        />
        <FormLabel htmlFor="zoneType" className="FormLabel">
          zoneType
        </FormLabel>
        <TextField
          type="text"
          name="zoneType"
          value={data.zoneType}
          onChange={handleChange}
          className="TextField"
        />
        <Button type="submit" className="button">
          Create Building
        </Button>
      </FormControl>
    </section>
  );
};

export default CreateBuilding;
