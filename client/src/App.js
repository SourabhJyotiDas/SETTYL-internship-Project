import './index.css';
import Allrecords from "./components/Allrecords.js";
import UserDetails from "./components/UserDetails.js";
import Navbar from "./components/Navbar.js";
import NewUser from "./components/NewUser.js";
import Dashboard from "./components/Dashboard.js";
import UpdateUserDetails from "./components/UpdateUserDetails.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Allrecords />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/updateprofile/:id" element={<UserDetails />} />
          <Route path="/updateuser/:id" element={<UpdateUserDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
