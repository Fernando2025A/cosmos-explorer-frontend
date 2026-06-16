import { Route, Routes} from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home/Home'
import Explorer from './pages/Explorer/Explorer'
import Discoveries from './pages/Discoveries/Discoveries'
import Learn from './pages/Learn/Learn'
import News from './pages/News/News'
function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/explorer" element={<Explorer />}/>
      <Route path="/discoveries" element={<Discoveries />}/>
      <Route path="/learn" element={<Learn />}/>
      <Route path="/news" element={<News />}/>
    </Routes>
  )
}

export default App
