import React from 'react';
import RatingOfOneStudent from '../RatingOfOneStudent/RatingOfOneStudent';
import ChangeGroupAndRoleComponent from '../../components/ChangeGroupAndRoleComponent/ChangeGroupAndRoleComponent';

const AdminEditStudentPage = () => {
  return (
    <div>
      <RatingOfOneStudent />
      <ChangeGroupAndRoleComponent style={{ marginTop: '3em' }} />
    </div>
  );
};

export default AdminEditStudentPage;
