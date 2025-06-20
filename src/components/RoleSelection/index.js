import { Link } from 'react-router-dom';
import './index.css';

const RoleSelection = () => {
  return (
    <div className="role-selection-container">
      <img src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png" alt="Logo" className="logo" />
      <h1>Welcome to MediCare Companion</h1>
      <p>Your trusted partner in medication management. Choose your role to get started with personalized features.</p>

      <div className="role-cards">
        <div className="card">
          <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="Patient Icon" className="card-icon" />
          <h2>I'm a Patient</h2>
          <p>Track your medication schedule and maintain your health records</p>
          <ul>
            <li>Mark medications as taken</li>
            <li>Upload proof photos (optional)</li>
            <li>View your medication calendar</li>
            <li>Large, easy-to-use interface</li>
          </ul>
          <Link to="/patient" className="patient-btn">Continue as Patient</Link>
        </div>

        <div className="card">
          <img src="https://cdn-icons-png.flaticon.com/512/1011/1011863.png" alt="Caretaker Icon" className="card-icon" />
          <h2>I'm a Caretaker</h2>
          <p>Monitor and support your loved one's medication adherence</p>
          <ul>
            <li>Monitor medication compliance</li>
            <li>Set up notification preferences</li>
            <li>View detailed reports</li>
            <li>Receive email alerts</li>
          </ul>
          <Link to="/caretaker" className="caretaker-btn">Continue as Caretaker</Link>
        </div>
      </div>

      <p className="switch-text">You can switch between roles anytime after setup</p>
    </div>
  );
};

export default RoleSelection;