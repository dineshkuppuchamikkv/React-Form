import React, { useState } from "react";
import { Link} from "react-router-dom";

const Login = () => {

  const initialError = {
    email: { required: false },
    password: { required: false },
    custom_error: null,
  };
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const [error, setError] = useState(initialError);

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = initialError;
    if (input.password.trim() === "") {
      errors.password.required = true;
    }
    if (input.email.trim() === "") {
      errors.email.required = true;
    }
    setError(errors);
    if (input.password && input.email) {
      window.location.href = "https://www.google.com";
    }
  };

  return (
    <div>
      <section className="login-block">
        <div className="container">
          <div className="row ">
            <div className="col login-sec">
              <h2 className="text-center">Login Now</h2>
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-uppercase"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id=""
                    placeholder="email"
                    onChange={handleInputChange}
                  />
                  {error.email.required ? (
                    <span className="text-danger">Email is required.</span>
                  ) : null}
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="text-uppercase"
                  >
                    Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="password"
                    id=""
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
                    value="Login"
                  />
                </div>
                <div className="clearfix"></div>
                <div className="form-group">
                  Create new account ? Please{" "}
                  <Link to="/Register">Register</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
