import { Route, Routes, BrowserRouter} from 'react-router-dom';
import AllPlayers from './components/AllPlayers'
import NavBar from './components/NavBar'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'
import { useState } from 'react';
import './App.css';


function App() {
return (
<BrowserRouter>
    <NavBar />
    <Routes>
      <Route path = "/"  element ={<AllPlayers />} />
      <Route path = "/player/:playerID" element ={<SinglePlayer />} />
      <Route path = "/new" element = {<NewPlayerForm />} />
    </Routes>
  

</BrowserRouter>
)
}  


export default App
