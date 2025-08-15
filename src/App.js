import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import LearnerHomePage from './Pages/LearnerHomePage/LearnerHomePage';
import ParentHomePage from './Pages/ParentHomePage/ParentHomePage';
import TeacherHomePage from './Pages/TeacherHomePage/TeacherHomePage';


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/Home/Learner" element={<LearnerHomePage/>} />
          <Route path="/Home/Parent" element={<ParentHomePage/>} />
          <Route path="/Home/Teacher" element={<TeacherHomePage/>} />
        </Routes>
    </div>
  );
}

export default App;
