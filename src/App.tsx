import { AuthLayout } from "./pages/auth/AuthLayout"
import { LoginPage } from "./pages/auth/login"
import { RegisterPage } from "./pages/auth/register"
import { AppRouter } from "./routing/AppRouter"

function App() {
  return (
    <div>
      <AppRouter/>
    </div>
  )
}

export default App
