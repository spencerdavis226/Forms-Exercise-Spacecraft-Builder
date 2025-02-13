import PropTypes from 'prop-types';
const ItemAction = ({ itemId, onDeleteItem }) => {
  return (
    <>
      <button onClick={() => onDeleteItem(itemId)}>Delete</button>
    </>
  );
};

ItemAction.propTypes = {
  itemId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

export default ItemAction;
