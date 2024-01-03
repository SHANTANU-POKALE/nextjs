import React from 'react';
import ReactMarkdown from 'react-markdown';

const AboutInstructor = ({ aboutInstructor }) => (
  <div>
    <h2>About Instructor</h2>
    <ReactMarkdown source={aboutInstructor.html_content} />
  </div>
);

export default AboutInstructor;
