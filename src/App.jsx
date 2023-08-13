// import { useState } from 'react'cd m
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Authentication from './pages/Authentication/Authentication';
import Register from './features/Auth/Register/Register';
import Login from './pages/Login';
import ShowAllMember from './features/Member/ShowAllMember';
import ShowAllGroup from './features/Group/ShowAllGroup';
import ShowAllEvent from './features/Event/ShowAllEvent';
import Dashboard from './pages/Dashboard/Dashboard';
import MyTransactions from './pages/MyTransactions/MyTransactions';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/members" element={<ShowAllMember />} />
        <Route path="/group" element={<ShowAllGroup />} />
        <Route path="/courses" element={<ShowAllGroup />} />
        <Route path="/events" element={<ShowAllEvent />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mytransactions" element={<MyTransactions />} />
      </Routes>
    </div>
  );
}

export default App;
