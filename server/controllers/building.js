const Building = require("../models/building");

exports.getAllBuilding = (req, res) => {
  Building.find()
    .then((building) => {
      console.log({ building });
      res.json(building);
    })
    .catch((err) =>
      res.status(404).json({ message: "No building found", error: err.message })
    );
};

exports.postCreateBuilding = (req, res) => {
  Building.create(req.body)
    .then((data) => {
      console.log({ data });
      res.json({ message: "Building successfully consructed", data });
    })
    .catch((err) =>
      res.status(400).json({
        message: "Unable to construct new building",
        error: err.message,
      })
    );
};

exports.putUpdateBuilding = (req, res) => {
  Building.findByIdAndUpdate(req.params.id, req.body)
    .then((data) =>
      res.json({ message: "Building successfully updated", data })
    )
    .catch((err) =>
      res
        .status(404)
        .json({ message: "Failed to update building", error: err.message })
    );
};

exports.deleteBuilding = (req, res) => {
  Building.findByIdAndRemove(req.params.id, req.body).then((data) =>
    res
      .json({ message: "Building succesfully deleted", data })
      .catch((err) =>
        res
          .status(404)
          .json({ error: "Building not found", message: err.message })
      )
  );
};
