import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { HiOutlineMail } from "react-icons/hi";
import { BiCycling, BiLogInCircle } from "react-icons/bi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";

const Login = () => {
  const [pass, setPass] = useState(false);
  const [inputpass, setInputpass] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const login = async (values) => {
    navigate("/dashboard");
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center bg-slate-100">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            login(values);
          }}
        >
          <Form className="shadow-2xl w-96 mx-3 sm:mx-0 sm:w-4/5 md:w-4/6 lg:w-4/5 xl:w-1/2 flex flex-col items-center bg-white p-5 md:py-10 rounded-tl-3xl rounded-br-3xl">
            <span className="text-2xl font-bold text-center text-indigo-500">
              Admin Login
            </span>
            <section className="py-7 space-y-6">
              {/* Email */}
              <div className=" sm:w-96  space-x-4 flex items-center w-96 rounded-md border border-indigo-500 p-2">
                <Field
                  type="email"
                  placeholder="username@gmail.com"
                  name="email"
                  required
                  className="px-3 bg-transparent tracking-wider w-full border-none rounded-sm outline-none focus:ring-0"
                />
                <HiOutlineMail className="text-xl " />
              </div>
              {/* Password */}
              <div className=" sm:w-96 space-x-4 flex items-center w-64  rounded-md border border-indigo-500 p-2">
                <Field
                  type={inputpass ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  required
                  className="px-3 bg-transparent tracking-wider w-full border-none  rounded-sm focus:ring-0"
                />

                <span
                  onClick={() => {
                    setPass(!pass);
                    setInputpass(!inputpass);
                  }}
                  className="text-xl cursor-pointer hover:scale-90 "
                >
                  {pass ? <VscEyeClosed /> : <VscEye />}
                </span>
              </div>
              {/* Submit */}
              <button
                type="submit"
                className="py-2 cursor-pointer tracking-wider bg-indigo-500 text-white flex justify-center items-center w-full rounded-md font-medium   "
              >
                {loading ? (
                  <Oval height={30} secondaryColor="black" color="black" />
                ) : (
                  <div className="flex items-center">
                    <span className="flex items-center justify-center">
                      LOG In
                    </span>
                    <BiLogInCircle className="pl-1.5 text-2xl" />
                  </div>
                )}
              </button>
            </section>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Login;
