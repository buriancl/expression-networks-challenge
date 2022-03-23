import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import CreateBuilding from "./components/CreateBuilding";
import ShowBuildingInventory from "./components/ShowBuildingInventory";
import { buildingContext } from "./assets/Context";

function App() {
  const [buildings, setBuildings] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/building")
      .then((res) => {
        console.log(res.data);
        setBuildings(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [update]);

  const handleDelete = async (e) => {
    await axios.delete(`http://localhost:8000/api/building/${e.target.name}`);

    setBuildings((data) => {
      return data.filter((building) => building._id !== e.target.name);
    });
  };

  const handleUpdate = () => {
    console.log("update ====> ", update, !update);
    setUpdate(!update);
  };

  return (
    <main className="app-container">
      <buildingContext.Provider value={{ handleUpdate, handleDelete }}>
        <CreateBuilding />
        <ShowBuildingInventory buildings={buildings} />
      </buildingContext.Provider>
    </main>
  );
}

export default App;
