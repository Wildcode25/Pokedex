import { FilterProvider } from "./context/filter.jsx";
import { useState } from "react";
import { Nav } from "./components/Nav.jsx";
import { Layout } from "./components/Layout.jsx";
import { PokemonProvider } from "./context/pokemons.jsx";
import { useFilter } from "./hooks/filter.js";
function App() {
  const [page, setPage] = useState(1);
  
  return (
    <FilterProvider>
      <PokemonProvider>
        <Nav setPage={setPage} />
        <Layout page={page} />
      </PokemonProvider>
    </FilterProvider>
  );
}

export default App;
