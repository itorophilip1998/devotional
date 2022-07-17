import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/Auth/Signin/Signin";
import SignUp from "./pages/Auth/Signup/Sigup";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword"; 
import ManualList from "./pages/Manual/ManualList";
import Devotional from "./pages/Devotional/Devotional";
import Manual from "./pages/Manual/Manual";
import Footer from "./layouts/Footer";
import DevotionalList from "./pages/Devotional/DevotionalList";
import Header from "./layouts/Headers/Header";
import Profile from "./pages/Profile"; 
import Tip from "./pages/Tip/Tip";


function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        {/* auth routes */}
        
        <Route path="/" element={<DevotionalList />} />
        <Route path="/devotional" element={<DevotionalList />} />
        <Route path="/manual" element={<ManualList />} />  
        <Route path="/devotional/:topic" element={<Devotional />} />
        <Route path="/manual/:topic" element={<Manual />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/tips" element={<Tip />} />

        {/* guest routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
     
      </Routes>
      <Footer />
    </BrowserRouter >
  );
}

export default App;
