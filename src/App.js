import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./pages/landing";
import Option from "./pages/option";
import Create from "./pages/create";
import Map from "./pages/map";
import Name from "./pages/name";
import Mate from "./pages/mate";
import Path from "./pages/path";
import Rate from "./pages/rate";
import Wait from "./pages/wait";
import Mypage from './pages/mypage';
function App() {
  return (
      <Router>
        <Routes>
          <Route path={`/`} element={<Landing />}></Route>
          <Route path={`/option`} element={<Option />}></Route>
          <Route path={`/create`} element={<Create />}></Route>
          <Route path={`/map`} element={<Map />}></Route>
          <Route path={`/name`} element={<Name />}></Route>
          <Route path={`/mate/:teamId`} element={<Mate />}></Route>
          <Route path={`/path`} element={<Path />}></Route>
          <Route path={`/rate`} element={<Rate />}></Route>
          <Route path={`/wait`} element={<Wait />}></Route>
          <Route path={`/mypage`} element={<Mypage />}></Route>
        </Routes>
      </Router>
  );
}

export default App;