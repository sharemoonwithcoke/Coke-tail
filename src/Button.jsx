import PropTypes from 'prop-types';
import './Button.css';

function Button({
  children,
  className,
  disabled = false,
  onClick,
  type = "button",
  visual = "button",
}) {
  let buttonClass = "button";
  if (visual === "link") {
    buttonClass = "button-link";
  }

  return (
    <button
      className={`${buttonClass} ${className}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,   
  className: PropTypes.string,           
  disabled: PropTypes.bool,             
  onClick: PropTypes.func,              
  type: PropTypes.oneOf(['button', 'submit']), 
  visual: PropTypes.oneOf(['button', 'link']), 
};

Button.defaultProps = {
  className: '',                         
  disabled: false,                       
  type: "button",                        
  visual: "button",                      
};

export default Button;
