import React from "react";



import { Link } from "react-router-dom";
import Login from "../../interfaces/Login";
import { useAppDispatch } from "../../redux/hooks";
import { signup } from "../../redux/features/auth/authTypeSlice";

interface LoginProps {
  inputAssets: Login[];
}

const LoginForm: React.FC<LoginProps> = ({ inputAssets }: LoginProps) => {
const dispatch = useAppDispatch();
  return (
    <div>
      <section>
        <div className="mt-3 ">
          <h1 className="text-2xl mb-4 text-center xs:w-fit md:w-80 m-auto">
            Member Login
          </h1>
          <p className="text-center xs:w-fit w-60 m-auto">
            If you don't have an account you can
            <span
              className="ml-1 underline font-bold text-orange-600 cursor-pointer"
              onClick={() => {
                dispatch(signup());
              }}
            >
              Register here!
            </span>
          </p>
        </div>
      </section>
      <form className="mt-8 relative z-0 md:w-full">
        {inputAssets.map((details, index) => {
          return (
            <div className="relative mb-8" key={details.placeholder}>
              {/* <label>{details.name}</label> */}
              <input
                className="w-full bg-[#F6F7F8] rounded-2xl pb-2 pl-8 p-3 mt-1"
                type={details.type}
                placeholder={details.placeholder}
              />
              <img
                className="absolute top-4 left-3 w-4 h-4"
                src={details.logo}
                alt="logo"
              />

              <img
                className={`${
                  details.logoTwo ? details.logoTwo : "hidden"
                } absolute right-2 bottom-4 cursor-pointer`}
                src={details.logoTwo}
                alt=""
              />
            </div>
          );
        })}
      </form>

      <div className="mt-12">
        <button className="bg-[#3E454B] text-white w-full p-2 rounded-2xl">
          Login
        </button>
        <p className="text-[#B5B5B5] my-5 text-center">or continue with</p>
        <div className="flex items-center justify-center gap-4">
          <img
            className="w-6 h-6 cursor-pointer"
            src="/assets/imgs/home/facebook.png"
            alt="apple logo"
          />
          <img
            className="w-7 h-7 cursor-pointer"
            src="/assets/imgs/home/apple.png"
            alt="apple logo"
          />
          <img
            className="w-6 h-6 cursor-pointer"
            src="/assets/imgs/home/google.png"
            alt="google logo"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
