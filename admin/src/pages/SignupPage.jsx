import React, { useEffect, useState } from "react";
import postAPIData from "../hooks/postApiData";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/userSclice.js";

const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const [data, setData] = useState({
    name: "",
    email: "",
    username: "",
    title: "",
    github: "",
    password: "",
    desc: "",
  });
  const { loading, error, sendData } = postAPIData();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  const handleSubmit = async () => {
    const res = await sendData(
      `${import.meta.env.VITE_NODE_API}/users/signup`,
      null,
      {
        ...data,
      }
    );
    if (res) {
      localStorage.setItem("user", JSON.stringify(res.data));
      dispatch(setUser(res.data));
    }
  };
  return (
    <div className="flex flex-col h-screen items-center justify-center px-6">
      <div className="p-4 w-full max-w-2xl h-full md:h-auto">
        <div className=" p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Signup
            </h3>
          </div>
          <form>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter Name"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Username
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter Your Username"
                  value={data.username}
                  onChange={(e) =>
                    setData({ ...data, username: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter Email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tag Line
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Full Stack Developer"
                  value={data.title}
                  onChange={(e) => setData({ ...data, title: e.target.value })}
                />
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Github Link
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter Link"
                  value={data.github}
                  onChange={(e) => setData({ ...data, github: e.target.value })}
                />
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter Password"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  About
                </label>
                <textarea
                  id="description"
                  rows="4"
                  className="block outline-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Write about You..."
                  value={data.desc}
                  onChange={(e) => setData({ ...data, desc: e.target.value })}
                ></textarea>
              </div>
              {error && (
                <div className="flex items-center gap-3 text-red-600 text-sm">
                  <AlertCircle />
                  <p>{error}</p>
                </div>
              )}
            </div>
            <button
              type="submit"
              className="text-white flex items-center justify-center w-full bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700"
              disabled={loading}
              onClick={handleSubmit}
            >
              {loading ? <Loader /> : "Submit"}
            </button>
          </form>
          <p className="text-sm mt-3 font-light text-gray-500 dark:text-gray-400">
            Already have an account ?{" "}
            <a
              onClick={() => navigate("/")}
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
