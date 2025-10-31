import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import { Link } from "react-router";

const Register = () => {
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log("register clicked", email, password);

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

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
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
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              {error && <p className=" text-red-500"> {error} </p>}
            </form>
            <p>
              Already have an account? Please{" "}
              <Link className=" text-blue-500 underline">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
