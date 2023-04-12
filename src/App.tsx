import { Routes, Route } from 'react-router-dom'
import './App.module.scss'
import NavLayout from './components/NavLayout'
import SearchAndChat from './components/SearchAndChat'

function App() {

  return (
    <Routes>
      <Route element={<NavLayout />}>
        <Route path="/" element={<SearchAndChat />} />
        <Route path="/:twitterId/chat" element={<SearchAndChat />} />
      </Route>
    </Routes>
  )
}

export default App
