import React, { useEffect, useState } from "react";
import Sidebar from "../components/SideBar";
import getAPIData from "../hooks/getApiData";
import { useSelector } from "react-redux";
import { uploadFile } from "../helpers/uploadFile";
import axios from "axios";
import FullLoader from "../components/FullLoader";
import toast from "react-hot-toast";
// import { uploadFile } from "../helpers/uploadFile";

const EditProfile = () => {
  const { user } = useSelector((store) => store.user);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    name: "",
    email: "",
    title: "",
    username: "",
    github: "",
    linkedin: "",
    desc: "",
    img: "",
  });

  const { data, getLoading, getError } = getAPIData(
    `${import.meta.env.VITE_NODE_API}/users`,
    {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    }
  );
  useEffect(() => {
    if (!getError || !getLoading) {
      setUpdatedData({
        name: data?.name || "",
        email: data?.email || "",
        title: data?.title || "",
        username: data?.username || "",
        github: data?.social?.github || "",
        linkedin: data?.social?.linkedin || "",
        desc: data?.desc || "",
        img: data?.img || "",
      });
    }
  }, [getError, getLoading]);
  const handleFileChange = async (e) => {
    setLoading(true);
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      try {
        const imageUrl = await uploadFile(selectedFile);
        setUpdatedData((prevData) => ({
          ...prevData,
          img: imageUrl,
        }));
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
    setLoading(false);
  };
  const handleUpdate = async () => {
    setLoading(true);
    try {
      const headers = {
        Authorization: `Bearer ${user.token}`,
      };
      const response = await axios.patch(
        `${import.meta.env.VITE_NODE_API}/users`,
        updatedData,
        { headers }
      );
      toast.success("Profile Updated Successfully!!");
    } catch (error) {
      toast.error(error);
      console.error("Could Not Update");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Sidebar>
      <div className="p-4 h-full md:h-auto">
        <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              You Profile
            </h3>
          </div>
          <div>
            <div className="flex items-start sm:justify-start justify-center mb-8">
              <label className="flex items-center justify-center w-24 h-24 border-2 border-gray-300 border-dashed rounded-full cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                {/* <img src={imgLink} alt="" /> */}
                {updatedData.img ? (
                  <img
                    className="w-24 h-24 rounded-full"
                    src={updatedData.img}
                    alt=""
                  />
                ) : file ? (
                  <img
                    className="w-24 h-24 rounded-full"
                    src={URL.createObjectURL(file)}
                    alt=""
                  />
                ) : (
                  <div className="flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                  </div>
                )}
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>
          <div>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter Name"
                  value={updatedData?.name}
                  onChange={(e) =>
                    setUpdatedData({ ...updatedData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Username
                </label>
                <input
                  type="text"
                  className="bg-gray-50 cursor-not-allowed border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your Username..."
                  readOnly
                  value={updatedData?.username}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your Email"
                  value={updatedData?.email}
                  onChange={(e) =>
                    setUpdatedData({ ...updatedData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Tag Line
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter Designation.."
                  value={updatedData?.title}
                  onChange={(e) =>
                    setUpdatedData({ ...updatedData, title: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Github
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter Designation.."
                  value={updatedData?.github}
                  onChange={(e) =>
                    setUpdatedData({ ...updatedData, github: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Linkedin
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter Designation.."
                  value={updatedData?.linkedin}
                  onChange={(e) =>
                    setUpdatedData({ ...updatedData, linkedin: e.target.value })
                  }
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Description
                </label>
                <textarea
                  id="description"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Write product description here"
                  value={updatedData?.desc}
                  onChange={(e) =>
                    setUpdatedData({ ...updatedData, desc: e.target.value })
                  }
                ></textarea>
              </div>
            </div>
            <button
              onClick={handleUpdate}
              className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              {loading ? <FullLoader /> : "Update"}
            </button>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default EditProfile;
