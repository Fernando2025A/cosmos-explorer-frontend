import { Route, Routes} from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home/Home'
import { Explorer } from './pages/Explorer/Explorer'
import { Guide } from './pages/Guide/Guide'
import { Learn } from './pages/Learn/Learn'
import { News } from './pages/News/News'
function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/explorer" element={<Explorer />}/>
      <Route path="/guide" element={<Guide />}/>
      <Route path="/learn" element={<Learn />}/>
      <Route path="/news" element={<News />}/>
    </Routes>
  )
}

export default App
