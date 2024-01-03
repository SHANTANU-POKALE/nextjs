import React from 'react';

const Instructor = ({ instructor }) => (
  <div>
    <h2>Instructor: {instructor.name}</h2>
    <p>Social Media:</p>
    <ul>
      {Object.entries(instructor.social_media).map(([platform, isActive]) => (
        <li key={platform}>{platform}: {isActive ? 'Active' : 'Inactive'}</li>
      ))}
    </ul>
  </div>
);

export default Instructor;



