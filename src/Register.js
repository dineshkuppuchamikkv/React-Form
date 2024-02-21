import React, { useState } from "react";
import { Link} from "react-router-dom";



export default function Register() {

  const initialError = {
    email: { required: false },
    password: { required: false },
    name: { required: false },
    custom_error: null,
  };
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(initialError);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = { ...initialError }; 
    
    if (input.name.trim() === "") {
      errors.name.required = true;
    }
    if (input.password.trim() === "") {
      errors.password.required = true;
    }
    if (input.email.trim() === "") {
      errors.email.required = true;
    }
    setError(errors);
    
    if (input.name && input.password && input.email) {
      window.location.href = "https://www.google.com";
    }
  };
  
  return (
    <section className="register-block">
      <div className="container">
        <div className="row">
          <div className="col register-sec">
            <img src="favicon.ico" width="80px" className="imagelogo" />
            <h2 className="text-center">Karur Nandhavanam</h2>
            <form className="register-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="text-uppercase">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  value={input.name}
                  onChange={handleInputChange}
                />
                {error.name.required ? (
                  <span className="text-danger">Name is required.</span>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="email" className="text-uppercase">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  value={input.email}
                  onChange={handleInputChange}
                />
                {error.email.required ? (
                  <span className="text-danger">Email is required.</span>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="password" className="text-uppercase">
                  Password
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  id="password"
                  value={input.password}
                  onChange={handleInputChange}
                />
                {error.password.required ? (
                  <span className="text-danger">Password is required.</span>
                ) : null}
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  className="btn btn-login float-right"
                  value="Register"
                />
              </div>
              <div className="clearfix"></div>
              <div className="form-group">
                Already have an account? Please{" "}
                 <Link to="/">Login</Link>
      
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
