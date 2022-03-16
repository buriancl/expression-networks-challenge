import "./App.css";
import CreateBuilding from "./components/CreateBuilding";
import ShowBuildingInventory from "./components/ShowBuildingInventory";

function App() {
  return (
    <main className="app-container">
      <CreateBuilding />
      <ShowBuildingInventory />
    </main>
  );
}

export default App;
