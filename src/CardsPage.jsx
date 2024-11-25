import { useState } from 'react';
import './CardsPage.css';

import { useEffect } from 'react';

function CardsPage() {
  const [isClicked] = useState(false); 
  useEffect(() => {
    document.title = "Services Offered";
}, []);

  const cardsData = [
    {
      id: 1,
      title: 'Health Checkups',
      text: 'Regular health checkups are essential to diagnose and treat potential health issues early.',
      imageUrl: 'https://images.unsplash.com/photo-1496284427489-f59461d8a8e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHZldHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 2,
      title: 'Dental Care',
      text: 'Proper dental care helps prevent oral diseases and ensures your pet\'s teeth are healthy and strong.',
      imageUrl: 'https://images.unsplash.com/photo-1644675272883-0c4d582528d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHZldHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 3,
      title: 'Behavioral Consultations',
      text: 'Understanding and managing pet behavior is crucial for a harmonious home.',
      imageUrl: 'https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      title: 'Vaccinations',
      text: 'Vaccinations are vital to protect your pets from various infectious diseases.',
      imageUrl: 'https://images.unsplash.com/photo-1632236542159-809925d85fc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    
  ];



  return (
    <div className='cardspage'>
    <a href="#main-content" className="skip-link">Skip to Main Content</a>
    <main id="main-content">
  <div className="intro-section">
    <h1>Quality Veterinary Services</h1>
    <p>Right at your doorstepFrom wellness exams to disease care, we ave got you covered. Make an appointment and get stress-free veterinary care in the comfort of your own home.</p>
  </div>
  
  <div className="importance-section">
    <h2>Why Regular Visits to a Veterinarian Are Crucial for Your Pet is Health</h2>
    <p>Regular veterinary visits are key to preventive health care, helping to maintain your pet <i></i>s health and well-being by catching potential health issues before they develop into serious conditions.</p>
  </div>
      <div className="cards-container">
        {cardsData.map((card) => (
          <div key={card.id} className="card">
            <img src={card.imageUrl} alt={card.title} className="card-image" />
            <div className="container">
              <h4><b>{card.title}</b></h4>
              <p>{card.text}</p>
         
            </div>
          </div>
        ))}
        {isClicked && <p className="click-feedback">Redirecting to the appointment page...</p>}
      </div>

      <div className="homepage-container">

 
  <div className="contact-form-section">
    <h2>Send a message to for about the above services!</h2>
    <form id="contact-form">
      <input type="text" id="name" name="name" placeholder="Name"  />
      <input type="text" id="email" name="email" placeholder="Email Address"  />
      <input type="text" id="phone" name="phone" placeholder="Phone Number" />
      
      <textarea id="message" name="message" placeholder="Message" ></textarea>
      <button type="submit" className='contact-button'>Submit</button>
    </form>
  </div>
  <div className="contact-info">
  <h2>Contact Info</h2>
  <div className="info-block phone">
    <p> <strong>Call:</strong> +1 234-567-8900</p>
  </div>
  <div className="info-block email">
  <p><strong>Email:</strong> contact@pethospital.com</p>
  </div>
  <div className="info-block address">
  <p><strong>Address:</strong> 1234 Pet Street, Animal Town</p>
  </div>
  <div className="info-block hours">
    <p>Monday - Friday: 8:00AM - 6:00PM</p>
    <p>Saturday: 9:00AM - 5:00PM</p>
    <p>Sunday: Closed</p>
  </div>
</div>

  

</div>

    </main>
    </div>
  );
}

export default CardsPage;


  