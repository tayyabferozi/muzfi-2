import React, { useState } from "react";
import { authClose } from "../../redux/features/auth/authPopupSlice";
import { useAppDispatch } from "../../redux/hooks";
import { inputAssets } from "./inputs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

interface ModalProps {
    isModalActive: boolean;
    type: String
}

const Auth = ({ isModalActive, type }: ModalProps) => {
  const dispatch = useAppDispatch();
    if (!isModalActive) return null;
    
    const findType = () => {
        if (type === "signin") {
            return <LoginForm inputAssets={inputAssets} />
        } else {
            return <RegisterForm/>
        }

    }

  return (
    <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-25 backdrop-blur-sm grid place-items-center">
      <div className="tablet:w-[350px] w-[450px] flex flex-col relative">
        {/*  */}
        <div className="h-fit w-100px bg-white pt-2 p-5 rounded-xl m-auto">
          <div className="flex ">
            <img
              className="h-8 m-auto"
              src="/assets/imgs/common/logo-2.png"
              alt="logo"
            />
            <img
              className="h-6 "
              src="/assets/imgs/common/cancel.png"
              alt="cancel"
              onClick={() => {
                dispatch(authClose());
              }}
            />
          </div>
          {findType()}
        </div>
      </div>
    </div>
  );
};

export default Auth;
