import { Github, Sidebar, Twitter } from "lucide-react";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ProfileSkeleton = () => {
  return (
    <Sidebar>
      <div className="border border-gray-800 px-3 py-5 rounded-md">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <img
              style={{ width: "70px" }}
              src="https://avatar.iran.liara.run/public/boy?username=Ash"
              alt="profile"
            />
            <div>
              <Skeleton count={2} />
              <Skeleton />
            </div>
          </div>
          <div className="flex gap-2 text-xs">
            <a>
              <Github
                className="hover:text-blue-700 cursor-pointer"
                size={18}
              />
            </a>
            <Twitter className="hover:text-blue-700 cursor-pointer" size={18} />
          </div>
        </div>
        <Skeleton />
        <div>
          <h2 className="text-2xl my-3">Github Calander</h2>
          <Skeleton count={10} />
        </div>
      </div>
    </Sidebar>
  );
};

export default ProfileSkeleton;
