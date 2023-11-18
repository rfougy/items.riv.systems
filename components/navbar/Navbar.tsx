import { useSearchContext } from "../../context/SearchContext";

import DefaultLayout from "./layouts/default/DefaultLayout";
import SearchLayout from "./layouts/search/SearchLayout";

const Navbar: React.FC<{
  toggleTheme: () => void;
}> = ({ toggleTheme }) => {
  const { searchActivated, setSearchActivated, setSearchResults } =
    useSearchContext();

  if (searchActivated)
    return (
      <SearchLayout
        setSearchActivated={setSearchActivated}
        setSearchResults={setSearchResults}
      />
    );

  return (
    <DefaultLayout
      toggleTheme={toggleTheme}
      setSearchActivated={setSearchActivated}
    />
  );
};

export default Navbar;
