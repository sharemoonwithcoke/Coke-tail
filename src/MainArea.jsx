
import PropTypes from 'prop-types';
import Home from './Home';
import NewPatientForm from './NewPatientForm';
import CardsPage from './CardsPage'; 
import PanelPage from './PanelPage'; 
import Appointment from './Appointment';


function MainArea({ page }) {
  return (
    <main> 
      {page === '#home' && <Home />}
      
      {page === '#cards' && <CardsPage />}
      {page === '#panel' && <PanelPage />}
      {page === '#new-patient' && <NewPatientForm />}
      {page === '#appointment' && <Appointment />}
    </main>
  );
}

MainArea.propTypes = {
    page: PropTypes.string.isRequired, 
  };
export default MainArea;
