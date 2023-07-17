import React, { useState } from 'react';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const recipeForm = useFormik({
    initialValues: {
      title: '',
      type: '',
      category: '',
      description: '',
      ingredients: [],
      user: currentUser._id,
      createdAt: new Date(),
    },
    onSubmit: async (values) => {
      console.log(values);
      const res = await fetch('http://localhost:5000/recipe/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'User Registered Successfully',
          text: 'Please login to continue',
        });
      }
      //code to connect backend
    },
  });

  return (
    <div>
      <div className="col-md-3 mx-auto d-flex align-items-center vh-100">
        <div className="card w-100 shadow-lg">
          <div className="card-body p-5">
            <h3 className="my-5 text-center">Add New Recipes Here 🍗🍗</h3>

            <form onSubmit={recipeForm.handleSubmit}>
              <div className=" mb-4">
                <label className="form-label" htmlFor="title">
                  Dish name
                </label>
                <input
                  type="text"
                  id="title"
                  onChange={recipeForm.handleChange}
                  value={recipeForm.values.title}
                  className="form-control"
                  placeholder="Add familiar dish Name"
                />
              </div>

              <label htmlFor="type">Type of Dish</label>
              <select className='form-control' id="type" onChange={recipeForm.handleChange} value={recipeForm.values.type}>
                <option value="veg">Veg</option>
                <option value="non-veg">Non Veg</option>
              </select>
              
              <label htmlFor="type">Category of Dish</label>
              <select className='form-control' id="type" onChange={recipeForm.handleChange} value={recipeForm.values.type}>
                <option value="chinese">Chinese</option>
                <option value="south-indian">South Indian</option>
              </select>

              <input type="file" />
             

              <label htmlFor="text">Write the Recipe</label>
              <span style={{ color: 'red', fontSize: 10, marginLeft: 20 }}>{recipeForm.errors.description}</span>
              <textarea
                type="text"
                className="form-control mb-4"
                name="description"
                onChange={recipeForm.handleChange}
                value={recipeForm.values.description}
              />

              <button type="submit" className="my-5 btn btn-primary w-100">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
