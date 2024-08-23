import { MessageProvider } from "./context/message.jsx";
import { Notification } from "./components/Notification.jsx";
import { FilterProvider } from "./context/filter.jsx";
import {Home} from './components/Home.jsx'
function App() {
  return (
      <MessageProvider>
        <FilterProvider>
          <Notification />
          <Home />
        </FilterProvider>
      </MessageProvider>
  );
}

export default App;
