import React from 'react'

import { BrowserRouter as Router, Routes, Switch } from 'react-router-dom';

import {Guest} from '../components/guard/Guest.js';

import Landing from '../pages/index'

import Pokemon from '../pages/Pokemon'

import NotFound from '../pages/NotFound'

const WebRoutes = () => {

    return (

        <Router>

            <Switch>

                <Guest path="/" exact component={Landing} />

                <Guest path="/pokemon/:id" component={Pokemon} />

                <Guest path="*" exact component={NotFound} />

            </Switch>

        </Router>
    )

}

export default WebRoutes;
