import { UserManagement } from "./components/UserManagement"
import { UserProvider } from "./context/user.jsx"
import { MessageProvider } from "./context/message.jsx"
import { Notification } from "./components/Notification.jsx"
function App() {
  

  return (
    <UserProvider>
      <MessageProvider>
       <Notification />
      <UserManagement />
      </MessageProvider>
    </UserProvider>
  )
}

export default App
