import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainWebsite from "./component/mainWebsite/MainWebsite";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import UgRegular from "./component/mainWebsite/Admission/UgRegular/UgRegular";
import PgRegular from "./component/mainWebsite/Admission/PgRegular/PgRegular";
import StudentDetails from "./component/mainWebsite/Admission/CommonComponent/StudentDetails";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainWebsite />} />
          <Route path="/UgRegular" element={<UgRegular />}/>
          <Route path="/PgRegular" element={<PgRegular />}/>
          <Route path="/UgRegular" element={<StudentDetails />} >
            <Route path="/StudentDetails" />
          </Route>
          <Route path="/PgRegular/StudentDetails" element={<StudentDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
