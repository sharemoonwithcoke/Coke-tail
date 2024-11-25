import { useState } from 'react';
import PropTypes from 'prop-types'; 
import './AccordionSection.css';


const AccordionSection = ({ label, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
  
    const toggleSection = (event) => {
      event.preventDefault();  
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="accordion-section">
        <button type="button" className="accordion-title" onClick={toggleSection}>
          {label}
        </button>
        {isOpen && <div className="accordion-content">{children}</div>}
      </div>
    );
};


AccordionSection.propTypes = {
  label: PropTypes.string.isRequired, 
  children: PropTypes.node.isRequired, 
  defaultOpen: PropTypes.bool 
};

export default AccordionSection;



