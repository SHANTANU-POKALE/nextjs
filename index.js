import React from 'react';
import Instructor from './Instructor';
import Course from './Course';
import AboutInstructor from './AboutInstructor';
import Testimonial from './Testimonial';

const Home = ({ data }) => {
  return (
    <div>
      <Instructor instructor={data.instructor} />
      <Course course={data.course} />
      <AboutInstructor aboutInstructor={data.about_instructor} />
      <Testimonial testimonial={data.testimonial} />
    </div>
  );
};

export async function getStaticProps() {
  // Fetch data from your MongoDB database here
  const data = /* Fetch data from MongoDB */ {};

  return {
    props: {
      data,
    },
  };
}

export default Home;
