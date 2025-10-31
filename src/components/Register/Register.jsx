import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import { Link } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const terms = event.target.term.checked;
    console.log("register clicked", email, password);

    // reset status: success or error
    setError("");
    setSuccess(false);

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s])(?=.{6,}).*$/;
    if (!passwordPattern.test(password)) {
      console.log(
        "password at least 6 characters, one upper case, one lower case, one special character"
      );
      setError(
        "password at least 6 characters, one upper case, one lower case, one special character"
      );
      return;
    }

    if (!terms) {
      setError("Please accept our terms and conditions.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setSuccess(true);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleShowHidePassword = (event) => {
    event.preventDefault();
    console.log("click Eye");
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <div className=" relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="input"
                    placeholder="Password"
                  />
                  <button
                    onClick={handleShowHidePassword}
                    className=" absolute right-5 top-3 text-[15px]"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div>
                  <div>
                    <label class="label">
                      <input type="checkbox" name="term" class="checkbox" />
                      Accept Our Terms and Conditions
                    </label>
                  </div>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              {success && (
                <p className=" text-green-500">Account Created Successfully</p>
              )}
              {error && <p className=" text-red-500"> {error} </p>}
            </form>
            <p>
              Already have an account? Please{" "}
              <Link className=" text-blue-500 underline" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
