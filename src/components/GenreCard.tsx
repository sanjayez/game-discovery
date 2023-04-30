import { motion } from "framer-motion";

interface Props {
  img: string;
  name: string;
}

const GenreCard = ({ name, img }: Props) => {
  return (
    <motion.div
      layout
      initial={{ background: "none", opacity: 0, height: "auto" }}
      animate={{ opacity: 1, height: "auto" }}
      whileHover={{ scale: 1.04 }}
      exit={{ opacity: 0 }}
      transition={{ opacity: { duration: 0.5 } }}
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
