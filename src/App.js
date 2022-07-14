import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/Auth/Signin/Signin";
import SignUp from "./pages/Auth/Signup/Sigup";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";
import Verify from "./pages/Auth/Verify/Verify";
import ManualList from "./pages/Manual/ManualList";
import Devotional from "./pages/Devotional/Devotional";
import Manual from "./pages/Manual/Manual";
import Footer from "./layouts/Footer";
import DevotionalList from "./pages/Devotional/DevotionalList";
import Header from "./layouts/Header";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* auth routes */}
        <Route path="/" element={<DevotionalList />} />
        <Route path="/devotional" element={<DevotionalList />} />
        <Route path="/manual" element={<ManualList />} />
        <Route path="/devotional/:topic" element={<Devotional />} />
        <Route path="/manual/:topic" element={<Manual />} /> 
         
        {/* guest routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
      <Footer />
    </BrowserRouter >
  );
}

export default App;
