import { Route, Routes} from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home/Home'
import { Explorer } from './pages/Explorer/Explorer'
import { Guide } from './pages/Guide/Guide'
import { Learn } from './pages/Learn/Learn'
import { News } from './pages/News/News'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import { Profile } from './pages/Profile/Profile'
import { ProtectedRoute } from './components/ProtectedRoute'
function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/explorer" element={<Explorer />}/>
      <Route path="/guide" element={<Guide />}/>
      <Route path="/learn" element={<Learn />}/>
      <Route path="/news" element={<News />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
    </Routes>
  )
}

export default App
