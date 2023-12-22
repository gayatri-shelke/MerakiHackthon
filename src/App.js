import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signup from './component/Signup';
import Login from './component/Login';
import Course from './component/Course'
import Header from "./component/Header";
import Footer from "./component/Footer";
import Profile from "./component/Profile";



export default function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/course" element={<Course />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />

         
        </Routes>

        <Footer />
      </div>
    </Router>
    // <Course/>
  );
}
