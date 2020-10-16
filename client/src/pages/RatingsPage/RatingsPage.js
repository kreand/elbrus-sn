import React from 'react'
import InputComponent from '../../components/Input/InputComponent';
import {Link} from 'react-router-dom';

const RatingsPage = () => {
  return (
    <div>
<InputComponent size="large" placeholder="Search of student" justify="left" span="7" offset="4"/>
<ul>
   <li> <Link to="/student">Заглушка</Link></li>
   <li> <Link to="/student">Заглушка</Link></li>
   <li> <Link to="/student">Заглушка</Link></li>
   <li> <Link to="/student">Заглушка</Link></li>
</ul>
    </div>
  )
}

export default RatingsPage
