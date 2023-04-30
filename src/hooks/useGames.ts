import { useState, useEffect } from "react";
import { Genre } from "../data/types";
import gameService from "../services/GameService";

export interface GameResult {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  genres: Genre[];
  metacritic: number;
  released: string;
  parent_platforms: { id: number; name: string; slug: string }[];
}

type count = number;

export const useGames = (search?: string) => {
  const [games, setGames] = useState<GameResult[]>([]);
  const [count, setCount] = useState<count>(0);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = gameService.getGames();
    request
      .then(({ data }) => {
        setGames(data.results);
        setCount(data.count);
        setLoading(false);
      })
      .catch((err) => {
        if (err.message === "canceled") return;
        setError(true);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { games, count, error, isLoading };
};
