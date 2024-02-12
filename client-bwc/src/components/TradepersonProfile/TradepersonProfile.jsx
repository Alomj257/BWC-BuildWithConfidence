import React from 'react';
import './TradepersonProfile.css';
import image from '../../assests/profile/P1.png';

const TradepersonProfile = () => {
    const profileData = {
        firstName: 'Jahangir Alom',
        location: 'Kolkata',
        rating: 4.5,
        address: '123 Main St',
        title: 'Software Developer',
        duration: '5 years',
        email: 'alomj257@gmail.com',
        phone: '7086955187',
        aboutMe: 'Experienced software engineer with a proven track record of 5 years in the industry. Proficient in Python, Java, and JavaScript, specializing in full lifecycle development from concept to deployment. Known for collaborative work ethic, adept problem-solving skills, and mentorship of junior developers.',
        image: image
    };

    return (
        <div className="tradeperson-profile">
            <div className="profile-header">
                <div className="profile-image">
                    <img src={profileData.image} alt="Profile" />
                </div>
                <div className="profile-info">
                    <div className="info-row name">
                        {profileData.firstName}
                    </div>
                    <div className="info-row">
                        <span style={{ color: 'red' }}><i className='bx bx-current-location' style={{ color: 'red' }}></i></span> {profileData.location}
                    </div>
                    <div className="info-row">
                        <span style={{ color: 'gold' }}><i className='bx bxs-star' style={{ color: 'gold' }}></i></span> {profileData.rating}
                    </div>
                </div>
            </div>
            <div className="profile-details">
                <div className="details">
                    <h2>Details</h2>
                    <ul>
                        <li><strong>Address:</strong> {profileData.address}</li>
                        <li><strong>Title:</strong> {profileData.title}</li>
                        <li><strong>Duration:</strong> {profileData.duration}</li>
                        <li><strong>Email:</strong> {profileData.email}</li>
                        <li><strong>Phone:</strong> {profileData.phone}</li>
                    </ul>
                </div>
                <div className="about-me">
                    <h2>About Me</h2>
                    <p>{profileData.aboutMe}</p>
                </div>
            </div>
        </div>
    );
};

export default TradepersonProfile;
