const CardSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col m-2 rounded overflow-hidden">
      <div className="w-full h-36 bg-gray-900"></div>
      <div className="w-5/6 mt-4 mb-4 rounded-full bg-gray-800 h-4"></div>
      <div className="w-5/6 mb-4 rounded-full bg-gray-800 h-2"></div>
    </div>
  );
};

export default CardSkeleton;
