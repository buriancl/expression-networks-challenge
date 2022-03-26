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
  FormControlLabel,
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
      <Paper elevation={3}>
        <FormControl
          onSubmit={handleSubmit}
          className="form-container"
          noValidate
        >
          <FormLabel htmlFor="address" className="FormFormLabel">
            Address
          </FormLabel>
          <TextField
            type="text"
            name="address"
            value={data.address}
            onChange={handleChange}
          />
          <FormLabel htmlFor="maxOccupancy" className="FormFormLabel">
            Max Occupancy
          </FormLabel>

          <TextField
            type="number"
            name="maxOccupancy"
            min="1"
            value={data.maxOccupancy}
            onChange={handleChange}
          />
          <FormLabel htmlFor="description" className="FormFormLabel">
            Description/Notes
          </FormLabel>
          <TextField
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
          <FormLabel htmlFor="contractLength" className="FormFormLabel">
            Contract Length
          </FormLabel>
          <TextField
            type="number"
            name="contractLength"
            min="0"
            value={data.contractLength}
            onChange={handleChange}
          />
          <FormLabel htmlFor="zoneType" className="FormFormLabel">
            Zone Type
          </FormLabel>
          <Select
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
          {/* <TextField
          type="text"
          name="zoneType"
          value={data.zoneType}
          onChange={handleChange}
        /> */}
          <Button type="submit" className="button" variant="outlined">
            Create Building
          </Button>
        </FormControl>
      </Paper>
    </Box>
  );
};

export default CreateBuilding;
