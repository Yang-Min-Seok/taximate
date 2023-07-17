import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./pages/landing";
import Evaluate from "./pages/evaluate";
import MakeTeam from "./pages/makeTeam";
import TeamInfo from "./pages/teamInfo";

function App() {
  return (
      <Router>
        <Routes>
          <Route path={`/`} element={<Landing />}></Route>
          <Route path={`/evaluate`} element={<Evaluate />}></Route>
          <Route path={`/makeTeam`} element={<MakeTeam />}></Route>
          <Route path={`/teamInfo`} element={<TeamInfo />}></Route>
        </Routes>
      </Router>
  );
}

export default App;