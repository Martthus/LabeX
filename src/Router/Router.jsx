import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Screens/Home/Home'
import NotFound from '../Screens/NotFound/NotFound'
import SignIn from '../Screens/Login/SignIn'
import SignUp from '../Screens/Login/SignUp'
import ListTripsPage from '../Screens/ListTripsPage/ListTripsPage'
import TripDetailsPage from '../Screens/TripDetailsPage/TripDetailsPage'
import CreateTripPage from '../Screens/CreateTripPage/CreateTripPage'
import ApplicationForm from '../Screens/ApplicationForm/ApplicationForm'

export default function Router() {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/adm/signin">
                    <SignIn />
                </Route>
                <Route exact path="/adm/signup">
                    <SignUp />
                </Route>
                <Route exact path="/adm/trips/create">
                    <CreateTripPage />
                </Route>
                <Route exact path="/trips/list">
                    <ListTripsPage />
                </Route>
                <Route exact path="/adm/trips/details/:id">
                    <TripDetailsPage />
                </Route>
                <Route exact path="/application-form/:id">
                    <ApplicationForm />
                </Route>
                <Route >
                    <NotFound />
                </Route>
            </Switch>
        </>
    )
}