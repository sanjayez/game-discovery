import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { useGames } from "../hooks/useGames";
import { Suspense } from "react";
import GenreSkeleton from "../components/Skeletons/GenreSkeleton";

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
          <Sidebar />
        </Suspense>
        <Feed games={games} isLoading={isLoading} error={error} />
      </div>
    </div>
  );
};

export default Main;
