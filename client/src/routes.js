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
        <Route path="/employers">
          <EmployersPage />
        </Route>
        <Route path="/events">
          <EventsPage />
        </Route>
        <Route path="/ratings">
          <RatingsPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Redirect to="/profile" />
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    )
  }
  return (
    <Switch>
      <Route path="/auth">
        <AuthPage />
      </Route>
      <Redirect to="/auth" />
    </Switch>
  )
}
