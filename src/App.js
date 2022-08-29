import Welcome from "./moduls/welcome/Welcome";
import Kmd from "./moduls/kmd/Kmd";
import Account from "./moduls/account/Account";
import Transfer from "./moduls/transfer/Transfer";
import Reservation from "./moduls/reservation/Reservation";
import Logout from "./moduls/logout/Logout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/kmd" element={<Kmd />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/transfer" element={<Transfer />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </Router>
  );
}
export default App;
