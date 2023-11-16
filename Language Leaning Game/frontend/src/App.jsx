import './App.css'
import ParentElement from '../pages/ParentElement';
import ParentElement2 from '../pages/ParentElement2';
import ParentElement3 from '../pages/ParentElement3';
import ParentElement4 from '../pages/ParentElement4';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<ParentElement/>} />
        <Route path="/leaderboard" element={<ParentElement2/>} />
        <Route path="/quiz" element={<ParentElement3/>} />
        <Route path="/quizboard" element={<ParentElement4/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
