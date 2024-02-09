import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProjectCard = () => {
  return (
    <div className="flex items-center justify-center sm:justify-start flex-wrap gap-5 mt-5">
      <div className="block w-80 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <Skeleton />
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <Skeleton count={5} />
        </p>
      </div>
      <div className="block w-80 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <Skeleton />
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <Skeleton count={5} />
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
