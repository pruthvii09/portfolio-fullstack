import { Github, Twitter } from "lucide-react";
import Sidebar from "../components/SideBar";
import GitHubCalendar from "react-github-calendar";
import getAPIData from "../hooks/getApiData";
import ProfileSkeleton from "../components/Skeleton/ProfileSkeleton";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
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
      setUserData(data);
    }
  }, [getError, getLoading]);
  return (
    <>
      {getLoading ? (
        <ProfileSkeleton />
      ) : (
        <Sidebar>
          <div className="border border-gray-800 px-3 py-5 rounded-md">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <img
                  src={userData?.img}
                  alt="profile"
                  className="rounded-full w-16 h-16"
                />
                <div>
                  <h1 className="sm:text-4xl text-2xl">{userData?.name}</h1>
                  <p className="text-base">Full Stack Developer</p>
                </div>
              </div>
              <div className="flex sm:flex-row flex-col gap-2 text-xs">
                <a href={`www.github.com/${userData?.social?.github}`}>
                  <Github
                    className="hover:text-blue-700 cursor-pointer"
                    size={18}
                  />
                </a>
                <Twitter
                  className="hover:text-blue-700 cursor-pointer"
                  size={18}
                />
              </div>
            </div>
            <p className="mt-2">{userData?.desc}</p>
            <div>
              <h2 className="text-2xl my-3">Github Calander</h2>
              <GitHubCalendar username="pruthvii09" />
            </div>
          </div>
          <button
            onClick={() => navigate("/dashboard/edit-profile")}
            className="rounded-md mt-3 hover:bg-blue-600 bg-blue-700 items-center px-2 py-1"
          >
            Edit Profile
          </button>
        </Sidebar>
      )}
    </>
  );
};

export default Profile;
