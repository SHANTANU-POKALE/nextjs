import React from 'react';
import ReactMarkdown from 'react-markdown';

const Course = ({ course }) => (
  <div>
    <h2>Course: {course.title}</h2>
    <p>Fee: {course.fee.amount} {course.fee.currency}</p>
    <p>Inclusions:</p>
    <ul>
      <li>On-Demand Videos: {course.inclusions.on_demand_videos}</li>
      <li>Live Q&A Sessions: {course.inclusions.live_qa_sessions ? 'Available' : 'Not Available'}</li>
      <li>WhatsApp Community: {course.inclusions.whatsapp_community ? 'Available' : 'Not Available'}</li>
    </ul>
    <div>
      <h3>About:</h3>
      <ReactMarkdown source={course.about.html_content} />
    </div>
    <div>
      <h3>What to Expect:</h3>
      <ReactMarkdown source={course.what_to_expect.html_content} />
    </div>
    <div>
      <h3>Key Topics:</h3>
      <ReactMarkdown source={course.key_topics.html_content} />
    </div>
  </div>
);

export default Course;
