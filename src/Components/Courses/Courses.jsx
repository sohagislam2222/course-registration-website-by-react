import PropTypes from 'prop-types';
import Course from './Course';
import { useState } from 'react';
import { useEffect } from 'react';

const Courses = ({ handleCourseSelection }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch('courses.json')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map(course => (
        <Course
          key={course.id}
          course={course}
          handleCourseSelection={handleCourseSelection}
        ></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {};

export default Courses;
