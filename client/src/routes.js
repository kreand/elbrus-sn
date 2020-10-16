import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import AuthPage from './pages/AuthPage/AuthPage'
import EmployersPage from './pages/EmployersPage/EmployersPage'
import EventsPage from './pages/EventsPage/EventsPage'
import Main from './pages/Main/Main'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import RatingsPage from './pages/RatingsPage/RatingsPage'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/employers" exact>
          <EmployersPage />
        </Route>
        <Route path="/events" exact>
          <EventsPage />
        </Route>
        <Route path="/ratings" exact>
          <RatingsPage />
        </Route>
        <Route path="/profile" exact>
          <ProfilePage />
        </Route>
        <Redirect to="/profile" exact/>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    )
  }
  return (
    <Switch>
      <Route path="/auth" exact>
        <AuthPage />
      </Route>
      <Redirect to="/auth" />
    </Switch>
  )
}
