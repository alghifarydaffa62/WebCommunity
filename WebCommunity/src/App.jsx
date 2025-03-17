import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Beranda from './components/beranda'
import Teknologi from './components/pageTekno'
import Olahraga from './components/pageOlahraga'
import Webdev from './components/Teknologi/PageWebdev'
import OSC from './components/Teknologi/PageOSC'
import GameKita from './components/Teknologi/PageGamekita'
import ShuttleBlue from './components/Olahraga/PageShuttleBlue'
import BlueIce from './components/Olahraga/PageBlueIce'
import BlueKnight from './components/Olahraga/PageBlueKnight'
import IBall from './components/Olahraga/PageIBall'
import Isport from './components/Olahraga/PageISport'
import Event from './components/Event'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Beranda/>}/>
          <Route path='/KomunitasOlahraga' element={<Olahraga/>}/>
          <Route path='/KomunitasTeknologi' element={<Teknologi/>}/>
          <Route path='/Event' element={<Event/>}/>
          <Route path='/KomunitasTeknologi/Webdev' element={<Webdev/>}/>
          <Route path='/KomunitasTeknologi/OSC' element={<OSC/>}/> 
          <Route path='/KomunitasTeknologi/GameKita' element={<GameKita/>}/> 
          <Route path='/KomunitasOlahraga/BlueIce' element={<BlueIce/>}/>
          <Route path='/KomunitasOlahraga/BlueKnight' element={<BlueKnight/>}/>
          <Route path='/KomunitasOlahraga/ShuttleBlue' element={<ShuttleBlue/>}/>
          <Route path='/KomunitasOlahraga/I-Ball' element={<IBall/>}/>
          <Route path='/KomunitasOlahraga/I-Sport' element={<Isport/>}/> 
        </Routes>
      </Router>
    </div>
  )
}

export default App
