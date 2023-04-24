import { toggle } from "../features/themeSlice";
import type { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

const ThemeButton = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  const dispatch = useDispatch();

  return (
    <div
      data-dark={dark}
      className={`switch relative w-10 h-6 bg-white rounded-full flex items-center p-0.5 justify-start`}>
      <motion.button
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
        className="absolute w-5 h-5 bg-black rounded-xl cursor-pointer"
        onClick={() => dispatch(toggle())}></motion.button>
    </div>
  );
};

export default ThemeButton;
