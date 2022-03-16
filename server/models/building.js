const mongoose = require("mongoose");

const BuildingSchema = new mongoose.Schema(
  {
    address: {
      type: "String",
      required: true,
    },
    maxOccupancy: {
      type: Number,
    },
    description: {
      type: "String",
    },
    contractLength: {
      type: Number,
    },
    zoneType: {
      type: "String",
      enum: [
        "commercial",
        "industrial",
        "government",
        "residential",
        "agriculture",
        "other",
      ],
    },
  },
  { timestamps: true }
);

const Building = mongoose.model("building", BuildingSchema);

module.exports = Building;
