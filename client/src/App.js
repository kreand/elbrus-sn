import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import EmployersPage from './pages/EmployersPage/EmployersPage';
import EventsPage from './pages/EventsPage/EventsPage';
import Main from './pages/Main/Main';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import RatingsPage from './pages/RatingsPage/RatingsPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/employers">
          <EmployersPage />
        </Route>
        <Route path="/auth">
          <AuthPage />
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
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
