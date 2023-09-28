import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addProductAsync, getProductsAsync } from '../../redux/productsSlice';
import classes from './AddProduct.module.css';

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [englishName, setEnglishName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(null);
  const [measurementUnit, setMeasurementUnit] = useState('');
  const [totalUnits, setTotalUnits] = useState(null);
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      englishName,
      description,
      price: parseFloat(price),
      measurementUnit,
      totalUnits: parseInt(totalUnits),
      image,
    };

    dispatch(addProductAsync(newProduct));
    dispatch(getProductsAsync());
    navigate('/products', {
      state: {
        directAccess: false,
      },
    });
  };

  return (
    <div className={classes.addProducContainer}>
      <h2 className={classes.containerHeading}>Add A Product</h2>
      <form action="submit" className="add-hotel-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className={classes.input}
          placeholder="Product Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
          required
        />
        <input
          type="text"
          className={classes.input}
          placeholder="English Name"
          onChange={(e) => setEnglishName(e.target.value)}
          value={englishName}
          name="english_name"
          required
        />
        <textarea
          className={classes.textArea}
          placeholder="Product Description"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
        <div className={classes.numberInputs}>
          <input
            type="number"
            className={classes.input}
            placeholder="Price/Unit in USD"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            required
          />
          <input
            type="text"
            className={classes.input}
            placeholder="Measurement Unit"
            name="measurement_unit"
            onChange={(e) => setMeasurementUnit(e.target.value)}
            value={measurementUnit}
            required
          />
          <input
            type="number"
            className={classes.input}
            placeholder="Total Units"
            name="units"
            onChange={(e) => setTotalUnits(e.target.value)}
            value={totalUnits}
            required
          />
        </div>
        <div className={classes.imageContainer}>
          <input
            type="file"
            className={classes.imageInput}
            onChange={handleFileChange}
            required
          />
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              style={{ maxWidth: '200px', marginTop: '10px' }}
            />
          )}
        </div>
        <button type="submit" className={classes.addProductBtn}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
