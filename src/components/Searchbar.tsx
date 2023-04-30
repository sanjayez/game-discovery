import { useState, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import { debounced } from "../utilities/debounce";
import gameService from "../services/GameService";
import { GameResult } from "../hooks/useGames";

interface Props {
  count: number;
}

const Searchbar = ({ count }: Props) => {
  const [data, setData] = useState<GameResult[]>([]);
  const searchGame = useCallback(gameService.searchGames, []);

  const handleChange = (value: string) => {
    if (!value) {
      setData([]);
      return;
    }
    const { request, cancel } = searchGame(value);
    request
      .then(({ data }) => setData(data?.results))
      .catch((err) => console.log(err));
  };

  const debounceSearch = debounced(handleChange, 500);

  return (
    <div className="relative md:w-3/4 h-11 relative text-white flex items-center">
      <FaSearch className="absolute ml-4" />
      <div className="w-full">
        <input
          onChange={(e) => debounceSearch(e.target.value)}
          type="text"
          name="search"
          className="w-full h-full rounded-full p-2 pl-10 pb-3 bg-dark-light"
          placeholder={`search from ${count.toLocaleString("en-US")} games`}
        />
        {data.length !== 0 && (
          <div className="absolute w-full mt-2 rounded bg-dark-light">
            <ul>
              {data.slice(0, 9).map((game) => {
                return (
                  <li key={game.id} className="py-3 px-2 hover:bg-black">
                    <div className="flex items-center">
                      <img
                        className="w-12 h-12 rounded object-cover mr-4"
                        src={game.background_image}
                        alt=""
                      />
                      <p className="text-md font-bold font-roboto">
                        {game.name}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
