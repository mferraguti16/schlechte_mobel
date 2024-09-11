"use client";
import React, { useState } from "react";
{
  /*import { ArrowDownWideNarrow } from "lucide-react";*/
}
//creating useState with hard coded values to test the selected type, color, max price, state and material
const DropdownFilter = () => {
  const [selectedFurnitureFilter, setSelectedFurnitureFilter] =
    useState("chair");
  const [selectedColorFilter, setSelectedColorFilter] = useState("red");
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(1000);
  const [selectedState, setSelectedState] = useState("used");
  const [selectedMaterial, setSelectedMaterial] = useState("wood");
  // console.log("Asked to filter furnitures by type:", selectedFurnitureFilter);
  // console.log("Asked to filter by color:", selectedColorFilter);
  // handling the change of value when selecting a specific type, color, price, state, material in the filter
  const handleChangeFurnitureFilter = (event) => {
    setSelectedFurnitureFilter(event.target.value);
  };
  const handleChangeColorFilter = (event) => {
    setSelectedColorFilter(event.target.value);
  };
  const handleMaxPriceChange = (event) => {
    setSelectedMaxPrice(event.target.value);
  };
  const handleChangeStateFilter = (event) => {
    setSelectedState(event.target.value);
  };
  const handleChangeMaterialFilter = (event) => {
    setSelectedMaterial(event.target.value);
  };
  //hard coding descriptions to test the filter
  const furnituresArray = [
    {
      id: 1,
      name: "chair n°1",
      type: "chair",
      color: "red",
      price: 120,
      state: "new",
      material: "wood",
    },
    {
      id: 2,
      name: "chair n°2",
      type: "chair",
      color: "red",
      price: 160,
      state: "new",
      material: "plastic",
    },
    {
      id: 3,
      name: "chair n°3",
      type: "chair",
      color: "green",
      price: 250,
      state: "new",
      material: "glass",
    },
    {
      id: 4,
      name: "table n°666",
      type: "table",
      color: "red",
      price: 900,
      state: "old",
      material: "leather",
    },
  ];
  // matching a selected type, color, price, state, material in the filter with its matching values
  const filtered = furnituresArray.filter((furniture) => {
    return (
      selectedFurnitureFilter === furniture.type &&
      selectedColorFilter === furniture.color &&
      furniture.price < selectedMaxPrice &&
      selectedState === furniture.state &&
      selectedMaterial === furniture.material
    );
  });
  return (
    <div className="flex flex-col gap-5 p-15 m-4 rounded-md shadow-md">
      <label htmlFor="filter-furnitures">Type:</label>
      <select
        id="filter-furnitures"
        name="filter-furnitures"
        value={selectedFurnitureFilter}
        onChange={handleChangeFurnitureFilter}
      >
        <option value="chair">Chaises</option>
        <option value="couch">Fauteuils</option>
        <option value="table">Tables</option>
        <option value="sofa">Canapés</option>
        <option value="chests-of-drawers">Commodes</option>
        <option value="lamps">Lampes</option>
      </select>
      <label htmlFor="filter-states">Etat:</label>
      <select
        id="filter-states"
        name="filter-states"
        value={selectedState}
        onChange={handleChangeStateFilter}
      >
        <option value="used">Usagé</option>
        <option value="good state">Bon état</option>
        <option value="very good state">Très bon état</option>
        <option value="as new">Comme neuf</option>
      </select>
      <label htmlFor="filter-material">Matériau:</label>
      <select
        id="filter-materials"
        name="filter-materials"
        value={selectedMaterial}
        onChange={handleChangeMaterialFilter}
      >
        <option value="wood">Bois</option>
        <option value="bamboo">Bambou</option>
        <option value="metal">Métal</option>
        <option value="aluminium">Aluminium</option>
        <option value="plastic">Plastique</option>
        <option value="glass">Verre</option>
        <option value="marble">Marbre</option>
        <option value="leather">Cuir</option>
        <option value="synthetic-leather">Cuir synthétique</option>
        <option value="cotton">Coton</option>
        <option value="linen">Lin</option>
        <option value="fibres">Fibres</option>
      </select>
      <label htmlFor="filter-colors">Couleur:</label>
      <select
        id="filter-colors"
        name="filter-colors"
        value={selectedColorFilter}
        onChange={handleChangeColorFilter}
      >
        <option value="yellow">Jaune</option>
        <option value="red">Rouge</option>
        <option value="blue">Bleu</option>
        <option value="violet">Violet</option>
        <option value="orange">Orange</option>
        <option value="green">Vert</option>
        <option value="golden">Doré</option>
        <option value="silver">Argenté</option>
        <option value="multicolored">Multicolore</option>
      </select>
      {/* Setting a price range from a min to a max price. Price step set at 10 euros*/}
      <input
        min="0"
        max="1000"
        step="10"
        type="range"
        value={selectedMaxPrice}
        onChange={handleMaxPriceChange}
      />
      {selectedMaxPrice} €
      {/*To test mapped/ hard coded furnitures with the filter
<ul>
  {filtered.map((furniture) => (
    <li key={furniture.id}>{furniture.name}</li>
  ))}
</ul>*/}
    </div>
  );
};
export default DropdownFilter;