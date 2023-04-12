import { Routes, Route } from 'react-router-dom'
import './App.module.scss'
import NavLayout from './components/NavLayout'
import SearchAndChat from './SearchAndChat'

function App() {

  return (
    <Routes>
      <Route element={<NavLayout />}>
        <Route path="/" element={<SearchAndChat />} />
      </Route>
    </Routes>
  )
}

export default App
