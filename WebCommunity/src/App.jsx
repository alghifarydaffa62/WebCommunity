import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Beranda from './components/beranda'
import Teknologi from './components/pageTekno'
import Olahraga from './components/pageOlahraga'
import Webdev from './components/Webdev/webdevPage'
import OSC from './components/OSC/PageOSC'
import GameKita from './components/GameKita/PageGamekita'
import ShuttleBlue from './components/ShuttleBlue/PageShuttleBlue'
import BlueIce from './components/BlueIce/PageBlueIce'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Beranda/>}/>
          <Route path='/KomunitasOlahraga' element={<Olahraga/>}/>
          <Route path='/KomunitasTeknologi' element={<Teknologi/>}/>
          <Route path='/KomunitasTeknologi/Webdev' element={<Webdev/>}/>
          <Route path='/KomunitasTeknologi/OSC' element={<OSC/>}/> 
          <Route path='/KomunitasTeknologi/GameKita' element={<GameKita/>}/> 
          <Route path='/KomunitasOlahraga/ShuttleBlue' element={<ShuttleBlue/>}/> 
          <Route path='/KomunitasOlahraga/BlueIce' element={<BlueIce/>}/> 
        </Routes>
      </Router>
    </div>
  )
}

export default App
