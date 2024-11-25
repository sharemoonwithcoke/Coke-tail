import PropTypes from 'prop-types';
import { useEffect } from 'react';
import './PanelPage.css';

function ImgDisplay({ text, imgUrl, imgAlt }) {
    return (
        <div className="img-display">
            <img src={imgUrl} alt={imgAlt} className="display-image" />
            <p className="display-text">{text}</p>
        </div>
    );
}

ImgDisplay.propTypes = {
    text: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired
};

function PanelPage() {
    useEffect(() => {
        document.title = "About";
    }, []);

    return (
        <div className="about-page">
            <a href="#main-content" className="skip-link">Skip to Main Content</a>
            <main id="main-content">
                <section className="hospital-intro">
               
                    <h1>Welcome to Coke Pet Hospital</h1>
                    <p>Welcome to Coke Pet Hospital, where we believe in a stress-free environment for better health and happiness of pets and their human companions. Our state-of-the-art technologies help in prevention, diagnosis, and treatment without the need to visit a clinic. Enjoy our clinic-level care from the comfort of your home.</p>
                </section>
                <div className="team-section">
                    <h2>Meet Our Team</h2>
                    <ImgDisplay
                        text="Dr. Claire is a cat behavior expert who helps our feline friends live better lives."
                        imgUrl="https://images.unsplash.com/photo-1601583844062-7487c80b56b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        imgAlt="Dr. Claire"
                    />
                    <ImgDisplay
                        text="Mitchell, our veterinary assistant, is known for his patience and warmth towards all pets."
                        imgUrl="https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        imgAlt="Assistant Mitchell"
                    />
                    <ImgDisplay
                        text="Dr. Gloria, with her extensive experience, provides calm and expert care in emergencies."
                        imgUrl="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        imgAlt="Dr. Gloria"
                    />
                </div>
                <section className="reviews-section">
                    <h2>What Our Clients Say</h2>
                    <div className="review">
                        <p className="review-quote">“Larry, my white cat, has been much more playful since we started visiting Coke Pet Hospital. Dr. Claire helped him overcome his shyness and fear of new places.”</p>
                        <p className="review-author">— By Cam</p>
                    </div>
                    <div className="review">
                        <p className="review-quote">“I was in a panic when my dog, Max, had an allergic reaction. Dr. Gloria was quick to respond and saved Max’s life. I’m forever grateful.”</p>
                        <p className="review-author">— By Sam</p>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default PanelPage;






  
 
  
  