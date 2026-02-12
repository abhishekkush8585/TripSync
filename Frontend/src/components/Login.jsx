import { useState } from "react";
import { Link } from "react-router-dom";
import toast,{Toaster} from "react-hot-toast";

const Login = () => {
       const [formDetails,setFormDetails] = useState({email:"",password:""})


       const handleChange = (e) => {
          setFormDetails({...formDetails,[e.target.name]:e.target.value})
       }

       const handleLogin = () => {
        e.preventDefault();
        toast.loading("logging in...")
       }

 return  (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
     

    <div className="card shadow p-4" style={{ width: "400px" }}>

        <Toaster position="top-right" reverseOrder={false} />
        <h2 className="text-center mb-4 fw-bold">
            Welcome Back
        </h2>

        <form onSubmit={handleLogin}>

            {/* Email */}
            <div className="mb-3">
                <label className="form-label">Email</label>

                <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formDetails.email}
                    onChange={handleChange}
                    required
                />
            </div>


            {/* Password */}
            <div className="mb-2">
                <label className="form-label">Password</label>

                <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formDetails.password}
                    onChange={handleChange}
                    required
                />
            </div>


            {/* Forgot password */}
            <div className="text-end mb-3"> 

                <Link
                    to="/forgot-password"
                    className="text-decoration-none small text-primary"
                >
                    Forgot Password?
                </Link>

            </div>


            {/* Login Button */}
            <button
                type="submit"
                className="btn btn-primary w-100"
            >
                Log In
            </button>

        </form>


        {/* Signup link */}
        <p className="text-center mt-3 mb-0">

            Don't have an account?{" "}

            <Link
                to="/signup"
                className="text-decoration-none fw-semibold"
            >
                Sign up here
            </Link>

        </p>

    </div>

</div>

 )
}

export default Login;