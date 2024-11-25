import { useRef, useEffect, useState } from 'react';
import Button from './Button';
import './HomePage.css';

function HomePage() {
    useEffect(() => {
        document.title = "Home";
    }, []);

    const dialogRef = useRef(null); 
    const [email, setEmail] = useState(''); 
    const [currentSlide, setCurrentSlide] = useState(0); 
    const [showDiscountMessage, setShowDiscountMessage] = useState(false); 
    const [subscriptionMessage, setSubscriptionMessage] = useState(''); 
    const [autoPlay, setAutoPlay] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const images = [
        { src: 'https://images.unsplash.com/photo-1437957146754-f6377debe171?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'A cat lying down comfortably' },
        { src: 'https://images.unsplash.com/photo-1582456891925-a53965520520?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D', alt: 'A playful dog with a ball' },
        { src: 'https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'A happy dog with its owner' },
    ];

    useEffect(() => {
        if (!showDiscountMessage) { 
            dialogRef.current.showModal();
        }
    }, [showDiscountMessage]);

    useEffect(() => {
        let interval = null;
        if (autoPlay) {
            interval = setInterval(() => {
                setCurrentSlide((currentSlide + 1) % images.length);
            }, 3000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [autoPlay, currentSlide, images.length]);

  
useEffect(() => {
    let interval = null;
    if (autoPlay) {
        interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 3000); 
    } else {
        clearInterval(interval); 
    }
    return () => clearInterval(interval); 
}, [autoPlay, currentSlide, images.length]); 

    const handleEmailChange = (e) => {
      const inputEmail = e.target.value;
      setEmail(inputEmail);
  
    
      if (inputEmail && !inputEmail.includes('@')) {
          setSubscriptionMessage('email address have to include @ symbol');
      } else {
          setSubscriptionMessage('');
      }
  };
  const handleSubscribe = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!email.includes('@')) {
        setSubscriptionMessage('Please enter a valid email address.');
        return;
    }

    setConfirmationMessage('Thank you for subscribing! You will receive a confirmation email shortly.');
    setEmail('');
    dialogRef.current.close();
    setShowDiscountMessage(false);
};


    const handleOpenDialog = () => {
        setShowDiscountMessage(false);
        dialogRef.current.showModal();
    };

    const handleCloseClick = (e) => {
        e.stopPropagation();
        dialogRef.current.close();
        setShowDiscountMessage(true);
    };

    return (
        <div>
        <a href="#main-content" className="skip-link">Skip to Main Content</a>
        
        
           
            <main id="main-content">
            <div className="carousel-with-text">
    <div className="carousel" onClick={() => setCurrentSlide((currentSlide + 1) % images.length)}>
        {images.map((img, index) => (
            <img key={img.src} src={img.src} alt={img.alt} className={index === currentSlide ? 'carousel-image-visible' : 'carousel-image-hidden'} />
        ))}
    </div>
    <div className="carousel-text">
    <h1 className="welcome-title">Welcome to Happy Paws Veterinary Clinic</h1>
       
        <p>A neighbor who cares for your petWe are not just veterinarians, we are your dedicated partner in pet care.</p>
        <Button onClick={() => setAutoPlay(!autoPlay)}>
    {autoPlay ? 'Pause Slideshow' : 'Start Slideshow'}
</Button>
    </div>
</div>


            <div className="info-container">
                <h3>Comprehensive Care for Your Furry Friends</h3>
                <p>At Happy Paws Veterinary Clinic, we believe every pet deserves high-quality veterinary care.</p>
                <p>From wellness exams to advanced diagnostics, we are here to help your pet live their happiest, healthiest life.</p>
            </div>
            {confirmationMessage && (
    <p className="confirmation-message">{confirmationMessage}</p>
)}

           
            {showDiscountMessage && (
                <>
                    <p>Would you like a deal？</p>
                    <Button visual="button" onClick={handleOpenDialog}>check here!</Button>
                </>
            )}
 <dialog ref={dialogRef}>
            <h3>Unlock $20 off if you subscribe</h3>
            <p>Sign up to save on your first at-home appointment and receive exclusive pet care tips and updates.</p>
            <form onSubmit={handleSubscribe}>
                <input
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    required
                />
                
                {subscriptionMessage && <p style={{ color: 'red', marginTop: '4px' }}>{subscriptionMessage}</p>}
                <Button type="submit" visual="button">Subscribe</Button>
                <Button type="link" visual="link" onClick={handleCloseClick}>No, Thanks</Button>
            </form>
        </dialog>
        <div className="for-you">
        <h2>Why We Love Veterinary Medicine</h2>
    <p>We love veterinary medicine because, every day, we are able to make a meaningful difference in the lives of people and pets. That can come in large or small ways. It can show up in how we care for you. How we make you feel appreciated and understood. How you always have our undivided attention. In every visit, and during every moment, you and your pet will be more than our client and patient… you are our mission. And we built this place for you.</p>
</div>
        
        <div className="vet-culture-section">
    <h2>Culture</h2>
    <p>Here, you wont just find a team of incredibly talented veterinary professionals. You will find a small and passionate group of dreamers, doers, and difference makers. We collaborate. We support each other. We work together like family. We make magic happen. Because, to us, that’s exactly what it is to make a difference in the life and love you share with your pet.</p>
</div>

</main>



        
        </div>
    );
}

export default HomePage;









