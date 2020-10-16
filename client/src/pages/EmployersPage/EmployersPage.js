import React from 'react'
import AddEmployerForm from '../../components/AddEmployerForm/AddEmployerForm';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import EmployerNav from '../../components/EmployerNav/EmployerNav';
import AllEmployers from '../../components/AllEmployers/AllEmployers';

const EmployersPage = () => {
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
