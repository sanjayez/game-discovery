import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { useGames } from "../hooks/useGames";
import { Suspense } from "react";
import GenreSkeleton from "../components/Skeletons/GenreSkeleton";
import ErrorBoundary from "../utilities/ErrorBoundary";
import { IoWarningOutline } from "react-icons/io5";

const Main = () => {
  const { games, count, isLoading, error } = useGames();

  return (
    <div className="relative">
      <Navbar count={count} />
      <div className="flex gap-10 justify-between">
        <Suspense
          fallback={
            <div className="animate-pulse w-2/12 mt-36 flex flex-col gap-4">
              {[1, 2, 3, 4, 5, 6].map((num) => {
                return <GenreSkeleton />;
              })}
            </div>
          }>
          <ErrorBoundary
            fallback={
              <div className="w-2/12 mt-32">
                <div className="w-full m-2">
                  <p className="text-white text-md font-bold flex items-center gap-2">
                    <IoWarningOutline className="inline" />
                    Could not load genres
                  </p>
                </div>
              </div>
            }>
            <Sidebar />
          </ErrorBoundary>
        </Suspense>
        <Feed games={games} isLoading={isLoading} error={error} />
      </div>
    </div>
  );
};

export default Main;
