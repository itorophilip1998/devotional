import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/Auth/Signin/Signin";
import SignUp from "./pages/Auth/Signup/Sigup";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";
import ManualList from "./pages/Manual/ManualList";
import Devotional from "./pages/Devotional";
import Manual from "./pages/Manual";
import Footer from "./layouts/Footer";
import DevotionalList from "./pages/Devotional/DevotionalList";
import Header from "./layouts/Headers/Header";
import Profile from "./pages/Profile";
import Tip from "./pages/Tip/Tip";
import Subscribe from "./pages/Subscribe";
import ProtectedRoutes from "./Middleware/ProtectedRoutes";
import IsOffline from "./components/IsOffline";
import PublicRoutes from "./Middleware/PublicRoutes";


function App() {

  return (
    <BrowserRouter>
      <Header />
      <IsOffline />
      <Routes>
        {/* auth routes */}
        <Route path="/" element={<ProtectedRoutes />} >
          <Route path="/" element={<DevotionalList />} />
          <Route path="/devotional" element={<DevotionalList />} />
          <Route path="/manual" element={<ManualList />} />
          <Route path="/devotional/:topic" element={<Devotional />} />
          <Route path="/manual/:topic" element={<Manual />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tips" element={<Tip />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Route>

        {/* guest routes */}
        <Route path="/auth" element={<PublicRoutes />} >
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
        </Route>

      </Routes>
      <Footer />
    </BrowserRouter >
  );
}

export default App;
