import { useState } from "react"
import toast,{Toaster} from "react-hot-toast"
import { Link } from "react-router-dom"

const SignUp = () => {
    const [formDetails,setFormDetails] = useState({
        firstName:"",lastName:"",email:"",password:""
    })

    const handleChange = (e)=>{
        setFormDetails({...formDetails,[e.target.name]:e.target.value});
    }

    const handleSignup = () => {
      e.preventDefault();

    }

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">

    <div className="card shadow p-4" style={{ width: "450px" }}>

        <Toaster position="top-right" />

        <h2 className="text-center mb-4 fw-bold">
            Create Account
        </h2>

        <form onSubmit={handleSignup}>

            {/* First Name */}
            <div className="mb-3">
                <label className="form-label">
                    First Name
                </label>

                <input
                    name="firstName"
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    placeholder="e.g. John"
                    required
                />
            </div>


            {/* Last Name */}
            <div className="mb-3">
                <label className="form-label">
                    Last Name
                </label>

                <input
                    name="lastName"
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    placeholder="e.g. Doe"
                    required
                />
            </div>


            {/* Email */}
            <div className="mb-3">
                <label className="form-label">
                    Email
                </label>

                <input
                    name="email"
                    type="email"
                    className="form-control"
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                />
            </div>


            {/* Password */}
            <div className="mb-4">
                <label className="form-label">
                    Password
                </label>

                <input
                    name="password"
                    type="password"
                    className="form-control"
                    onChange={handleChange}
                    required
                />
            </div>


            {/* Submit Button */}
            <button
                type="submit"
                className="btn btn-success w-100"
            >
                Sign Up
            </button>

        </form>


        {/* Login Link */}
        <p className="text-center mt-3 mb-0">

            Already have an account?{" "}

            <Link
                to="/login"
                className="text-decoration-none fw-semibold"
            >
                Log in here
            </Link>

        </p>

    </div>

</div>

  )
}

export default SignUp;