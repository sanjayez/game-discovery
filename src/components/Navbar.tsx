import Searchbar from "./Searchbar";
import ThemeButton from "./ThemeButton";

interface Props {
  count: number;
}

const Navbar = ({ count }: Props) => {
  return (
    <nav className="w-full h-28 flex items-center justify-between">
      <div className="font-roboto font-bold text-white tracking-widest text-lg">
        RAWG
      </div>
      <Searchbar count={count} />
      <div className=" flex gap-2 items-center">
        <p className="text-white">Dark mode</p>
        <ThemeButton />
      </div>
    </nav>
  );
};

export default Navbar;
