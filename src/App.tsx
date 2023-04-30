import Main from "./layout/Main";
import type { RootState } from "./store/store";
import { useSelector } from "react-redux";

function App() {
  const dark = useSelector((state: RootState) => state.theme.dark);

  return (
    <div className={`${dark ? "dark" : "false"} bg-black`}>
      <div className="md:w-11/12 mx-auto overflow-x-hidden">
        <Main />
      </div>
    </div>
  );
}

export default App;
