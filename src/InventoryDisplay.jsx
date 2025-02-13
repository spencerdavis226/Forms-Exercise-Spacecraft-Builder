import ItemCard from './ItemCard';
import ItemAction from './ItemAction';
import PropTypes from 'prop-types';

const InventoryDisplay = ({ inventory, onDeleteItem }) => {
  return (
    <div>
      <h2>Inventory</h2>

      {inventory.map((item) => (
        <div key={item.id}>
          <div>
            <ItemCard
              name={(item, name)}
              qty={item.qty}
              purpose={item.purpose}
            />
          </div>
          <div>
            <ItemAction itemId={item.id} onDeleteItem={onDeleteItem} />
          </div>
        </div>
      ))}
    </div>
  );
};

InventoryDisplay.propTypes = {
  inventory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      qty: PropTypes.number.isRequired,
      purpose: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

export default InventoryDisplay;
