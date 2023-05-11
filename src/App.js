import './App.css';
import './assets/style.css';
import { Routes, Route } from 'react-router-dom';
import ContactList from './pages/ContactList';
import About from './pages/About';
import Sidebar from './components/molecules/Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='grid sm:flex min-h-screen'>
      <ToastContainer />
      <Sidebar/>
      <div className="sm:ml-64 bg-grey-6 flex-auto p-2 sm:p-8  mt-16 sm:mt-0 ">
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
