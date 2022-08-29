import Welcome from "./Components/Welcome";
import Main from "./Components/Main";
import Account from "./Components/Account";
import Transfer from "./Components/Transfer";
import Reservation from "./Components/Reservation";
import Logout from "./Components/Logout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/transfer" element={<Transfer />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </Router>
  );
}
export default App;
