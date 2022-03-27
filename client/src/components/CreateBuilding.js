import React, { useState, useContext } from "react";
import axios from "axios";
import { buildingContext } from "../assets/Context";
import "./CreateBuilding.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
} from "@mui/material";
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
    <Box className="createBuilding__container">
      <Paper className="createBuilding__paper" elevation={3}>
        <form onSubmit={handleSubmit} className="createBuilding__form">
          <FormControl noValidate>
            <FormLabel htmlFor="address" className="createBuilding__formLabel">
              Address
            </FormLabel>
            <TextField
              className="createBuilding__textField"
              type="text"
              name="address"
              value={data.address}
              onChange={handleChange}
            />
            <FormLabel htmlFor="zoneType" className="createBuilding__formLabel">
              Zone Type
            </FormLabel>
            <Select
              className="createBuilding__select"
              name="zoneType"
              id="zoneTypeSelect"
              value={data.zoneType}
              onChange={handleChange}
            >
              <MenuItem value="">Please choose an option</MenuItem>
              <MenuItem value="commercial">Commercial</MenuItem>
              <MenuItem value="industrial">Industrial</MenuItem>
              <MenuItem value="government">Government</MenuItem>
              <MenuItem value="residential">Residential</MenuItem>
              <MenuItem value="agriculture">Agriculture</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
            <FormLabel
              htmlFor="maxOccupancy"
              className="createBuilding__formLabel"
            >
              Max Occupancy
            </FormLabel>

            <TextField
              className="createBuilding__textField"
              type="number"
              name="maxOccupancy"
              min="1"
              value={data.maxOccupancy}
              onChange={handleChange}
            />
            <FormLabel
              htmlFor="description"
              className="createBuilding__formLabel"
            >
              Description/Notes
            </FormLabel>
            <TextField
              className="createBuilding__textField"
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
            <FormLabel
              htmlFor="contractLength"
              className="createBuilding__formLabel"
            >
              Contract Length (months)
            </FormLabel>
            <TextField
              className="createBuilding__textField"
              type="number"
              name="contractLength"
              min="0"
              value={data.contractLength}
              onChange={handleChange}
            />

            {/* <TextField
          type="text"
          name="zoneType"
          value={data.zoneType}
          onChange={handleChange}
        /> */}

            <Button
              type="submit"
              className="createBuilding__btn"
              variant="outlined"
              onClick={handleSubmit}
            >
              Create Building
            </Button>
          </FormControl>
        </form>
      </Paper>
    </Box>
  );
};

export default CreateBuilding;
