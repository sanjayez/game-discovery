import { GameResult } from "../hooks/useGames";

interface Props {
  games: GameResult[];
}

const Feed = ({ games }: Props) => {
  return (
    <div className="text-white w-10/12 mb-20">
      <div className="w-full">
        <h1 className="text-7xl text-white font-bold"> New and trending</h1>
        <p className="text-md text-white mt-2">
          Based on player counts and release date.
        </p>
        <div className="w-full grid grid-cols-3 gap-2 mt-12">
          {games.map((game) => {
            return (
              <div
                key={game.id}
                className="flex flex-col m-2 rounded overflow-hidden">
                <img
                  src={game.background_image}
                  alt="bg-image"
                  className="h-36 object-cover"
                />
                <p className="text-2xl font-bold">{game.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
