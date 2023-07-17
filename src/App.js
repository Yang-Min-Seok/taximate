import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./pages/landing";
import Evaluate from "./pages/evaluate";

function App() {
  return (
      <Router>
        <Routes>
          <Route path={`/`} element={<Landing />}></Route>
          <Route path={`/evaluate`} element={<Evaluate />}></Route>
        </Routes>
      </Router>
  );
}

export default App;