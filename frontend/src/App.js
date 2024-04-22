import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../src/assets/fonts/remixicon.css';
import '../src/assets/css/style.css';

// Components
import Home from './component/Pages/Home/Home';
import About from './component/Pages/About/About';
import Contact from './component/Pages/Contact/Contact';
import Services from './component/Pages/Services/Services';
import Price from './component/Pages/Price/Price';
import Team from './component/Pages/Team/Team';
import TeamDetails from './component/Pages/TeamDetails/TeamDetails';
import Faq from './component/Pages/Faq/Faq';
import Login from './component/Pages/Login/Login';
import Dashboard from './component/Pages/Dashboard/Dashboard';
import Help from './component/Pages/Help/Help';
import SignUp from './component/Pages/SignUp/SignUp';
import Settings from './component/Pages/Settings/Settings';
import Error404 from './component/Pages/Error404/Error404';
import Referrals from './component/Pages/Referrals/Referrals';
import Specs from './component/Pages/Specs/Specs';
import Roles from './component/Pages/Roles/Roles';
import ScrollUpBtn from './component/Shared/ScrollUpBtn';
import APISecurity from './component/Pages/Dashboard/APISecurity/APISecurity';

function App() {
  return (
    <div>
      <Helmet>
        <title>Helix Auth</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Helmet>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/price' element={<Price />}></Route>
        <Route path='/team' element={<Team />}></Route>
        <Route path='/team-details' element={<TeamDetails />}></Route>
        <Route path='/faq' element={<Faq />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/dashboard' element={<APISecurity />}></Route>
        <Route path='/apisecurity' element={<APISecurity />}></Route>
        <Route path='/help' element={<Help />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
        <Route path='/referrals' element={<Referrals />}></Route>
        <Route path='/specs' element={<Specs />}></Route>
        <Route path='/roles' element={<Roles />}></Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
      <ScrollUpBtn />
      <ToastContainer />
    </div>
  );
}

export default App;
