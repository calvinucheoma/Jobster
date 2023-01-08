import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Error, Landing, Dashboard, Register, ProtectedRoute} from "./pages";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Profile, Stats, AddJob, AllJobs, SharedLayout } from './pages/dashboard';


function App() {

  return (

    <Router>

      <Routes>

        <Route 
          path='/' 
          element={
            <ProtectedRoute> 
              <SharedLayout/> 
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats/>} />
          <Route path='profile' element={<Profile/>} />
          <Route path='add-job' element={<AddJob/>} />
          <Route path='all-jobs' element={<AllJobs/>} />
        </Route>

        <Route path='landing' element={<Landing/>} />
        <Route path='register' element={<Register/>} />
        <Route path='*' element={<Error/>} />

      </Routes>

      <ToastContainer position='top-center'/>

    </Router>

  );
}

export default App;
