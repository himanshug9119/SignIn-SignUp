import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './components/Header';
import { PrivateRoute1, PrivateRoute2 } from "./components/PrivateRoute";
export default function App(){
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute1 />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<PrivateRoute2 />}>
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
        <Route element={<PrivateRoute2 />}>
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}