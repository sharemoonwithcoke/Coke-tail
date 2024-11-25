import  { useState } from 'react';
import './Appointment.css';
import AccordionSection from './AccordionSection'; 
import { useEffect } from 'react';

function AppointmentForm() {
    useEffect(() => {
        document.title = "Appointment Form";
    }, []);
    const [ownerName, setOwnerName] = useState('');
    const [petName, setPetName] = useState('');
    const [appointmentDate, setAppointmentDate] = useState(''); 
    const [reason, setReason] = useState('');
    const [petSpecies, setPetSpecies] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        let newErrors = {};

        
        if (!ownerName.trim()) {
            valid = false;
            newErrors.ownerName = 'Owner name is required.';
        }
        if (!petName.trim()) {
            valid = false;
            newErrors.petName = 'Pet name is required.';
        }
        if (!appointmentDate.trim()) {
            valid = false;
            newErrors.appointmentDate = 'Appointment date and time are required.';
        }
        if (!reason.trim()) {
            valid = false;
            newErrors.reason = 'Reason for appointment is required.';
        }
        if (!petSpecies.trim()) {
            valid = false;
            newErrors.petSpecies = 'Pet species is required.';
        }

        setErrors(newErrors);

        if (valid) {
            console.log('Form is valid and ready to submit');
           
        }
    };

    return (
        <div className='appointment'>
              <a href="#main-content" className="skip-link">Skip to Main Content</a>
              <main id="main-content">
        <form onSubmit={handleSubmit}>
            <div>
                <h2>Book an Appointment</h2>
                <p>Please fill out the form below to book an appointment for your pet.</p>
                <label>Owner Name:</label>
                <input
                    type="text"
                    value={ownerName}
                    onChange={e => setOwnerName(e.target.value)}
                />
                {errors.ownerName && <p style={{color: 'red'}}>{errors.ownerName}</p>}
            </div>
            <div>
                <label>Pet Name:</label>
                <input
                    type="text"
                    value={petName}
                    onChange={e => setPetName(e.target.value)}
                />
                {errors.petName && <p style={{color: 'red'}}>{errors.petName}</p>}
            </div>
            <div>
                <label>Pet Species:</label>
                <select value={petSpecies} onChange={(e) => setPetSpecies(e.target.value)}>
                    <option value="">Select Species</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="other">Other</option>
                </select>
                {errors.petSpecies && <p style={{color: 'red'}}>{errors.petSpecies}</p>}
            </div>
            <div>
                <label>Appointment Date:</label>
                <input
                    type="datetime-local"
                    value={appointmentDate}
                    onChange={e => setAppointmentDate(e.target.value)}
                    required
                />
                {errors.appointmentDate && <p style={{color: 'red'}}>{errors.appointmentDate}</p>}
            </div>
            <div>
                <label>Reason for Appointment:</label>
                <input
                    type="text"
                    value={reason}
                    onChange={e => setReason(e.target.value)}
                />
                {errors.reason && <p style={{color: 'red'}}>{errors.reason}</p>}
            </div>
           
            <button type="submit">Submit</button>
        </form>
        <div className="vet-info">
        <h2>For any emergencies, contact us directly</h2>
      <p><strong>Phone:</strong> +1 234-567-8900</p>
      <p><strong>Email:</strong> contact@pethospital.com</p>
      <p><strong>Address:</strong> 1234 Pet Street, Animal Town, USA</p>
      <p><strong>Opening Hours:</strong> Mon - Fri, 8 AM - 6 PM</p>
    </div>
    <div className="pet-care-tips">
                <h2>Tips for Common Pet Problems</h2>
                <AccordionSection label="What pets can not eat?">
                    <p>In general, pets that have accidentally eaten chocolate, alcohol, caffeine, or xylitol should be taken to a hospital immediately.</p>
                </AccordionSection>
                <AccordionSection label="Oh, my God. They ate it. What am I gonna do?">
                    <p>Try using hydrogen peroxide to induce vomiting or activated charcoal to detoxify your pet, as well as immediate transportation to a hospital.</p>
                </AccordionSection>
                <AccordionSection label="How can I tell if my pet is sick?">
                    <p>When your pet is sick, it is always accompanied by fatigue, prolonged sleeping, unusual fever and increased eye droppings, so please be aware of these conditions.</p>
                </AccordionSection>
                <AccordionSection label="If my pet is not sick, but I have some health questions I want to ask, can I make an appointment?">
                    <p>Of course, we welcome it! In fact, if it is just health counseling, we will only charge you $20 an hour!</p>
                </AccordionSection>
                <AccordionSection label="My pet needs emergency care! But you not open. What do I do?">
                    <p>Please call directly! Our phones will be open 24 hours a day, if no one answers, please find the nearest emergency vet clinic and human vet hospital that will accept your pet!</p>
                </AccordionSection>
            </div>
            </main>
    </div>
    
    
    );
}

export default AppointmentForm;


