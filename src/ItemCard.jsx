import PropTypes from 'prop-types';
const ItemCard = ({ name, qty, purpose }) => {
  return (
    <>
      <h2>{name}</h2>
      <p>Quantity: {qty}</p>
      <p>Purpose: {purpose}</p>
    </>
  );
};

ItemCard.propTypes = {
  name: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  purpose: PropTypes.string.isRequired,
};

export default ItemCard;
