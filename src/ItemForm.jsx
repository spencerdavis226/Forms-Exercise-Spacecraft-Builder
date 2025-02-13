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
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    if (!data.name.trim()) newErrors.name = 'Name is required';
    if (!data.qty.trim() || isNaN(data.qty) || Number(data.qty) < 1)
      newErrors.qty = 'Quantity must be a number greater than 0';
    if (!data.purpose.trim()) newErrors.purpose = 'Purpose is required';
    if (!data.agreeToTerms)
      newErrors.agreeToTerms = 'You must agree to the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns `true` if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newItem = {
      ...data,
      id: uuid(),
      qty: Number(data.qty),
    };
    onItemSubmit(newItem);
    setData(INITIAL_STATE);
    setErrors({});
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
        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
      </div>
      <div>
        <input
          type="text"
          name="qty"
          placeholder="Quantity"
          value={data.qty}
          onChange={handleChange}
        />
        {errors.qty && <div style={{ color: 'red' }}>{errors.qty}</div>}
      </div>
      <div>
        <input
          type="text"
          name="purpose"
          placeholder="Purpose"
          value={data.purpose}
          onChange={handleChange}
        />
        {errors.purpose && <div style={{ color: 'red' }}>{errors.purpose}</div>}
      </div>
      <div>
        <label htmlFor="agreeToTerms">I agree to the terms</label>
        <input
          type="checkbox"
          name="agreeToTerms"
          id="agreeToTerms"
          checked={data.agreeToTerms}
          onChange={handleChange}
        />
        {errors.agreeToTerms && (
          <div style={{ color: 'red' }}>{errors.agreeToTerms}</div>
        )}
      </div>
      <button>Add</button>
    </form>
  );
};

ItemForm.propTypes = {
  onItemSubmit: PropTypes.func.isRequired,
};

export default ItemForm;
