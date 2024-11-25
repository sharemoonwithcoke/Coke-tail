import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import CardsPage from './CardsPage';
import PanelPage from './PanelPage';
import NewPatientForm from './NewPatientForm';
import Appointment from './Appointment';

import './App.css';



function App() {
  const [currentPage, setPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'cards':
       
        return <CardsPage 
          className="card" 
          onReadMore={() => console.log('Read more clicked!')} 
          title="Card Title" 
          pic="path-to-image.jpg" 
          alt="Image description"
          text="If you're happy and you know it, click the button!" 
          linkText="Read More" 
        />;
      case 'panel':
        return <PanelPage />;

      case 'newpatientform':
        return <NewPatientForm />;
        case 'appointment':
          return <Appointment />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <Header setPage={setPage} />
      {renderPage()}
      
      <Footer />
     
    </>
  );
}

export default App;




