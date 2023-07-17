import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const signUpSchema = Yup.object().shape({

  password: Yup.string().required('Enter Password'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const SignUp = () => {

  const navigate=useNavigate();

  const signUpForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: async(values) => {
      console.log(values);
      const res=await fetch('http://localhost:5000/user/add',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(values)

    });

      console.log(res.status);

      if(res.status===200){
        Swal.fire({
          icon:'success',
          title:'user Register Succesfully',
          text:'please login to continue'
        });
        navigate('/login');
      }
      //code to connect backend
    },

    validationSchema: signUpSchema
    
  });


  return (
    <div>
      <div className="col-md-3 mx-auto d-flex align-items-center vh-100">
        <div className="card w-100 shadow-lg">
          <div className="card-body p-5">
            <h3 className="my-5 text-center">SignUp  Here</h3>

            <form onSubmit={signUpForm.handleSubmit}>

            <div className=" mb-4">
                <label className="form-label" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={signUpForm.handleChange}
                  value={signUpForm.values.name}
                  className="form-control"
                  placeholder="Enter Full Name"
                />
              </div>

              <label htmlFor="">Email</label>
              <input
                type="email"
                className="form-control mb-4"
                name="email"
                onChange={signUpForm.handleChange}
                value={signUpForm.values.email}
              />


              <label htmlFor="">Create Password</label>
              <span style={{ color: 'red', fontSize: 10, marginLeft: 20 }}>{signUpForm.errors.password}</span>
              <input
                type="password"
                className="form-control mb-4"
                name="password"
                onChange={signUpForm.handleChange}
                value={signUpForm.values.password}
              />

              <button type="submit" className="my-5 btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp