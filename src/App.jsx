import { UserManagement } from "./components/UserManagement";
import { UserProvider } from "./context/user.jsx";
import { MessageProvider } from "./context/message.jsx";
import { Notification } from "./components/Notification.jsx";
import { FilterProvider } from "./context/filter.jsx";
function App() {
  return (
    <UserProvider>
      <MessageProvider>
        <FilterProvider>
          <Notification />

          <UserManagement />
        </FilterProvider>
      </MessageProvider>
    </UserProvider>
  );
}

export default App;
