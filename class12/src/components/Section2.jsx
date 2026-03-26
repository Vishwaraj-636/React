import React, { useState, useEffect } from 'react';
import AllCourses from './AllCourses';

const Section2 = (props) => {
  return (
    <div>
      Section 2
      <AllCourses courseData={props.courseData} />
    </div>
  );
};

export default Section2;