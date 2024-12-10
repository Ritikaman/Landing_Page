import React, { useState, useEffect } from 'react';
import './Team.css';

const Team = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        "https://www.iitbracing.org/assets/team-C9nQho_f.jpeg",
        "https://www.iitbracing.org/assets/AtharvaChodankar_COO-aG78BSL1.jpeg",
        "https://www.iitbracing.org/assets/TharunMahesh_ProjectManager-C1SkYIxo.jpg",
        "https://www.iitbracing.org/assets/sandeep-BJV6FPy6.jpg",
        "https://www.iitbracing.org/assets/PraharshithaAryasomayajula_CTODynamics-fz1liC1i.jpg",
        "https://www.iitbracing.org/assets/riya-CzwajgBy.jpeg",
        "https://www.iitbracing.org/assets/ShubhangShanghvi_OperationsManager-MgMt4FXm.jpg",
        "https://www.iitbracing.org/assets/soham-BbFz7IMR.jpeg",
        "https://www.iitbracing.org/assets/AnanyaSrivastava_Manager-C_f0xcuM.jpg",
        "https://www.iitbracing.org/assets/ShristiShrivastava_DesignEngineer-BsOt4bWG.jpeg",
        "https://www.iitbracing.org/assets/AryanChauhan_DesignEngineer-DFyapJ5W.jpg",
        "https://www.iitbracing.org/assets/PrakharTiwari_DesignEngineer-80tobllv.jpg"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='team-container'>
            <div className="image-container">
                <img 
                    src={images[currentImage]} 
                    alt={`Team ${currentImage + 1}`} 
                    className="team-image" 
                />
            </div>
            <div className="paragraph-container">
                <p style={{fontSize:"1.5rem"}}>
                    Leading India's charge in Formula Student Electric with innovative,sustainable solutions.Pioneering the future of electric mobility with passion and excellence.Driving sustainable electric mobility,propelling India onto the global stage.
                </p>
            </div>
        </div>
    );
};

export default Team;
