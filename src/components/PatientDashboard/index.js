import { useState } from 'react';
import {Link} from 'react-router-dom'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './index.css';


const PatientDashboard = () => {

     const [date, setDate] = useState(new Date());

  return (
    <div className="patient-dashboard">
      <header className="dashboard-header">
        <h2>MediCare Companion <span>Patient View</span></h2>
        <Link to="/caretaker">
        <button>Switch to Caretaker</button>
        </Link>
      </header>

      <section className="greeting-card">
        <h3>Good Afternoon!</h3>
        <p>Ready to stay on track with your medication?</p>
        <div className="stats">
          <div>0 Day Streak</div>
          <div>Today's Status</div>
          <div>0% Monthly Rate</div>
        </div>
      </section>

      <section className="medication-section">
        <div className="today-medication">
          <h3>Today's Medication</h3>
          <div>
            <p>Daily Medication Set</p>
            <p>Complete set of daily tablets - 8:00 AM</p>
          </div>
          <div className="upload-photo">
            <p>Add Proof Photo (Optional)</p>
            <button>Take Photo</button>
          </div>
          <button className="mark-btn">Mark as Taken</button>
        </div>

        <div className="medication-calendar">
          <h3>Medication Calendar</h3>
       <Calendar onChange={setDate} value={date} />
        </div>
      </section>
    </div>
  );
};

export default PatientDashboard;
