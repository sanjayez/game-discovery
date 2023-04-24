import { useEffect } from "react";
import apiClient from "../services/apiClient";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { useGames } from "../hooks/useGames";

const Main = () => {
  const { games, count, isLoading, error } = useGames();

  return (
    <div>
      <Navbar count={count} />
      <div className="flex gap-10 justify-between">
        <Sidebar />
        <Feed games={games} />
      </div>
    </div>
  );
};

export default Main;
