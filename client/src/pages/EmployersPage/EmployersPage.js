import React, {useEffect} from 'react'
import AddEmployerForm from '../../components/AddEmployerForm/AddEmployerForm';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import EmployerNav from '../../components/EmployerNav/EmployerNav';
import AllEmployers from '../../components/AllEmployers/AllEmployers';
import {useDispatch, useSelector} from 'react-redux';
import {getEmployers} from '../../redux/actionCreators/employerAC';

const EmployersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployers())
  }, [])

  return (
    <>
      <BrowserRouter>
        <EmployerNav/>
        <Switch>
          <Route exact path={'/add-employer'}>
            <AddEmployerForm/>
          </Route>
          <Route exact path={'/employers'}>
            <AllEmployers/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default EmployersPage
