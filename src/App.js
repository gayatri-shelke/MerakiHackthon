import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signup from './component/Signup';
import Login from './component/Login';
import Courses from './component/Course'
import Header from "./component/Header";
import Footer from "./component/Footer";



export default function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
         
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
