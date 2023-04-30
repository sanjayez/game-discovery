import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import GenreCard from "./GenreCard";
import GenreService from "../services/GenreService";
import wrapPromise from "../utilities/wrapPromise";
import getCroppedUrl from "../utilities/getCroppedUrl";
import { AnimatePresence, motion } from "framer-motion";

type Genre = {
  id: number;
  image_background: string;
  slug: string;
  name: string;
};

const getGenres = () => {
  const { request: genrePromise } = GenreService.getGenres();
  return wrapPromise(genrePromise);
};
const genreData = getGenres();

const Sidebar = () => {
  const {
    data: { results: genres },
  } = genreData.read();

  const [slice, setSlice] = useState(true);

  return (
    <AnimatePresence>
      <motion.div className="text-white w-2/12 mt-20 mb-96">
        <h2 className="text-2xl font-bold mb-4">Genres</h2>
        {genres.slice(0, slice ? "10" : genres.length).map((genre: Genre) => {
          return (
            <GenreCard
              key={genre.id}
              name={genre.name}
              img={getCroppedUrl(genre.image_background)}
            />
          );
        })}

        {/* make a resuable composable component of this button */}

        {slice ? (
          <button
            onClick={() => setSlice(!slice)}
            className="flex gap-2 items-center">
            <div className="w-8 h-8 bg-gray-800 rounded flex justify-center items-center">
              <FaCaretDown className="text-gray-500" />
            </div>
            <p className="text-gray-500">EXPAND</p>
          </button>
        ) : (
          <button
            onClick={() => setSlice(!slice)}
            className="flex gap-2 items-center">
            <div className="w-8 h-8 bg-gray-800 rounded flex justify-center items-center">
              <FaCaretUp className="text-gray-500" />
            </div>
            <p className="text-gray-500">COLLAPSE</p>
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Sidebar;
