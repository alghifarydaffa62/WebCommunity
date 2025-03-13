import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Beranda from './components/beranda'
import Teknologi from './components/pageTekno'
import Olahraga from './components/pageOlahraga'
import Webdev from './components/Webdev/webdevPage'
import OSC from './components/OSC/PageOSC'
import GameKita from './components/GameKita/PageGamekita'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Beranda/>}/>
          <Route path='/KomunitasOlahraga' element={<Olahraga/>}/>
          <Route path='/KomunitasTeknologi' element={<Teknologi/>}/>
          <Route path='/Webdev' element={<Webdev/>}/>
          <Route path='/OSC' element={<OSC/>}/> 
          <Route path='/GameKita' element={<GameKita/>}/> 
        </Routes>
      </Router>
    </div>
  )
}

export default App
