
import React, { useEffect, useState } from 'react'
import AddProject from './AddProject';
import { useNavigate } from "react-router-dom";



function UpdateProduct({ object }) {

  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  const id = params.get("id");
  const name = params.get("name");
  const price = params.get("price");
  const description = params.get("description");


  console.log(object);

  const [formData, setFormData] = useState({
    name: name,
    price: price,
    description: description,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);


  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.price) newErrors.price = "Price is required";
    else if (isNaN(formData.price)) newErrors.price = "Price must be a number";
    else if (Number(formData.price) <= 0)
      newErrors.price = "Price must be greater than 0";
    return newErrors;
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      if (onSubmit) onSubmit(formData); // Pass data to parent if needed
      console.log("Form Submitted:", formData);
      setFormData({ name: "", price: "", description: "" });
      setTimeout(() => setSubmitted(false), 2500);
    }

    console.log(formData);

    try {
      const response = await fetch("http://localhost:4500/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })

      console.log("response=>", response);

    } catch (e) {
      navigate("/user");
    }

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 mt-10 border border-gray-200 dark:border-gray-700"
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
        Update Product
      </h2>

      {/* Name */}
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
        >
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter product name"
          className={`w-full px-4 py-2 rounded-md border ${errors.name
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 dark:border-gray-700 focus:ring-indigo-500"
            } focus:outline-none focus:ring-2 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Price */}
      <div className="mb-5">
        <label
          htmlFor="price"
          className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
        >
          Price ($) <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter price"
          className={`w-full px-4 py-2 rounded-md border ${errors.price
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 dark:border-gray-700 focus:ring-indigo-500"
            } focus:outline-none focus:ring-2 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200`}
        />
        {errors.price && (
          <p className="text-red-500 text-sm mt-1">{errors.price}</p>
        )}
      </div>

      {/* Description */}
      <div className="mb-6">
        <label
          htmlFor="description"
          className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Write a short description..."
          rows="4"
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-indigo-500 focus:outline-none focus:ring-2 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition-colors focus:outline-none"
      >
        Submit
      </button>

      {/* Success message */}
      {submitted && (
        <p className="text-green-500 text-center mt-4">
          Product added successfully!
        </p>
      )}
    </form>
  );

}

export default UpdateProduct