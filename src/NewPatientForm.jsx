import { useState, useEffect } from 'react';
import AccordionSection from './AccordionSection';
import './NewPatientForm.css';

function NewPatientForm() {
    useEffect(() => {
        document.title = "New Patient Form";
    }, []);

    const [petName, setPetName] = useState('');
    const [petColor, setPetColor] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [ownerEmail, setOwnerEmail] = useState('');
    const [ownerAddress, setOwnerAddress] = useState('');
    const [ownerPhone, setOwnerPhone] = useState('');
    const [billingAddress, setBillingAddress] = useState('');
    const [billingSameAsOwner, setBillingSameAsOwner] = useState(false);
    const [petGender, setPetGender] = useState('');
    const [petSpecies, setPetSpecies] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [errors, setErrors] = useState({});

    const handleBillingAddressChange = (event) => {
        if (!billingSameAsOwner) {
            setBillingAddress(event.target.value);
        }
    };

    const toggleBillingAddress = () => {
        setBillingSameAsOwner(!billingSameAsOwner);
        if (billingSameAsOwner) {
            setBillingAddress('');
        } else {
            setBillingAddress(ownerAddress);
        }
    };

    const hasContent = (text) => {
        return /\S/.test(text); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

      
        if (!hasContent(ownerName)) newErrors.ownerName = 'Owner name is required.';
        if (!hasContent(petName)) newErrors.petName = 'Pet name is required.';
        if (!hasContent(ownerEmail) || !ownerEmail.includes('@')) newErrors.ownerEmail = 'Invalid email.';
        if (!hasContent(ownerAddress)) newErrors.ownerAddress = 'Owner address is required.';
        if (!hasContent(billingAddress) && !billingSameAsOwner) newErrors.billingAddress = 'Billing address is required.';
        if (!hasContent(petColor)) newErrors.petColor = 'Pet color is required.';
        if (!hasContent(petGender)) newErrors.petGender = 'Pet gender is required.';
        if (!hasContent(petSpecies)) newErrors.petSpecies = 'Pet species is required.';
        if (petSpecies === 'other' && !hasContent(additionalInfo)) newErrors.additionalInfo = 'Please specify the species.';

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            console.log('Form is valid and ready to submit');
           
        }
    };

    return (
        <div className='new-patient-info'>
            <a href="#main-content" className="skip-link">Skip to Main Content</a>
            <form onSubmit={handleSubmit}>
                <main id="main-content">
                    <h1>New Patient Form</h1>
                    <p>Welcome to our clinic! If you are a new pet patient, please take a moment to fill out the registration form provided. This ensures we can offer the best care tailored to your pet is specific needs.</p>
                        <div className='info-box'>
                    <AccordionSection label="Pet Information" defaultOpen={true}>
                        <label>Pet Name:
                            <input type="text" value={petName} onChange={(e) => setPetName(e.target.value)} />
                            {errors.petName && <p style={{color: 'red'}}>{errors.petName}</p>}
                        </label>
                        <label>Pet Color:
                            <input type="text" value={petColor} onChange={(e) => setPetColor(e.target.value)} />
                            {errors.petColor && <p style={{color: 'red'}}>{errors.petColor}</p>}
                        </label>
                        <label>Pet Gender:
                            <select value={petGender} onChange={(e) => setPetGender(e.target.value)}>
                                <option value="">Select Gender</option>
                                <option value="female_unspayed">Female (Unspayed)</option>
                                <option value="male_unneutered">Male (Unneutered)</option>
                                <option value="female_spayed">Female (Spayed)</option>
                                <option value="male_neutered">Male (Neutered)</option>
                            </select>
                            {errors.petGender && <p style={{color: 'red'}}>{errors.petGender}</p>}
                        </label>
                        <label>Pet Species:
                            <select value={petSpecies} onChange={(e) => setPetSpecies(e.target.value)}>
                                <option value="">Select Species</option>
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.petSpecies && <p style={{color: 'red'}}>{errors.petSpecies}</p>}
                        </label>
                        {petSpecies === 'other' && (
                            <label>Specify Species:
                                <input type="text" value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} />
                                {errors.additionalInfo && <p style={{color: 'red'}}>{errors.additionalInfo}</p>}
                            </label>
                        )}
                    </AccordionSection>

                    <AccordionSection label="Owner Information">
                        <label>Owner Name:
                            <input type="text" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} />
                            {errors.ownerName && <p style={{color: 'red'}}>{errors.ownerName}</p>}
                        </label>
                        <label>Owner Email:
                            <input type="text" value={ownerEmail} onChange={(e) => setOwnerEmail(e.target.value)} />
                            {errors.ownerEmail && <p style={{color: 'red'}}>{errors.ownerEmail}</p>}
                        </label>
                        <label>Owner Phone:
                            <input type="text" value={ownerPhone} onChange={(e) => setOwnerPhone(e.target.value)} />
                            {errors.ownerPhone && <p style={{color: 'red'}}>{errors.ownerPhone}</p>}
                        </label>
                        <label>Owner Address:
                            <input type="text" value={ownerAddress} onChange={(e) => setOwnerAddress(e.target.value)} />
                            {errors.ownerAddress && <p style={{color: 'red'}}>{errors.ownerAddress}</p>}
                        </label>
                    </AccordionSection>
                    <AccordionSection label="Billing Information">
                        <label>
                            <input
                                type="checkbox"
                                checked={billingSameAsOwner}
                                onChange={toggleBillingAddress}
                            />
                            Billing address is the same as owner address
                        </label>
                        <label>Billing Address:
                            <input
                                type="text"
                                value={billingAddress}
                                onChange={handleBillingAddressChange}
                                readOnly={billingSameAsOwner}  
                            />
                            {errors.billingAddress && <p style={{color: 'red'}}>{errors.billingAddress}</p>}
                        </label>
                    </AccordionSection>

                    <button type="submit">Submit</button>
                </div>
                </main>
            </form>
        </div>
    );
}

export default NewPatientForm;

