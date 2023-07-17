import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
const loginSchema = Yup.object().shape({

  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Enter Password')
});
const Login = () => {
  //initailizing formik

  const navigate = useNavigate();

  const loginform = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      console.log(values);
      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });

      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'User Logged In Successfully',
        });
        const data = await res.json();
        sessionStorage.setItem('user', JSON.stringify(data));
        navigate('/addrecipe');
      } else if (res.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Credentials'
        })

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong',
        })
      }

    },
    validationSchema: loginSchema

  });



  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbEOtxk1-6kgVUaG-bQ2o46swaY0Tdy865Uw&usqp=CAU"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form 
            className='mx-1 mx-md-4'
            onSubmit={loginform.handleSubmit}
            >
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-facebook-f" />
                </button>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-twitter" />
                </button>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-linkedin-in" />
                </button>
              </div>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>
              {/* Email input */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="email"
                  onChange={loginform.handleChange}
                  value={loginform.values.email}
                  className="form-control"
                  placeholder="Enter a valid email address"
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
              </div>
              {/* Password input */}
              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
                <span >{loginform.errors.password}</span>
                <input
                  type="password"
                  id="password"
                  onChange={loginform.handleChange}
                  value={loginform.values.password}
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                {/* Checkbox */}
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="#!" className="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        {/* Copyright */}

        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>
        {/* Copyright */}
        {/* Right */}
        <div>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-twitter" />
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-google" />
          </a>
          <a href="#!" className="text-white">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        {/* Right */}
      </div>
    </section>

  )
}

export default Login