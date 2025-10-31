import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../../firebase/firebase";

const Login = () => {
  const [error, setError] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("clicked login");
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <form onSubmit={handleLogin}>
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
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
            {error && <p> {error} </p>}
            <p>
              Don't have an accoun?{" "}
              <Link className=" text-blue-500 underline" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
