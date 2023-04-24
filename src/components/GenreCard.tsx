import { motion } from "framer-motion";

interface Props {
  img: string;
  name: string;
}

const GenreCard = ({ name, img }: Props) => {
  return (
    <motion.div
      initial={{ background: "none" }}
      whileHover={{ scale: 1.04 }}
      className="w-full flex items-center my-2 cursor-pointer rounded">
      <img
        className="w-10 h-10 object-cover rounded mr-4"
        src={img}
        alt="genre-cover"
      />
      <p className="font-medium font-roboto text-md tracking-wide">{name}</p>
    </motion.div>
  );
};

export default GenreCard;
