import React, { useState, useEffect } from 'react';
import Course from './Course';

const AllCourses = (props) => {
  return (
    <div>
      all courses
      <Course courseData={props.courseData} />
      <Course />
      <Course />
      <Course />
    </div>
  );
};

export default AllCourses;