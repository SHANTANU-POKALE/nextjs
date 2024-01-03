import React from 'react';

const Testimonial = ({ testimonial }) => (
  <div>
    <h2>Testimonial</h2>
    <p>{testimonial.text}</p>
    <p>Reviewer: {testimonial.reviewer_name}</p>
    <p>Designation: {testimonial.reviewer_designation}</p>
  </div>
);

export default Testimonial;
