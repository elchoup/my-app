import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home"
import Signup from "./components/Signup/Signup"
import Login from "./components/Login/Login"
import CreatePost from './components/Create/CreatePost'
import OnePost from './components/OnePost/OnePost'
import ModifyPost from './components/ModifyPost/ModifyPost'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element = {<Home />} />
        <Route path='/signup' element = {<Signup />} />
        <Route path="/" element = {<Login />} />
        <Route path="/createPost" element = {<CreatePost />} />
        <Route path="/:id" element = {<OnePost />} />
        <Route path="/modif/:id" element = {<ModifyPost />} />
      </Routes>
    </div>
  );
}

export default App;
