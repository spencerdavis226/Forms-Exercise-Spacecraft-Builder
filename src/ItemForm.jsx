import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

const ItemForm = ({ onItemSubmit }) => {
  const INITIAL_STATE = {
    name: '',
    qty: '',
    purpose: '',
    agreeToTerms: false,
  };
  const [data, setData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      ...data,
      id: uuid(),
    };
    onItemSubmit(newItem);
    setData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item to the inventory</h2>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="qty"
          placeholder="Quantity"
          value={data.qty}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="purpose"
          placeholder="Purpose"
          value={data.purpose}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="checkbox"
          name="agreeToTerms"
          id="agreeToTerms"
          checked={data.agreeToTerms}
          onChange={handleChange}
        />
      </div>
      <button>Add</button>
    </form>
  );
};

ItemForm.propTypes = {
  onItemSubmit: PropTypes.func.isRequired,
};

export default ItemForm;
