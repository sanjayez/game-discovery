import { IoWarningOutline } from "react-icons/io5";
import { GameResult } from "../hooks/useGames";
import getCroppedUrl from "../utilities/getCroppedUrl";
import Card from "./Card";
import CardSkeleton from "./Skeletons/CardSkeleton";

interface Props {
  games: GameResult[];
  error: boolean;
  isLoading: boolean;
}

const Feed = ({ games, isLoading, error }: Props) => {
  return (
    <div className="text-white w-10/12 min-h-screen">
      <div className="w-full">
        <h1 className="text-7xl text-white font-bold"> New and trending</h1>
        <p className="text-md text-white mt-2">
          Based on player counts and release date.
        </p>
        {error ? (
          <p className="text-xl text-white font-bold mt-8 mb-8 flex items-center gap-2">
            <IoWarningOutline /> Something went wrong while trying to fetch
            games!
          </p>
        ) : (
          <div className="w-full grid grid-cols-3 gap-2 mt-12">
            {isLoading
              ? [1, 2, 3, 4, 5, 6].map((num) => {
                  return (
                    <div key={num}>
                      <CardSkeleton />
                    </div>
                  );
                })
              : games.map(({ id, background_image, name }) => {
                  return (
                    <Card
                      key={id}
                      background_image={getCroppedUrl(background_image)}
                      name={name}
                    />
                  );
                })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
