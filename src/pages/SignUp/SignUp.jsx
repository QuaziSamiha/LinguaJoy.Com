/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/images/others/sign-up.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { user, loading, createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // console.log(navigate)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
        Swal.fire({
          title: "Welcome to LinguaJoy!",
          width: 600,
          padding: "3em",
          color: "#703e78",
          background: "#fff url(/images/trees.png)",
          backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `,
          showClass: {
            popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
          },
          hideClass: {
            popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
          },
          timer: 1000,
          showConfirmButton: false,
        });
        navigate("/");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorMessage);
        setError(errorMessage);
      });
  };

  return (
    <>
      <section className="mt-16 mb-24">
        <div className="flex justify-around items-center">
          <div className="w-[500px] h-[600px]">
            <h1 className="text-center font-bold text-3xl uppercase text-[#37474f]">
              Sign up
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="m-6">
              {error ? (
                <>
                  <p className="text-red-500 text-xs text-center">
                    This email is already used
                  </p>
                </>
              ) : (
                <></>
              )}
              <div className="my-3">
                <label className="label">
                  <span className="label-text font-semibold text-[#37474f] text-lg">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border-b outline-none border-[#37474f] w-full pl-1"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600 text-xs font-medium">
                    Name is required
                  </span>
                )}
              </div>
              <div className="my-3">
                <label className="label">
                  <span className="label-text font-semibold text-[#37474f] text-lg">
                    Photo
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Upload Your Photo"
                  className="border-b outline-none border-[#37474f] w-full pl-1"
                  {...register("photoURL", { required: true })}
                />
                {errors.photoURL && (
                  <span className="text-red-600 text-xs font-medium">
                    Photo is required
                  </span>
                )}
              </div>
              <div className="my-3">
                <label className="label">
                  <span className="label-text font-semibold text-[#37474f] text-lg">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border-b outline-none border-[#37474f] w-full pl-1"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600 text-xs font-medium">
                    Email is required
                  </span>
                )}
              </div>
              <div className="my-3">
                <label className="label">
                  <span className="label-text font-semibold text-[#37474f] text-lg">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  className="border-b outline-none border-[#37474f] w-full pl-1"
                  {...register("password", { required: true, minLength: 6 })}
                />
                {errors.password && (
                  <span className="text-red-600 text-xs font-medium">
                    Password is required. Please provide minimum 6 characters.
                  </span>
                )}
              </div>
              <div className="my-8">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-block hover:skeleton hover:rounded-none bg-[#ba68c8] hover:bg-[#ba68c8] text-white hover:text-white text-lg rounded-none text-white]"
                />
              </div>
            </form>
            <div>
              <div className="flex justify-center items-center">
                <div className="border-t border-[#37474f] w-52"></div>
                <p className="text-center #37474f text-sm px-2 font-semibold">
                  Or
                </p>
                <div className="border-t border-[#37474f] w-52"></div>
              </div>
              <div className="m-6">
                <button className="btn btn-block bg-base-300 rounded-none text-lg font-semibold">
                  Sing Up with Google
                  <FcGoogle className="w-8 h-8" />
                </button>
              </div>
            </div>
            <div className="text-center text-sm my-8 text-[#37474f]  font-semibold">
              Already have an account?{" "}
              <Link to="/signin" className="text-[#703e78]">
                Sign In
              </Link>
            </div>
          </div>
          <div className="w-[500px] h-[500px]">
            <img src={image} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
