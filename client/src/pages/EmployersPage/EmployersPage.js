import React, {useEffect} from 'react'
import AddEmployerForm from '../../components/AddEmployerForm/AddEmployerForm';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import EmployerNav from '../../components/EmployerNav/EmployerNav';
import AllEmployers from '../../components/AllEmployers/AllEmployers';
import {useDispatch} from 'react-redux';
import {getEmployers} from '../../redux/actionCreators/employerAC';
import EmployerProfile from '../../components/EmployerProfile/EmployerProfile';

const EmployersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployers())
  }, [])

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/add-employer'}>
            <EmployerNav/>
            <AddEmployerForm/>
          </Route>
          <Route exact path={'/employers'}>
            <EmployerNav/>
            <AllEmployers/>
          </Route>
          <Route exact path={'/employer/:id'}>
            <EmployerProfile/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default EmployersPage
