import React from 'react'
import App from './App'
//import { Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage'
import AdminsListPage from './pages/AdminsListPage'
import NotFoundPage from './pages/NotFoundPage'

/*export default () => (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/users" component={UsersListPage} />
  </div>
)*/

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UsersListPage,
        path: '/users',
        exact: true
      },
      {
        ...AdminsListPage,
        path: '/admins',
        exact: true
      },
      {
        ...NotFoundPage
      }
    ]
  }
]