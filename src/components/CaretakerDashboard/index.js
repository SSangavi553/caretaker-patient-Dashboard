import { Link } from 'react-router-dom'
import './index.css';

const CaretakerDashboard = () => {
  return (
    <div className="caretaker-dashboard">
      <header className="header">
        <h2>MediCare Companion</h2>
        <p>Caretaker View</p>
        <Link to="/patient">
        <button className="switch-btn">Switch to Patient</button>
        </Link>
      </header>

      <section className="overview-section">
        <h2>Caretaker Dashboard</h2>
        <p>Monitoring Eleanor Thompson's medication adherence</p>
        <div className="overview-cards">
          <div className="card green">
            <h3>85%</h3>
            <p>Adherence Rate</p>
          </div>
          <div className="card blue">
            <h3>5</h3>
            <p>Current Streak</p>
          </div>
          <div className="card purple">
            <h3>3</h3>
            <p>Missed This Month</p>
          </div>
          <div className="card orange">
            <h3>4</h3>
            <p>Taken This Week</p>
          </div>
        </div>
      </section>

      <section className="tabs">
        <button>Overview</button>
        <button>Recent Activity</button>
        <button>Calendar View</button>
        <button>Notifications</button>
      </section>

      <section className="status-action-section">
        <div className="status-card">
          <h3>Today's Status</h3>
          <p>Daily Medication Set - 8:00 AM <span className="pending">Pending</span></p>
        </div>
        <div className="quick-actions">
          <h3>Quick Actions</h3>
          <button>Send Reminder Email</button>
          <button>Configure Notifications</button>
          <button>View Full Calendar</button>
        </div>
      </section>

      <section className="progress-section">
        <h3>Monthly Adherence Progress</h3>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '85%' }}></div>
        </div>
        <div className="progress-info">
          <span className="green-text">22 days Taken</span>
          <span className="red-text">3 days Missed</span>
          <span className="blue-text">5 days Remaining</span>
        </div>
      </section>
    </div>
  );
};

export default CaretakerDashboard;
