import React from 'react';
import './App'; // Import Form component styles

const Form = () => {
  return (
    <div className="form">
      <h2>Add New Item</h2>
      <form>
        <div className="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter item name" />
        </div>
        <div className="form-group">
          <label for="price">Cantidad:</label>
          <input type="number" id="cantidad" name="cantidad" placeholder="Cantidad" />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
