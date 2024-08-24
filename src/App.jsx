import { FilterProvider } from "./context/filter.jsx";
import { useState } from "react";
import {Nav} from './components/Nav.jsx'
import { Layout } from "./components/Layout.jsx";
function App() {
  const [page, setPage] = useState(1);
  return (
      <FilterProvider>
        <Nav setPage={setPage} />
        <Layout page={page} />
      </FilterProvider>
  );
}

export default App;
