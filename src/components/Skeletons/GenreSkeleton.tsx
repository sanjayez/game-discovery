import React from "react";

const GenreSkeleton = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="w-12 h-12 bg-gray-900 rounded-sm"></div>
      <div className="flex flex-col w-full gap-2">
        <div className="w-5/6 h-2 bg-gray-800"></div>
        <div className="w-3/6 h-2 bg-gray-800"></div>
      </div>
    </div>
  );
};

export default GenreSkeleton;
