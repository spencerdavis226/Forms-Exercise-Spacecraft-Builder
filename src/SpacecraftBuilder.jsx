import { useState } from 'react';
import ItemForm from './ItemForm';
import InventoryDisplay from './InventoryDisplay';

const SpacecraftBuilder = () => {
  const [inventory, setInventory] = useState([]);

  const addItem = (item) => {
    setInventory((prev) => [...prev, item]);
  };

  const deleteItem = (id) => {
    setInventory((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Spacecraft Builder</h1>
      <div>
        <ItemForm onItemSubmit={addItem} />
      </div>
      <div>
        <InventoryDisplay inventory={inventory} onDeleteItem={deleteItem} />
      </div>
    </div>
  );
};

export default SpacecraftBuilder;
