import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import postAPIData from "../hooks/postApiData";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { AlertCircle } from "lucide-react";
import { setUser } from "../redux/userSclice.js";
const LoginPage = () => {
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);
  const { loading, error, sendData } = postAPIData();
  const handleSubmit = async () => {
    const res = await sendData(
      `${import.meta.env.VITE_NODE_API}/users/login`,
      null,
      {
        ...data,
      }
    );
    if (res) {
      localStorage.setItem("user", JSON.stringify(res.data));
      dispatch(setUser(res.data));
      navigate("/dashboard");
    }
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <div className="space-y-4 md:space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your Username
                </label>
                <input
                  className="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter username"
                  value={data.username}
                  onChange={(e) =>
                    setData({ ...data, username: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              {error && (
                <div className="flex items-center gap-3 text-red-600 text-sm">
                  <AlertCircle />
                  <p>{error}</p>
                </div>
              )}
              <button
                onClick={handleSubmit}
                className="w-full flex items-center justify-center text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 "
              >
                {loading ? <Loader /> : "Login"}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  onClick={() => navigate("/signup")}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
