import { FaCaretDown } from "react-icons/fa";
import { fakeGenres } from "../data/fakeData";
import GenreCard from "./GenreCard";

const Sidebar = () => {
  return (
    <div className="text-white w-2/12 mt-20 mb-96">
      <h2 className="text-2xl font-bold mb-4">Genres</h2>
      {fakeGenres.map((genre) => {
        return <GenreCard key={genre.id} name={genre.name} img={genre.img} />;
      })}
      <button className="flex gap-2 items-center">
        <div className="w-8 h-8 bg-gray-800 rounded flex justify-center items-center">
          <FaCaretDown className="text-gray-500" />
        </div>
        <p className="text-gray-500">SHOW ALL</p>
      </button>
    </div>
  );
};

export default Sidebar;
