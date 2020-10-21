import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';

const StudentProfilePage = () => {
  const students = useSelector(state => state.rating.allUsers);
  const studentID = useParams().id;

  const user = students.find(stud => stud._id === studentID);

  return <ProfileComponent user={user} />;
};

export default StudentProfilePage;
